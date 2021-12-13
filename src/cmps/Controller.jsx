import Smiley from '../assets/imgs/smiley.png';
import Attach from '../assets/imgs/attach.png';
export default function Controller({ onSubmitMessage }) {
  const submitMessage = () => {
    onSubmitMessage();
  };

  return (
    <div className="controller flex space">
      <span className="options-container flex space center">
        <button className="add-button flex center">+</button>
        <img src={Attach} className="emoji" alt="attach file" />
        <img src={Smiley} className="emoji" alt="add emoji" />
      </span>
      <button className="send-button flex center" onClick={submitMessage}>
        Resolve
      </button>
    </div>
  );
}
