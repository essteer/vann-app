import { Link } from 'react-router-dom';
import CartCard from '../carts/CartCard';
import '../../styles/carts/CartGrid.css';

function CartGrid({ cartItems }) {

    return (
        <div>
            <div className="cart-grid">
                {cartItems.map((item) => (
                    <Link to={`/products/${item.productId}`} key={item.productId} onClick={() => window.scrollTo(0, 0)}>
                    <CartCard
                        key={item.productId}
                        imageURI={item.productImage}
                        name={item.productName}
                        price={item.productPrice}
                        quantity={item.quantity}
                    />
                    </Link>
                ))}
            </div>
            <div className="spacing" ></div>
        </div>
    );
}

export default CartGrid;