import { Link } from 'react-router-dom';
import logo from "../VANN_WEB_FOOTER.webp";
import "../styles/BaseLogo.css"

const BaseLogo = () => {

    return (
        <div className="baselogo">
            <Link to="/">
                <img className="logo" src={logo} alt="VANN logo"></img>
            </Link>
        </div>
    )
}

export default BaseLogo