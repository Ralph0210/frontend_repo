import { ReactComponent as Logo } from "./images/Logo.svg"
function Footer() {
    return(
        <footer>
            <Logo/>
            <ul >
                <li>Doormat Navigtaion</li>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
            <ul>
                <li>Contact</li>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
            <ul>
                <li>Social Media Links</li>
            </ul>
        </footer>
    )
}

export default Footer