import "../styles/Main.css";
import ProductGrid from "./ProductGrid.jsx";

const Main = () => {

    const featuredProducts = [
        { image: 'shop/files/XL_Molten_F.jpg?v=1706969778&width=1200', name: 'XL MOLTEN EARRINGS', price: 575 },
        { image: 'shop/files/HEART_EAR_CUFF_WG.jpg?v=1706532715', name: 'HEART EAR CUFF', price: 105 },
        { image: 'shop/files/Pearl_chocker_Heather_WG.jpg?v=1706869241', name: 'PEARL CHOKER NECKLACE', price: 315 },
        { image: 'shop/products/Nova_Bracelet.jpg?v=1707045353', name: 'NOVA BRACELET', price: 365 },
    ];

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