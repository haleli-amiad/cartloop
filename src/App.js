import MacrosContainer from "./cmps/MacrosContainer";
import ChatContainer from './cmps/ChatContainer';
import InputContainer from "./cmps/InputContainer";
export default function App() {
  return (
    <div className="App">
      <ChatContainer />
      <InputContainer />
      <MacrosContainer />
    </div>
  );
}
