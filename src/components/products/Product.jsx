import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "../../styles/Product.css";

const Product = () => {

    const { productId } = useParams();
    const [product, setProduct] = useState(null)
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