import { ChatContext } from '../context/ChatContext';
import { useContext } from 'react';
import Message from './Message';
const Messages = () => {
  const { messages, id } = useContext(ChatContext);
  // console.log(messages);
  return (
    <div className="messages">
      {messages.map((message, i) => {
        if (message.id === id) {
          return <Message key={i} message={message.body} author={'user'} />;
        } else {
          return <Message key={i} message={message.body} author={'server'} />;
        }
      })}
    </div>
  );
};

export default Messages;
