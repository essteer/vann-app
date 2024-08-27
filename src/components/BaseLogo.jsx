import logo from "../VANN_WEB_FOOTER.webp";
import "../styles/BaseLogo.css"

const BaseLogo = () => {

    return (
        <div className="baselogo">
            <a href="/">
                <img className="logo" src={logo} alt="VANN logo"></img>
            </a>
        </div>
    )
}

export default BaseLogo