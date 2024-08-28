import { Link } from 'react-router-dom';
import "../../styles/Navbar.css"

const Navbar = () => {

    return (
        <div className="navbar-container" >
            <nav className="navbar">
                <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                    <img className="logo" src="/images/VANN_WEB_LOGO.avif" alt="VANN logo"></img>
                </Link>
                <ul className="nav-links">
                    <li>
                        <Link to="/shop" onClick={() => window.scrollTo(0, 0)}>Shop</Link>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/vann_jewellery/" target="_blank">Instagram</a>
                    </li>
                    <li>
                        <Link to="/pages/contact" onClick={() => window.scrollTo(0, 0)}>Contact</Link>
                    </li>
                    <li>
                        <Link to="/search" onClick={() => window.scrollTo(0, 0)}>Search</Link>
                    </li>
                    <li>
                        <Link to="/cart" onClick={() => window.scrollTo(0, 0)}>Cart</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar