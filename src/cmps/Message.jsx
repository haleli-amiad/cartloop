export default function Message({ message, author, onSendMacro }) {
  const style =
    author && author === 'server'
      ? { backgroundColor: '#E75818', color: '#fff', alignSelf: 'flex-start' }
      : { backgroundColor: '#fff', color: '#161616', alignSelf: 'flex-end' };

  const sendMacro = () => {
    !author ? onSendMacro(message) : null;
  };

  return (
    <li className="message" style={style} onClick={sendMacro}>
      {message}
    </li>
  );
}
