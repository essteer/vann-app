import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from "../../App.js";
import "../../styles/Product.css";

const Product = () => {

    const { cart, updateCart } = useContext(CartContext);
    const { productId } = useParams();
    const [product, setProduct] = useState(null)
    const [quantity, setQuantity] = useState(1)
    const url = `http://localhost:9001/api/v1/products/${productId}`

    useEffect(() => {
        const fetchProduct = () => {
            axios.get(url).then(response => {
                if (response.data) {
                    setProduct(response.data)
                } else {
                    console.log('Error retrieving data')
                }
            })
                .catch(error => console.log('Error retrieving data: ' + error))
        }
        fetchProduct()
    }, [productId])


    const incrementQuantity = () => {
        setQuantity(quantity + 1)
    }


    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const handleAddToCart = async () => {
        const currentCartItems = cart.cartItems || {};
        const existingQuantity = currentCartItems[productId] || 0;
        const newQuantity = existingQuantity + quantity;

        const updatedCartItems = {
            ...currentCartItems,
            [productId]: newQuantity
        };
        updateCart(cart.cartId, updatedCartItems);
    };

    
    return (
        <div className="product">
            {product && (
                <div className="container-container">
                    <div className="product-lead-container">
                        <h1 className="product-name">{product.productName}</h1>
                        <p className="product-price">US${product.productPrice}.00</p>
                    </div>
                    <div className="product-main-container">
                        <div className="product-image-container">
                            <img className="product-image" src={`https://www.vannjewellery.com/cdn/shop/${product.productImage}`} />
                        </div>
                        <div className="product-details-and-quantity-container">
                            <div className="product-details-container">
                                <div>
                                    {product.colour && <p className="subtitle">Colour</p>}
                                    <p>{product.colour ? product.colour.replace(/_/g, ' ') : null}</p>
                                </div>
                                <div>
                                    {product.size && <p className="subtitle">Size & Fit</p>}
                                    <p>{product.size ? product.size.replace(/_/g, ' ') : null}</p>
                                </div>
                            </div>
                            <div className="product-quantity-container">
                                <div>
                                    <p className="subtitle">Quantity</p>
                                    <div className="quantity-button-container">
                                        <button onClick={decrementQuantity} className="quantity-button">-</button>
                                        <span className="quantity"> {quantity} </span>
                                        <button onClick={incrementQuantity} className="quantity-button">+</button>
                                    </div>
                                    <div className="product-add-to-cart-container">
                                        <button className="add-to-cart-button" onClick={handleAddToCart}>Add to cart</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>)
            }
            <div className="spacing" >&nbsp;</div>
        </div>
    )
}

export default Product