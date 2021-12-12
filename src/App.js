import MacrosContainer from "./cmps/MacrosContainer";
import ChatContainer from './cmps/ChatContainer';
import InputContainer from "./cmps/InputContainer";
export default function App() {
  return (
    <div className="App">
      <ChatContainer/>
      <MacrosContainer/>
      <InputContainer/>
    </div>
  );
}

// export default App;
// import React, { useEffect, useState } from 'react';
// import io from 'socket.io-client';
// import MessageInput from './cmps/MessageInput';


// function App() {
//   const [socket, setSocket] = useState(null);

//   useEffect(() => {
//     const newSocket = io(`http://${window.location.hostname}:3030`);
//     console.log(newSocket);
//     setSocket(newSocket);
//     console.log(socket, newSocket);
//     return () => newSocket.close();
//   }, []);

//   return (
//     <div className="App">
//       <header className="app-header">
//         React Chat
//       </header>
//       { socket ? (
//         <div className="chat-container">
//           <Messages socket={socket} />
//           <MessageInput socket={socket} />
//         </div>
//       ) : (
//         <div>Not Connected</div>
//       )}
//     </div>
//   );
// }

// export default App;