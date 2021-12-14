export default function Message({ message, author, onSendMacro }) {
  const style =
    author && author === 'user'
      ? { backgroundColor: '#E75818', color: '#fff' }
      : { backgroundColor: '#fff', color: '#161616' };

  const sendMacro = () => {
    !author ? onSendMacro(message) : null;
  };

  return (
    <li className="message" style={style} onClick={sendMacro}>
      {message}
    </li>
  );
}
