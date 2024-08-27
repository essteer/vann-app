import logo from "../VANN_WEB_LOGO.avif";
import "../styles/Navbar.css"

const Navbar = () => {

    return (
        <div className="navbar-container" >
            <nav className="navbar">
                <a href="/">
                    <img className="logo" src={logo} alt="VANN logo"></img>
                </a>
                <ul className="nav-links">
                    <li>
                        <a href="/shop">Shop</a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/vann_jewellery/" target="_blank">Instagram</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                    <li>
                        <a href="/search">Search</a>
                    </li>
                    <li>
                        <a href="/cart">Cart</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar