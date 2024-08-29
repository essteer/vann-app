import ProductCard from './ProductCard';
import '../../styles/ProductGrid.css';

function ProductGrid({ category, products }) {

    return (
        <div>
            <div className="product-grid">
                {products.map((product) => (
                    category === 'all' || category === product.category ? (
                    <ProductCard
                        key={product.name}
                        imageURI={product.image}
                        name={product.name}
                        price={product.price}
                    />
                    ) : null 
                ))}
            </div>
            <div className="spacing" ></div>
        </div>
    );
}

export default ProductGrid;