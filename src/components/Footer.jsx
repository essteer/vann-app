import { Link } from 'react-router-dom';
import "../styles/Footer.css"

const Footer = () => {

    return (
        <div>
            <div className="footer-container">
                <div className="column">
                    <h3>Client services</h3>
                    <ul>
                        <li><Link to="/pages/delivery-and-return" >Delivery & returns</Link></li>
                        <li><Link to="/pages/privacy-policy" >Privacy policy</Link></li>
                        <li><Link to="/pages/contact" >Contact us</Link></li>
                    </ul>
                </div>
                <div className="column">
                    <h3>Product information</h3>
                    <ul>
                        <li><Link to="/pages/product-care" >Product care</Link></li>
                        <li><Link to="/pages/product-specifications" >Product specifications</Link></li>
                        <li><Link to="/pages/ring-size-chart" >Ring size chart</Link></li>
                    </ul>
                </div>
                <div className="column">
                    <h3>Company</h3>
                    <ul>
                        <li><Link to="/pages/about" >About us</Link></li>
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