export default function Message({ message, author }) {
  const style = (author && author === 'server') ? {backgroundColor: '#E75818', color:'#fff'} : {backgroundColor: '#fff', color: "#161616"}
  return (
    <li
      className="message"
      style={style}
    >
      {message}
    </li>
  );
}
