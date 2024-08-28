import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/Shop.css';
import ProductGrid from "./products/ProductGrid.jsx";

const Shop = () => {

    const [productCategory, setProductCategory] = useState('all')

    const products = [
        { image: 'shop/files/DOUBLECSINGLEEARCUFF_YG.jpg?v=1716382667', name: 'DOUBLE C SINGLE EAR CUFF', price: 175 },
        { image: 'shop/files/FLATROCKANDSPIKYKNOTBRACELET_2e144cd5-f74a-42b5-ba14-9b6490e354cb.jpg?v=1716526100', name: 'FLAT ROCK AND SPIKY KNOT BRACELET', price: 430 },
        { image: 'shop/files/HEART_EAR_CUFF_WG.jpg?v=1706532715', name: 'HEART EAR CUFF', price: 105 },
        { image: 'shop/files/IRREGULAR_CIRCLE_RING_YELLOW_GOLD_RHODIUM_1.jpg?v=1706534207', name: 'IRREGULAR CIRCLE RING', price: 355 },
        { image: 'shop/files/LAVARING_WG.jpg?v=1716465944', name: 'LAVA RING', price: 300 },
        { image: 'shop/files/LAVA_RING_WITH_DROP_PENDANT.jpg?v=1706619989', name: 'LAVA RING WITH DROP PENDANT', price: 320 },
        { image: 'shop/files/LAVA_STUD_EARRINGS_VIO.jpg?v=1716376319', name: 'LAVA STUD EARRINGS', price: 300 },
        { image: 'shop/files/Long_Nova_Earrings_Silver_Front.jpg?v=1706790041', name: 'LONG NOVA EARRINGS', price: 430 },
        { image: 'shop/products/Nova_Bracelet.jpg?v=1707045353', name: 'NOVA BRACELET', price: 365 },
        { image: 'shop/files/OYSTER_DROP_EARRINGS_BK.jpg?v=1706867065', name: 'OYSTER DROP EARRINGS', price: 300 },
        { image: 'shop/files/OYSTER_STUD_EARRINGS_SB.jpg?v=1706867462', name: 'OYSTER STUD EARRINGS', price: 300 },
        { image: 'shop/files/DOTSBRACELETWITHPEARL_PN.jpg?v=1713795962', name: 'PEARL BRACELET', price: 285 },
        { image: 'shop/files/Pearl_chocker_Heather.jpg?v=1712216804', name: 'PEARL CHOKER NECKLACE', price: 315 },
        { image: 'shop/files/PEARL_LINK_BRACELET_CB.jpg?v=1706869576', name: 'PEARL LINK BRACELET', price: 230 },
        { image: 'shop/files/Rock_NL_YW.jpg?v=1706883213', name: 'ROCK JEWEL NECKLACE', price: 410 },
        { image: 'shop/files/SINGLE_KNOT_NECKLACE_RHODIUM_1.jpg?v=1706925213', name: 'SINGLE KNOT NECKLACE', price: 370 },
        { image: 'shop/files/Heart_Bracelet.jpg?v=1706925719', name: 'SMALL HEART BRACELET', price: 365 },
        { image: 'shop/files/SPIKYKNOTNECKLACEWITHPENDANT_YG.jpg?v=1716461008', name: 'SPIKY KNOT NECKLACE WITH PENDANT', price: 365 },
        { image: 'shop/files/SPIKYKNOTSINGLEEARCUFF_YG.jpg?v=1716373579', name: 'SPIKY KNOT SINGLE EAR CUFF', price: 140 },
        { image: 'shop/files/THREE-WAY_PEARL_NECKLACE_LB1.jpg?v=1706968206', name: 'THREE-WAY PEARL NECKLACE', price: 125 },
        { image: 'shop/files/TRIO_RING_YELLOW_GOLD_1.jpg?v=1706968797', name: 'TRIO RING', price: 355 },
        { image: 'shop/files/3_stack_NL_PUR_stock_colour.jpg?v=1717558533', name: 'TWO-LAYER PEARL CHOKER NECKLACE', price: 365 },
        { image: 'shop/files/WEDGEBLEG.jpg?v=1716517882', name: 'WEDGE BRACELET', price: 445 },
        { image: 'shop/files/XL_Molten_F.jpg?v=1706969778', name: 'XL MOLTEN EARRINGS', price: 575 },
        { image: 'shop/files/XL_OUTLINE_HEART.jpg?v=1706969876', name: 'XL OUTLINE HEART EARRINGS', price: 310 },
    ];

    const changeShopCategoryHeader = (category) => {
        setProductCategory(category)
    }

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
                            <Link to="/shop" onClick={() => changeShopCategoryHeader('ear cuffs')}>Ear Cuffs</Link>
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