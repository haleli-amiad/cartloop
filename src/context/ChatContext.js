import { createContext, useState, useEffect, useRef } from 'react'
import io from 'socket.io-client';
export const ChatContext = createContext()

export const ChatProvider = ({ children }) => {
    const [id, setId] = useState();
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const socketRef = useRef();

    const messageData = {
        body: message,
        id
    };

    const sendMessage = (e) => {
        e.preventDefault();
        setMessage('');
        socketRef.current.emit('send message', messageData);
        setTimeout(() => {
            socketRef.current.emit('debounced', null);
        }, 4000);
    }

    const sendByButton = () => {
        setMessage('')
        socketRef.current.emit('send message', messageData);
        setTimeout(() => {
            socketRef.current.emit('debounced', null);
        }, 4000);
    }

    const handleChange = (e) => {
        setMessage(e.target.value);
    }

    useEffect(() => {
        // setId('user')
        socketRef.current = io.connect(`http://${window.location.hostname}:3030`);
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

    const receivedMessage = (message) => {
        setMessages((oldMsgs) => [...oldMsgs, message]);
    }

    return (
        <ChatContext.Provider
            value={{
                receivedMessage, handleChange, sendMessage, messages, message, id, sendByButton
            }}>
            {children}
        </ChatContext.Provider>
    )
}