import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import Header from "../../components/Header";
import ProductsGrid from "./ProductsGrid";
import "./HomePage.css";

function HomePage({ cart, loadCart }) {
    const [searchParams] = useSearchParams();
    const search = searchParams.get("search") || "";

    console.log("search in homePage:\n", search);

    const [products, setPorducts] = useState([]);
    useEffect(() => {
        (async () => {
            const url = search ? `/api/products?search=${search}` : "/api/products";
            console.log(url);
            const response = await axios.get(url);
            setPorducts(response.data);
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
        </>
    );
}

export default HomePage;
// TODO: 搜索框添加 enter 交互
// TODO: 解决搜索框中是 null 和 undefine 的问题
// TODO: 如果搜索框空着,点击搜索,结果就是undiefine
