import "../styles/Footer.css"

const Footer = () => {

    return (
        <div>
            <div className="footer-container">
                <div className="column">
                    <h3>Client services</h3>
                    <ul>
                        <li><a href="/pages/delivery-and-return" >Delivery & Returns</a></li>
                        <li><a href="/pages/privacy-policy" >Privacy policy</a></li>
                        <li><a href="/pages/contact" >Contact us</a></li>
                    </ul>
                </div>
                <div className="column">
                    <h3>Product information</h3>
                    <ul>
                        <li><a href="/pages/product-care" >Product care</a></li>
                        <li><a href="/pages/product-specifications" >Product specifications</a></li>
                        <li><a href="/pages/ring-size-chart" >Ring size chart</a></li>
                    </ul>
                </div>
                <div className="column">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="/pages/about" >About us</a></li>
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