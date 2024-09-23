import { Link } from 'react-router-dom';
import CartCard from '../carts/CartCard';
import '../../styles/carts/CartGrid.css';

function CartGrid({ cartItems }) {

    return (
        <div>
            <div className="cart-grid">
                {cartItems.map((item) => (
                    <Link to={`/products/${item.id}`} key={item.id} onClick={() => window.scrollTo(0, 0)}>
                    <CartCard
                        key={item.id}
                        imageURI={item.imageURI}
                        name={item.name}
                        price={item.price}
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