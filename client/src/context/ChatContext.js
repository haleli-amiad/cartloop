import { createContext, useState, useEffect, useRef } from 'react'
import io from 'socket.io-client';
export const ChatContext = createContext()

export const ChatProvider = ({ children }) => {
    const [id, setId] = useState();
    const [messages, setMessages] = useState([]);
    const [isInvalidMessage, setIsInvalidMessage] = useState(false)
    const [message, setMessage] = useState('');
    const socketRef = useRef();
    const messageData = {
        body: message,
        id,
        name: 'Cameron Williamson',
    };

    // Listeners
    useEffect(() => {
        const ENV_URL = process.env.NODE_ENV === 'development' ? `${window.location.hostname}:3030` : '/'
        socketRef.current = io.connect(ENV_URL);
        socketRef.current.on('id', (userId) => {
            setId(userId);
        });
        socketRef.current.on("message from server", message => {
            receivedMessage(message);
        })
        socketRef.current.on('message', (message) => {
            receivedMessage(message);
        });
    }, []);

    // Delete history when screen is full
    useEffect(() => {
        messages.length > 10 ? setMessages([]) : null
    }, [messages])

    // Validate against unallowed characters
    const validateMessage = () => {
        const regex = new RegExp(/[!@#$%^&*()"{}|<>]/g);
        const isUnallowedChars = regex.test(message)
        isUnallowedChars ? createToast() : sendMessage()
    }

    // Emit event to server sockets
    const sendMessage = () => {
        setMessage('');
        socketRef.current.emit('send message', messageData);
        socketRef.current.emit('debounce', null);
    }

    // Notify user for invalid message
    const createToast = () => {
        setIsInvalidMessage(true)
        setTimeout(() => {
            setIsInvalidMessage(false)
        }, 2000);
    }

    // Check message when pressing Enter
    const sendByKey = (e) => {
        e.preventDefault();
        validateMessage()
    }

    // Check message when pressing on 'Resolve' button
    const sendByButton = () => {
        if (!message) return
        validateMessage(message)
    }

    // Set macro as message (when clicking on macro)
    const setMacroAsMessage = (macro) => {
        setMessage(macro)
    }

    // Bind message and input
    const handleChange = (e) => {
        setMessage(e.target.value);
    }

    // Add new message to messages array
    const receivedMessage = (message) => {
        setMessages((oldMessages) => [...oldMessages, message]);
    }

    return (
        <ChatContext.Provider
            value={{
                receivedMessage, handleChange, sendByKey, messages, message, id, sendByButton, setMacroAsMessage, isInvalidMessage
            }}>
            {children}
        </ChatContext.Provider>
    )
}