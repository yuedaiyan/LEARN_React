import axios from "axios";
import CheckOutHeader from "./CheckOutHeader";
import OrderSummary from "./OrderSummary";
import PaymentSummary from "./PaymentSummary";
import { useState, useEffect } from "react";
import "./CheckOutPage.css";

function CheckOutPage({ cart }) {
    // 数据源于后端,用于储存"寄送相关数据"的状态,按照当前的时间,计算出三种快递套餐所带来的三种快递状态
    const [deliveryOptions, setDeliveryOptiions] = useState([]);
    // 数据源于后端,用于储存下单界面中的 右侧结算 相关信息
    const [paymentSummary, setPaymentSummary] = useState([]);

    useEffect(() => {
        // 使用axios,获得当前时间下的三种快递状态
        axios.get("/api/delivery-options?expand=estimatedDeliveryTime").then((response) => {
            setDeliveryOptiions(response.data);
        });
        // 使用axios,获取当前时间下 右侧结算 相关的信息
        axios.get("/api/payment-summary").then((response) => {
            setPaymentSummary(response.data);
        });
    }, []);

    // console.log("deliveryOptions:\n", response.data);
    // console.log("cart:\n", cart);
    // console.log("paymentSummary:\n", paymentSummary);

    return (
        <>
            <title>Checkout</title>
            <link
                rel="icon"
                type="image/svg+xml"
                href="cart-favicon.png"
            />

            <CheckOutHeader />

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <OrderSummary
                        cart={cart}
                        deliveryOptions={deliveryOptions}
                    />

                    <PaymentSummary paymentSummary={paymentSummary} />
                </div>
            </div>
        </>
    );
}
export default CheckOutPage;
