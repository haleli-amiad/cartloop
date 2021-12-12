import More from '../assets/imgs/more.png';

export default function Header() {
    return (
        <header className="chat-header flex space">
            <h1>In progress</h1>
            <img src={More} alt="more" />
        </header>
    )
}