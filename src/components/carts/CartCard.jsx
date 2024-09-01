import "../../styles/carts/CartCard.css"

const CartItem = (props) => {

    const name = props.name;
    const price = props.price;
    const imageURI = "https://www.vannjewellery.com/cdn/shop" + props.imageURI;
    const quantity = props.quantity;

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(price);
    };

    return (
        <div className="cart-card-container">
            <img className="cart-card-image" src={imageURI} />
            <h3 className="cart-card-name">{name}</h3>
            <p className="cart-card-detail">US$&nbsp;{price}.00</p>
            <p className="cart-card-detail">x {quantity}</p>
            <p className="cart-card-detail">Subtotal:<br/>US{formatPrice(price * quantity)}</p>
        </div>
    )
}

export default CartItem