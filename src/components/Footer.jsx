import "../styles/Footer.css"

const Footer = () => {

    return (
        <div>
            <div className="footer-container">
                <div className="column">
                    <h3>Client services</h3>
                    <ul>
                        <li>Delivery & Returns</li>
                        <li>Privacy policy</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                <div className="column">
                    <h3>Product information</h3>
                    <ul>
                        <li>Product care</li>
                        <li>Product specifications</li>
                        <li>Ring size chart</li>
                    </ul>
                </div>
                <div className="column">
                    <h3>Company</h3>
                    <ul>
                        <li>About us</li>
                        <a href="https://www.instagram.com/vann_jewellery/" target="_blank" ><li>Press</li></a>
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