import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    // 开发辅助,实际项目中无意义
    <StrictMode>
        {/* 整个项目使用BrowserRouter包裹 */}
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>,
);
