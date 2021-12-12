import Smiley from '../assets/imgs/smiley.png';
import Attach from '../assets/imgs/attach.png';

export default function Controller({ onSubmitMessage }) {

  const submitMessage = () => { 
    onSubmitMessage();
  };

  return (
    <div className="controller flex space">
      <button className="add-button">+</button>
      <span className="emoji-container">
        <img src={Attach} alt="attach file" />
        <img src={Smiley} alt="add emoji" />
      </span>
      <button className="send-button" onClick={submitMessage}>
        Resolve
      </button>
    </div>
  );
}
