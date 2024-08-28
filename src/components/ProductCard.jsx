import "../styles/ProductCard.css"

const Product = (props) => {

    const name = props.name;
    const price = props.price;
    const imageURI = "https://www.vannjewellery.com/cdn/" + props.imageURI;

    return (
        <div className="product-card-container">
            <img className="product-card-image" src={imageURI} />
            <h1 className="product-card-name">{name}</h1>
            <p className="product-card-price">US$ {price}</p>
        </div>
    )
}

export default Product