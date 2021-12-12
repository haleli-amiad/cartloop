import Smiley from '../assets/imgs/smiley.png';
import Attach from '../assets/imgs/attach.png';
import Plus from '../assets/imgs/plus.png';
export default function Controller({ onSubmitMessage }) {

  const submitMessage = () => { 
    onSubmitMessage();
  };

  return (
    <div className="controller flex space">
      <button className="add-button flex center">
        +
        {/* <img src={Plus} alt="add something" /> */}
        </button>
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
