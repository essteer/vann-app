import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import '../../styles/products/ProductGrid.css';

function ProductGrid({ products }) {

    return (
        <div>
            <div className="product-grid">
                {products.map((product) => (
                    <Link to={`/products/${product.id}`} key={product.id} onClick={() => window.scrollTo(0, 0)}>
                    <ProductCard
                        key={product.id}
                        imageURI={product.imageURI}
                        name={product.name}
                        price={product.price}
                    />
                    </Link>
                ))}
            </div>
            <div className="spacing" ></div>
        </div>
    );
}

export default ProductGrid;