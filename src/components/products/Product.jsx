import "../../styles/Product.css"

const Product = (props) => {

    const name = props.name;
    const category = props.category;
    const price = props.price;
    const imageURI = "https://www.vannjewellery.com/cdn/shop" + props.imageURI;
    const colour = props.colour;
    const size = props.size;

    return (
        <div className="product">
            <div className="column-container">
                <div className="left-column">
                    <img className="image" src={imageURI} />
                </div>
                <div className="right-column">
                    <h1 className="productName">{name}</h1>
                    <p>US${price}</p>
                    <div>
                        {colour && <p>COLOUR</p>}
                        <p>{colour}</p>
                    </div>
                    <div>
                        {size && <p>SIZE & FIT</p>}
                        <p>{size}</p>
                    </div>
                    <p>{size}</p>
                </div>
            </div>
            <div className="spacing" >&nbsp;</div>
        </div>
    )
}

export default Product