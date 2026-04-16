import dayjs from "dayjs";
import type { DeliveryOption } from "../../types";

function DeliveryDate({ selectedDeliveryOption }: { selectedDeliveryOption: DeliveryOption }) {
    return <div className="delivery-date">Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format("dddd, MMMM D")}</div>;
}

export default DeliveryDate;
