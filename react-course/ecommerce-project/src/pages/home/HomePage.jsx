import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import ProductsGrid from "./ProductsGrid";
import "./HomePage.css";

function HomePage({ cart }) {
    // 初始化 商品列表
    const [products, setPorducts] = useState([]);

    // 使用 useEffect,仅渲染一次
    useEffect(() => {
        // 通过后端请求 商品列表
        axios.get("/api/products").then((response) => {
            setPorducts(response.data);
        });
    }, []);

    return (
        <>
            <title>Ecommerce Project</title>
            <link
                rel="icon"
                type="image/svg+xml"
                href="home-favicon.png"
            />

            {/* 组件化 */}
            <Header cart={cart} />

            <div className="home-page">
                <ProductsGrid products={products} />
            </div>
        </>
    );
}

export default HomePage;
