import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { baseURL } from '../App.js';
import '../styles/Shop.css';
import ProductGrid from "./products/ProductGrid.jsx";

const Shop = () => {

    const api = `${baseURL}/products`
    const [productCategory, setProductCategory] = useState('all')
    const [products, setProducts] = useState([])
    const [sortType, setSortType] = useState('A—Z')

    const changeShopCategoryHeader = (category) => {
        setProductCategory(category)
    }

    const handleSort = (products) => {
        if (sortType === '$—$$') {
            return products.sort((a, b) => {
                if (a.price === b.price) {
                    return a.name.localeCompare(b.name);
                } else {
                    return a.price - b.price;
                }
            });
        } else if (sortType === '$$—$') {
            return products.sort((a, b) => {
                if (a.price === b.price) {
                    return a.name.localeCompare(b.name);
                } else {
                    return b.price - a.price;
                }
            });
        } else {
            return products.sort((a, b) => a.name.localeCompare(b.name));
        }
    };

    useEffect(() => {
        const fetchProducts = () => {
            const url = productCategory === 'all' ? api : productCategory === 'ear cuffs' ? `${api}/category/ear%20cuffs` : `${api}/category/${productCategory}`
            axios.get(url).then(response => {
                if (response.data) {
                    const sortedProducts = handleSort(response.data)
                    setProducts(sortedProducts)
                } else {
                    console.log('Error retrieving data')
                }
            })
                .catch(error => console.log('Error retrieving data: ' + error))
        }
        fetchProducts()
    }, [api, productCategory, sortType])

    return (
        <div className="shop-container">
            <h2 className="products-h2">Shop {productCategory}</h2>
            <div className="products-filter-container">
                <div className="filter-categories">
                    <ul className="filter-links">
                        <li>
                            <Link to="/shop" onClick={() => changeShopCategoryHeader('all')}>All</Link>
                        </li>
                        <li>
                            <Link to="/shop" onClick={() => changeShopCategoryHeader('bracelets')}>Bracelets</Link>
                        </li>
                        <li>
                            <Link to="/shop" onClick={() => changeShopCategoryHeader('ear cuffs')}>Ear cuffs</Link>
                        </li>
                        <li>
                            <Link to="/shop" onClick={() => changeShopCategoryHeader('earrings')}>Earrings</Link>
                        </li>
                        <li>
                            <Link to="/shop" onClick={() => changeShopCategoryHeader('necklaces')}>Necklaces</Link>
                        </li>
                        <li>
                            <Link to="/shop" onClick={() => changeShopCategoryHeader('rings')}>Rings</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="products-sort-container">
                <div className="sort-categories">
                    <ul className="sort-links">
                        <li>
                            <Link to="/shop" onClick={() => setSortType('A—Z')}>A—Z</Link>
                        </li>
                        <li>
                            <Link to="/shop" onClick={() => setSortType('$—$$')}>$—$$</Link>
                        </li>
                        <li>
                            <Link to="/shop" onClick={() => setSortType('$$—$')}>$$—$</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="products-container">
                <div className="products-list">
                    <ProductGrid products={products} />
                </div>
            </div>
            <div className="spacing">&nbsp;</div>
        </div>
    )
}

export default Shop