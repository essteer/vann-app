import { Link } from 'react-router-dom';
import "../../styles/boilerplate/Footer.css"

const Footer = () => {

    return (
        <div>
            <div className="footer-container">
                <div className="column">
                    <h3>Client services</h3>
                    <ul>
                        <li><Link to="/pages/delivery-and-return" onClick={() => window.scrollTo(0, 0)} >Delivery & returns</Link></li>
                        <li><Link to="/pages/privacy-policy" onClick={() => window.scrollTo(0, 0)} >Privacy policy</Link></li>
                        <li><Link to="/pages/contact" onClick={() => window.scrollTo(0, 0)} >Contact us</Link></li>
                    </ul>
                </div>
                <div className="column">
                    <h3>Product information</h3>
                    <ul>
                        <li><Link to="/pages/product-care" onClick={() => window.scrollTo(0, 0)} >Product care</Link></li>
                        <li><Link to="/pages/product-specifications" onClick={() => window.scrollTo(0, 0)} >Product specifications</Link></li>
                        <li><Link to="/pages/ring-size-chart" onClick={() => window.scrollTo(0, 0)} >Ring size chart</Link></li>
                    </ul>
                </div>
                <div className="column">
                    <h3>Company</h3>
                    <ul>
                        <li><Link to="/pages/about" onClick={() => window.scrollTo(0, 0)} >About us</Link></li>
                        <li><a href="https://www.instagram.com/vann_jewellery/" target="_blank" >Press</a></li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; 2024 VANN</p>
            </div>
        </div>
    )
}

export default Footer