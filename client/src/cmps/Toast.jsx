export default function Toast({ toast }) {
  return (
    <div className={toast ? `opacity toast flex center` : 'toast'} style={{ backgroundColor: toast.background }}>
      <p>{toast.message}</p>
    </div>
  );
}
