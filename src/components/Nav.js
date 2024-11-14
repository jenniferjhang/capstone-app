import Logo from '../assets/Logo.svg'
import '../style.css';

const Nav = () => {
    return (
        <nav>
            <img src={Logo}/>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Menu</a></li>
                <li><a href="">Login</a></li>
                <li><a href="">Order Online</a></li>
                <li><a href="">Reserve a Table</a></li>
            </ul>
        </nav>
    )
}

export default Nav;