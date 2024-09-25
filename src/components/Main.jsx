import axios from 'axios';
import { useEffect, useState } from 'react';

import { baseURL } from '../App.js';
import "../styles/Main.css";
import ProductGrid from "./products/ProductGrid.jsx";

const Main = () => {

    const api = `${baseURL}/products`
    const [featuredProducts, setFeaturedProducts] = useState([]);

    const handleSort = (products) => {
        return products.sort((a, b) => a.name.localeCompare(b.name));
    };

    useEffect(() => {
        const fetchProducts = () => {
            const url = `${api}/featured`
            axios.get(url).then(response => {
                if (response.data) {
                    const products = handleSort(response.data)
                    setFeaturedProducts(products)
                } else {
                    console.log('Error retrieving data')
                }
            }).catch(error => console.log('Error retrieving data: ' + error))
        }
        fetchProducts()
    }, [api])

    return (
        <div className="main-container">
            <img className="coverImage" src="//www.vannjewellery.com/cdn/shop/files/VANN_FW24-Paris-2076_bd560c8b-c1a3-405f-9351-d484ac87de92.jpg?v=1709208311" alt=""/>
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