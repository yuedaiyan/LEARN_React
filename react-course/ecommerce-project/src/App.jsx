import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import CheckOutPage from "./pages/checkout/CheckOutPage";
import OrdersPage from "./pages/OrdersPage";
import TrackingPage from "./pages/TrackingPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./App.css";

function App() {
    return (
        // Routes + Route 解决浏览器刷新的问题(通过url中的path标签,选择具体要进入的element)
        <Routes>
            <Route
                index
                element={<HomePage />}
            />
            <Route
                path="checkout"
                element={<CheckOutPage />}
            />
            <Route
                path="orders"
                element={<OrdersPage />}
            />
            <Route
                path="tracking"
                element={<TrackingPage />}
            />
            <Route
                path="*"
                element={<NotFoundPage />}
            />
        </Routes>
    );
}
export default App;
