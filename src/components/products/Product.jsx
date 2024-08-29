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
            <div className="column-container">
                <div className="left-column">
                    <img className="image" src={`https://www.vannjewellery.com/cdn/shop/${product.productImage}`} />
                </div>
                <div className="right-column">
                    <h1 className="productName">{product.productName}</h1>
                    <p>US${product.productPrice}</p>
                    <div>
                        {product.colour && <p>COLOUR</p>}
                        <p>{product.colour}</p>
                    </div>
                    <div>
                        {product.size && <p>SIZE & FIT</p>}
                        <p>{product.size}</p>
                    </div>
                </div>
            </div>)
            }
            <div className="spacing" >&nbsp;</div>
        </div>
    )
}

export default Product