import MacrosContainer from "./cmps/MacrosContainer";
import ChatContainer from './cmps/ChatContainer';
import InputContainer from "./cmps/InputContainer";
import Toast from "./cmps/Toast";
import { ChatContext } from './context/ChatContext';
import { useState, useContext, useEffect } from "react";

export default function App() {
  const { isInvalidMessage } = useContext(ChatContext);
  const [toast, setToast] = useState({})

  useEffect(() => {
    isInvalidMessage ? setToast({ message: 'Invalid characters', background: 'rgba(203, 15, 15, 0.8)' }) : setToast({})
  }, [isInvalidMessage])

  return (
    <div className="App">
      {isInvalidMessage && <Toast toast={toast} />}
      <ChatContainer />
      <InputContainer />
      <MacrosContainer />
    </div>
  );
}
