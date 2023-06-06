import { ReactComponent as Logo } from "./images/Logo.svg"
function Nav() {
    return(
        <nav>
            <Logo/>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
        </nav>
    )
}

export default Nav;