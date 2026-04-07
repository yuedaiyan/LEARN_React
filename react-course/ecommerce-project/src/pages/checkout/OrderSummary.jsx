import dayjs from "dayjs";
import formatMoney from "../../utils/money";
import DeliveryOptions from "./DeliveryOptions";

function OrderSummary({ deliveryOptions, cart }) {
    return (
        <div className="order-summary">
            {/* 检查deliveryOptions是否存在,存在的话,才可以执行.find() */}
            {/* TODO: 不应该确定存在吗?不存在的话,应该解决问题啊! */}
            {deliveryOptions.length > 0 &&
                cart.map((cartItem) => {
                    const selectedDeliveryOption = deliveryOptions.find((deliveryOption) => {
                        return deliveryOption.id === cartItem.deliveryOptionId;
                    });
                    return (
                        <div
                            key={cartItem.productId}
                            className="cart-item-container">
                            <div className="delivery-date">Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format("dddd, MMMM D")}</div>

                            <div className="cart-item-details-grid">
                                <img
                                    className="product-image"
                                    src={cartItem.product.image}
                                />

                                <div className="cart-item-details">
                                    <div className="product-name">{cartItem.product.name}</div>
                                    <div className="product-price">{formatMoney(cartItem.product.priceCents)}</div>
                                    <div className="product-quantity">
                                        <span>
                                            Quantity: <span className="quantity-label">2</span>
                                        </span>
                                        <span className="update-quantity-link link-primary">Update</span>
                                        <span className="delete-quantity-link link-primary">Delete</span>
                                    </div>
                                </div>
                                <DeliveryOptions
                                    cartItem={cartItem}
                                    deliveryOptions={deliveryOptions}
                                />
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}
export default OrderSummary;
// TODO: 解决{} 和${}搞混的问题
