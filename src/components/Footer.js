import '../style.css';
import Logo from '../assets/Logo.svg'

const Footer = () => {
    return (
        <footer>
            <img src={Logo} className="logo"/>
            <div className="footer-list">
                <h3>Links</h3>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Menu</a></li>
                    <li><a href="">Login</a></li>
                    <li><a href="">Order Online</a></li>
                    <li><a href="">Reserve a Table</a></li>
                </ul>
            </div>
            <div className="footer-list">
                <h3>Contact</h3>
                <ul>
                    <li><a href="">Address</a></li>
                    <li><a href="">Phone Number</a></li>
                    <li><a href="">Email</a></li>
                </ul>
            </div>
            <div className="footer-list">
                <h3>Social</h3>
                <ul>
                    <li><a href="">A</a></li>
                    <li><a href="">B</a></li>
                    <li><a href="">C</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;