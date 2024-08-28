import ProductCard from './ProductCard';
import '../../styles/ProductGrid.css';

function ProductGrid({ products }) {

    return (
        <div>
            <div className="product-grid">
                {products.map((product) => (
                    <ProductCard
                        imageURI={product.image}
                        name={product.name}
                        price={product.price}
                    />
                ))}
            </div>
            <div className="spacing" ></div>
        </div>
    );
}

export default ProductGrid;