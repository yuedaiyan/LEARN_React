import type { Product } from "./products";
export type Cart = CartItem[];

export type LoadCart = () => Promise<void>;

export type CartItem = {
    productId: string;
    quantity: number;
    deliveryOptionId: string;
    product: Product;
};
