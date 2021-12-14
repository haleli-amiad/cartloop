import { ChatContext } from '../context/ChatContext';
import InputController from './InputController';
import { useContext, useRef } from 'react';
const MessageInput = () => {
  const inputRef = useRef();
  const { sendByKey, handleChange, message, sendByButton } = useContext(
    ChatContext
  );
  const submitMessage = () => {
    sendByButton(inputRef.current.value);
  };

  return (
    <section className="input-container">
      <div className="white-background flex space col">
        <form onSubmit={sendByKey}>
          <input
            value={message}
            type="text"
            ref={inputRef}
            onChange={handleChange}
            placeholder="Say something..."
          />
        </form>
        <InputController onSubmitMessage={submitMessage} />
      </div>
    </section>
  );
};

export default MessageInput;
