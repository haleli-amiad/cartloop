import Message from './Message';
import arrowDown from '../assets/imgs/arrowdown.png';

export default function MacrosContainer() {
  const messages = [
    'Immersive chat startups have a very different vision for the future of voice',
    'Hello %user%  👋. My name is %expert%. What can I do for you today?',
    'Apple opens another megastore in China amid William Barr criticism',
    'Any mechanical keyboard enthusiasts in design?',
    'Understanding color theory: the color wheel and finding complementary colors',
    'The More Important the Work, the More Important the Rest'
  ];

  return (
    <div className="macros-container">
      <div className="macros-header flex space">
        <h2>Macros</h2>
        <img src={arrowDown} alt="arrow down" />
      </div>
      <ul>
        {messages.map((message, i) => <Message message={message} key={i} />)}
      </ul>
    </div>
  );
}
