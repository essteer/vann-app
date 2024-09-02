import { Link } from 'react-router-dom';
import '../../styles/carts/Checkout.css';

const Checkout = () => {

    return (
        <div className="checkout-container">
            <div className="spacing"></div>
                <div className="checkout-message-container">
                    <div className="spacing"></div>
                    <h2 className="checkout-message">Thank you for your purchase!</h2>
                    <Link to="/shop" onClick={() => window.scrollTo(0, 0)}>
                        <button className="cart-to-shop-button" >Shop again</button>
                    </Link>
                </div>
            <div className="spacing"></div>
        </div>
    );
};

export default Checkout;