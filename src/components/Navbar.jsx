import { Link } from 'react-router-dom';
import logo from "../VANN_WEB_LOGO.avif";
import "../styles/Navbar.css"

const Navbar = () => {

    return (
        <div className="navbar-container" >
            <nav className="navbar">
                <Link to="/">
                    <img className="logo" src={logo} alt="VANN logo"></img>
                </Link>
                <ul className="nav-links">
                    <li>
                        <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/vann_jewellery/" target="_blank">Instagram</a>
                    </li>
                    <li>
                        <Link to="/pages/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/search">Search</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar