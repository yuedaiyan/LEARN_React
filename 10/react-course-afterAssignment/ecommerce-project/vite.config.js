import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        open: "/",
        proxy: {
            "/api": {
                target: "http://localhost:3000",
            },
            "/images": {
                target: "http://localhost:3000",
            },
        },
    },
    build: {
        outDir:'../ecommerce-backend/dist'
    }
});
// TODO: 尝试:删除AWS 10:37:00
// TODO: 观看:如何部署网页 youtube视频
// TODD: 观看:什么是后端 youtube视频
