import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import '../../styles/products/ProductGrid.css';

function ProductGrid({ products }) {

    return (
        <div>
            <div className="product-grid">
                {products.map((product) => (
                    <Link to={`/products/${product.productId}`} key={product.productId} onClick={() => window.scrollTo(0, 0)}>
                    <ProductCard
                        key={product.productId}
                        imageURI={product.productImage}
                        name={product.productName}
                        price={product.productPrice}
                    />
                    </Link>
                ))}
            </div>
            <div className="spacing" ></div>
        </div>
    );
}

export default ProductGrid;