import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import Header from "../../components/Header";
import ProductsGrid from "./ProductsGrid";
import "./HomePage.css";
import Signature from "../../components/Signature";
import type { Cart, LoadCart, Products } from "../../types";

function HomePage({ cart, loadCart }: { cart: Cart; loadCart: LoadCart }) {
    const [searchParams] = useSearchParams();
    const search = searchParams.get("search") || "";

    // console.log("search in homePage:\n", search);

    const [products, setProducts] = useState<Products>([]);
    useEffect(() => {
        (async () => {
            const url = search ? `/api/products?search=${search}` : "/api/products";
            // console.log(url);
            const response = await axios.get(url);
            setProducts(response.data);
        })();
    }, [search]);

    return (
        <>
            <title>Ecommerce Project</title>
            <link
                rel="icon"
                type="image/svg+xml"
                href="home-favicon.png"
            />

            <Header cart={cart} />

            <div className="home-page">
                <ProductsGrid
                    products={products}
                    loadCart={loadCart}
                />
            </div>

            <Signature />
        </>
    );
}

export default HomePage;
