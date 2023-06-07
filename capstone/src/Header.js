import { ReactComponent as Logo } from "./images/Logo.svg"
import './Header.css';

function Header() {
    return(
        <header>
            <Logo className='logo' style={{flexShrink: 0, marginRight:"45px"}}/>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Reservations</a></li>
                    <li><a href="#">Order Online</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;