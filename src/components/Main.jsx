import axios from 'axios';
import { useEffect, useState } from 'react';

import { baseURL } from '../App.js';
import "../styles/Main.css";
import ProductGrid from "./products/ProductGrid.jsx";

const Main = () => {

    const api = `${baseURL}/products`
    const [featuredProducts, setFeaturedProducts] = useState([]);

    useEffect(() => {
        const fetchFeaturedProducts = () => {
            const featuredProductIds = [
                '5682a447-7519-4a37-9eab-bcda3d9f0482',
                '75fc8c61-87a3-462a-a0a1-42f6937405b3',
                '5479307c-45a0-428b-b433-da5df1df2e6e',
                '6211565d-b93a-4803-bbcb-16435481415e',
            ]
            const promises = featuredProductIds.map((featuredProductId) => {
                return axios.get(`${api}/${featuredProductId}`).then(response => response.data)
            })
            Promise.all(promises).then((data) => {setFeaturedProducts(data)}).catch(error => console.error(error))
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