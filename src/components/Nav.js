import Logo from '../assets/Logo.svg'
import '../style.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <img src={Logo}/>
            <div className='nav-list'>
                <Link to="/" className='nav-item'>Home</Link>
                <Link to="/about" className='nav-item'>About</Link>
                <Link to="/login" className='nav-item'>Login</Link>
                <Link to="/order" className='nav-item'>Order Online</Link>
                <Link to="/booking" className='nav-item'>Reserve a Table</Link>
            </div>
        </nav>
    )
}

export default Nav;