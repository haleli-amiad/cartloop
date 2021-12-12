export default function Message({ message, author }) {
  return (
    <li
      className="message"
      style={{ backgroundColor: author === 'server' ? 'pink' : 'grey' }}
    >
      {message}
    </li>
  );
}
