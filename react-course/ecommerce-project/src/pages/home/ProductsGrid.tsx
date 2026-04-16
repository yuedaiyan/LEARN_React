import Product from "./Product";
import type { Products as Products, LoadCart } from "../../types";

export default function ProductsGrid({ products, loadCart }: { products: Products; loadCart: LoadCart }) {
    return (
        <div className="products-grid">
            {products.map(product => {
                return (
                    <Product
                        key={product.id}
                        product={product}
                        loadCart={loadCart}
                    />
                );
            })}
        </div>
    );
}
