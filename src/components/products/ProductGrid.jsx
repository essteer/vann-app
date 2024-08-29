import ProductCard from './ProductCard';
import '../../styles/ProductGrid.css';

function ProductGrid({ products }) {

    return (
        <div>
            <div className="product-grid">
                {products.map((product) => (
                    <ProductCard
                        key={product.productId}
                        imageURI={product.productImage}
                        name={product.productName}
                        price={product.productPrice}
                    />
                ))}
            </div>
            <div className="spacing" ></div>
        </div>
    );
}

export default ProductGrid;