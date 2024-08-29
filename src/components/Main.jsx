import axios from 'axios';
import { useEffect, useState } from 'react';
import "../styles/Main.css";
import ProductGrid from "./products/ProductGrid.jsx";

const Main = () => {

    // hard-coded product examples for development without live API
    // const featuredProducts = [
    //     { productId: 'f2994d85-ab6e-4fe6-b999-b8379dd34753', category: 'ear cuffs', productImage: '/files/HEART_EAR_CUFF_WG.jpg?v=1706532715', productName: 'HEART EAR CUFF', productPrice: 105 },
    //     { productId: '7bf6e551-b6ae-4fdd-af91-cca91ee812e8', category: 'bracelets', productImage: '/products/Nova_Bracelet.jpg?v=1707045353', productName: 'NOVA BRACELET', productPrice: 365 },
    //     { productId: '9c0d5e24-1e63-474f-8e30-2e5f3cf0efce', category: 'necklaces', productImage: '/files/Pearl_chocker_Heather.jpg?v=1712216804', productName: 'PEARL CHOKER NECKLACE', productPrice: 315 },
    //     { productId: '591ccb5d-b598-4c6e-826f-a5d28cfce837', category: 'earrings', productImage: '/files/XL_Molten_F.jpg?v=1706969778&width=1200', productName: 'XL MOLTEN EARRINGS', productPrice: 575 },
    // ];

    const api = 'http://localhost:9001/api/v1/products'
    const [featuredProducts, setFeaturedProducts] = useState([]);

    useEffect(() => {
        const fetchFeaturedProducts = () => {
            const featuredProductIds = [
                'f2994d85-ab6e-4fe6-b999-b8379dd34753',
                '7bf6e551-b6ae-4fdd-af91-cca91ee812e8',
                '9c0d5e24-1e63-474f-8e30-2e5f3cf0efce',
                '591ccb5d-b598-4c6e-826f-a5d28cfce837',
            ]
            const promises = featuredProductIds.map((featuredProductId) => {
                return axios.get(`${api}/${featuredProductId}`).then(response => response.data)
            })
            Promise.all(promises).then((data) => {setFeaturedProducts(data)}).catch(error => console.log(error))
        }
        fetchFeaturedProducts()
    }, [])

    return (
        <div className="main-container">
            <img className="coverImage" src="//www.vannjewellery.com/cdn/shop/files/VANN_FW24-Paris-2076_bd560c8b-c1a3-405f-9351-d484ac87de92.jpg?v=1709208311" />
            <div className="featured-products-container">
                <h2 className="featured-products-h2">Featured</h2>
                <div className="featured-products-list">
                    <ProductGrid products={featuredProducts} />
                </div>
            </div>
        </div>
    )
}

export default Main