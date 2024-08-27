import logo from "../VANN_WEB_FOOTER.webp";
import "../styles/Footer.css"

const Footer = () => {

    return (
        <div className="footer">
            <a href="/">
                <img className="logo" src={logo} alt="VANN logo"></img>
            </a>
        </div>
    )
}

export default Footer