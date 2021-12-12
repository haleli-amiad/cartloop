export default function Message({ message, author, onSendMacro }) {
  const sendMacro = () => {
    onSendMacro(message);
  };
  const style =
    author && author === 'server'
      ? { backgroundColor: '#E75818', color: '#fff', alignSelf: 'flex-start' }
      : { backgroundColor: '#fff', color: '#161616', alignSelf: 'flex-end'};
  return (
    <li className="message" style={style} onClick={sendMacro}>
      {message}
    </li>
  );
}
