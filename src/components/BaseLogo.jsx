import { Link } from 'react-router-dom';
import "../styles/BaseLogo.css"

const BaseLogo = () => {

    return (
        <div className="baselogo">
            <Link to="/">
                <img className="logo" src="/images/VANN_WEB_FOOTER.webp" alt="VANN logo"></img>
            </Link>
        </div>
    )
}

export default BaseLogo