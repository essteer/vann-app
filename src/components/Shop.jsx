import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Shop.css';
import ProductGrid from "./products/ProductGrid.jsx";

const Shop = () => {

    const api = 'http://localhost:9001/api/v1/products'
    const [productCategory, setProductCategory] = useState('all')
    const [products, setProducts] = useState([])
    const [sortType, setSortType] = useState('A—Z')


    // hard-coded product examples for development without live API
    // const products = [
    //     { category: 'ear cuffs', image: 'shop/files/DOUBLECSINGLEEARCUFF_YG.jpg?v=1716382667', name: 'DOUBLE C SINGLE EAR CUFF', price: 175 },
    //     { category: 'bracelets', image: 'shop/files/FLATROCKANDSPIKYKNOTBRACELET_2e144cd5-f74a-42b5-ba14-9b6490e354cb.jpg?v=1716526100', name: 'FLAT ROCK AND SPIKY KNOT BRACELET', price: 430 },
    //     { category: 'ear cuffs', image: 'shop/files/HEART_EAR_CUFF_WG.jpg?v=1706532715', name: 'HEART EAR CUFF', price: 105 },
    //     { category: 'rings', image: 'shop/files/IRREGULAR_CIRCLE_RING_YELLOW_GOLD_RHODIUM_1.jpg?v=1706534207', name: 'IRREGULAR CIRCLE RING', price: 355 },
    //     { category: 'rings', image: 'shop/files/LAVARING_WG.jpg?v=1716465944', name: 'LAVA RING', price: 300 },
    //     { category: 'rings', image: 'shop/files/LAVA_RING_WITH_DROP_PENDANT.jpg?v=1706619989', name: 'LAVA RING WITH DROP PENDANT', price: 320 },
    //     { category: 'earrings', image: 'shop/files/LAVA_STUD_EARRINGS_VIO.jpg?v=1716376319', name: 'LAVA STUD EARRINGS', price: 300 },
    //     { category: 'earrings', image: 'shop/files/Long_Nova_Earrings_Silver_Front.jpg?v=1706790041', name: 'LONG NOVA EARRINGS', price: 430 },
    //     { category: 'bracelets', image: 'shop/products/Nova_Bracelet.jpg?v=1707045353', name: 'NOVA BRACELET', price: 365 },
    //     { category: 'earrings', image: 'shop/files/OYSTER_DROP_EARRINGS_BK.jpg?v=1706867065', name: 'OYSTER DROP EARRINGS', price: 300 },
    //     { category: 'earrings', image: 'shop/files/OYSTER_STUD_EARRINGS_SB.jpg?v=1706867462', name: 'OYSTER STUD EARRINGS', price: 300 },
    //     { category: 'bracelets', image: 'shop/files/DOTSBRACELETWITHPEARL_PN.jpg?v=1713795962', name: 'PEARL BRACELET', price: 285 },
    //     { category: 'necklaces', image: 'shop/files/Pearl_chocker_Heather.jpg?v=1712216804', name: 'PEARL CHOKER NECKLACE', price: 315 },
    //     { category: 'bracelets', image: 'shop/files/PEARL_LINK_BRACELET_CB.jpg?v=1706869576', name: 'PEARL LINK BRACELET', price: 230 },
    //     { category: 'necklaces', image: 'shop/files/Rock_NL_YW.jpg?v=1706883213', name: 'ROCK JEWEL NECKLACE', price: 410 },
    //     { category: 'necklaces', image: 'shop/files/SINGLE_KNOT_NECKLACE_RHODIUM_1.jpg?v=1706925213', name: 'SINGLE KNOT NECKLACE', price: 370 },
    //     { category: 'bracelets', image: 'shop/files/Heart_Bracelet.jpg?v=1706925719', name: 'SMALL HEART BRACELET', price: 365 },
    //     { category: 'necklaces', image: 'shop/files/SPIKYKNOTNECKLACEWITHPENDANT_YG.jpg?v=1716461008', name: 'SPIKY KNOT NECKLACE WITH PENDANT', price: 365 },
    //     { category: 'ear cuffs', image: 'shop/files/SPIKYKNOTSINGLEEARCUFF_YG.jpg?v=1716373579', name: 'SPIKY KNOT SINGLE EAR CUFF', price: 140 },
    //     { category: 'necklaces', image: 'shop/files/THREE-WAY_PEARL_NECKLACE_LB1.jpg?v=1706968206', name: 'THREE-WAY PEARL NECKLACE', price: 125 },
    //     { category: 'rings', image: 'shop/files/TRIO_RING_YELLOW_GOLD_1.jpg?v=1706968797', name: 'TRIO RING', price: 355 },
    //     { category: 'necklaces', image: 'shop/files/3_stack_NL_PUR_stock_colour.jpg?v=1717558533', name: 'TWO-LAYER PEARL CHOKER NECKLACE', price: 365 },
    //     { category: 'bracelets', image: 'shop/files/WEDGEBLEG.jpg?v=1716517882', name: 'WEDGE BRACELET', price: 445 },
    //     { category: 'earrings', image: 'shop/files/XL_Molten_F.jpg?v=1706969778', name: 'XL MOLTEN EARRINGS', price: 575 },
    //     { category: 'earrings', image: 'shop/files/XL_OUTLINE_HEART.jpg?v=1706969876', name: 'XL OUTLINE HEART EARRINGS', price: 310 },
    // ];

    const changeShopCategoryHeader = (category) => {
        setProductCategory(category)
    }

    const handleSort = (products) => {
        if (sortType === '$—$$') {
            return products.sort((a, b) => {
                if (a.productPrice === b.productPrice) {
                    return a.productName.localeCompare(b.productName);
                } else {
                    return a.productPrice - b.productPrice;
                }
            });
        } else if (sortType === '$$—$') {
            return products.sort((a, b) => {
                if (a.productPrice === b.productPrice) {
                    return a.productName.localeCompare(b.productName);
                } else {
                    return b.productPrice - a.productPrice;
                }
            });
        } else {
            return products.sort((a, b) => a.productName.localeCompare(b.productName));
        }
    };

    useEffect(() => {
        const fetchProducts = () => {
            const url = productCategory === 'all' ? api : productCategory === 'ear cuffs' ? `${api}/category/name/ear%20cuffs` : `${api}/category/name/${productCategory}`
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
    }, [productCategory, sortType])

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
            <div className="spacing">&nbsp;</div>
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