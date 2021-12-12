import { ChatContext } from '../context/ChatContext';
import Controller from './Controller';
import { useContext, useRef } from 'react';
const MessageInput = () => {
  const inputRef = useRef();
  const { sendMessage, handleChange, message, sendByButton } = useContext(
    ChatContext
  );
  const submitMessage = () => {
    sendByButton(inputRef.current.value);
  };

  return (
    <section className="input-container">
      <div className="white-background">
        <form onSubmit={sendMessage}>
          <input
            value={message}
            type="text"
            ref={inputRef}
            onChange={handleChange}
            placeholder="Say something..."
          />
        </form>
        <Controller onSubmitMessage={submitMessage} />
      </div>
    </section>
  );
};

export default MessageInput;
