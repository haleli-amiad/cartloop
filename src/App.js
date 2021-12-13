import MacrosContainer from "./cmps/MacrosContainer";
import ChatContainer from './cmps/ChatContainer';
import InputContainer from "./cmps/InputContainer";
export default function App() {
  return (
    <div className="App flex space">
      <span className="desktop-container">
        <ChatContainer />
        <InputContainer />
      </span>
      <MacrosContainer />
    </div>
  );
}
