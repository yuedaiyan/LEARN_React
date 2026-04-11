import { it, expect, describe, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Product from "./Product";

describe("Product component", () => {
    it("deisplays the product details correctly", () => {
        // 劫持传入商品信息
        const product = {
            id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            image: "images/products/athletic-cotton-socks-6-pairs.jpg",
            name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
            rating: {
                stars: 4.5,
                count: 87,
            },
            priceCents: 1090,
            keywords: ["socks", "sports", "apparel"],
        };

        // 劫持后端
        const loadCart = vi.fn();

        render(
            <Product
                product={product}
                loadCart={loadCart}
            />,
        );
        // 检测:是否正确显示文字
        expect(screen.getByText("Black and Gray Athletic Cotton Socks - 6 Pairs")).toBeInTheDocument();
        expect(screen.getByText("$10.90")).toBeInTheDocument();

        // (使用 TestId定位标签,之后检测相同的标签是否有指定的'src'属性)
        // 检测:是否正确显示图像
        expect(screen.getByTestId("product-image")).toHaveAttribute("src", "images/products/athletic-cotton-socks-6-pairs.jpg");
        // 检测:评分是否正确
        expect(screen.getByTestId("product-rating-stars")).toHaveAttribute("src", "images/ratings/rating-45.png");

        // 检测:评分人数是否正确
        expect(screen.getByText("87")).toBeInTheDocument();
    });
});
