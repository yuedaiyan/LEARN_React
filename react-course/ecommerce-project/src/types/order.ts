// import dayjs from "dayjs";
import type { Product } from "./products";

export type OrderProduct = {
    id: string;
    productId: string;
    image: string;
    product: Product;
    estimatedDeliveryTimeMs: number;
    quantity: number;
};

export type Order = {
    id: string;
    productId: string;
    products: OrderProduct[];
    orderTimeMs: number;
    totalCostCents: number;
};

export type OrderDetailsGridProps = {
    order: Order;
    loadCart: () => void;
};

export type Orders = Order[];

export type PaymentSummary = {
    totalItems: number;
    productCostCents: number;
    shippingCostCents: number;
    totalCostBeforeTaxCents: number;
    taxCents: number;
    totalCostCents: number;
};
export type DeliveryOptions = DeliveryOption[];

export type DeliveryOption = {
    id: string;
    priceCents: number;
    estimatedDeliveryTimeMs: number
};
