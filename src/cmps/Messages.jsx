import { ChatContext } from '../context/ChatContext';
import { useContext } from 'react';
import Message from './Message';
import CartloopAvatar from '../assets/imgs/cartloop.png';
import Smiley from '../assets/imgs/smiley.png';
import Help from '../assets/imgs/help.png';
export default function Messages() {
  const { messages, id } = useContext(ChatContext);

  return (
    messages && (
      <ul className="messages flex col">
        {messages.map((message, i) => {
          if (message.id === id) {
            return (
              <span className="align-end justify-right" key={i}>
                {messages[i - 1]?.id !== message.id && <p>{message.name}</p>}
                <span className="flex center">
                  <Message message={message.body} author={'user'} />
                  <img
                    src={CartloopAvatar}
                    alt="cartloop bot"
                    className="chat-emoji cartloop-avatar"
                  />
                </span>
              </span>
            );
          } else {
            return (
              <span className="align-start" key={i}>
                {messages[i - 1]?.id !== message.id && <p>{message.name}</p>}
                <span className="flex center">
                  <Message message={message.body} author={'server'} />
                  <img
                    src={Smiley}
                    alt="send emoji"
                    className="pointer chat-emoji smiley-emoji"
                  />
                  <img
                    src={Help}
                    alt="ask for help"
                    className="pointer chat-emoji"
                  />
                </span>
              </span>
            );
          }
        })}
      </ul>
    )
  );
}
