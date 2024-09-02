import { Link } from 'react-router-dom';
import "../../styles/boilerplate/BaseLogo.css"

const BaseLogo = () => {

    return (
        <div className="base-logo-container">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <img className="base-logo-image" src="/images/VANN_WEB_FOOTER.webp" alt="VANN logo"></img>
            </Link>
        </div>
    )
}

export default BaseLogo