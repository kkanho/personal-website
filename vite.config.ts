import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    define: {
        'process.env.VITE_EMAIL_SERVICE_ID': JSON.stringify(process.env.VITE_EMAIL_SERVICE_ID),
        'process.env.VITE_EMAIL_TEMPLATE_ID': JSON.stringify(process.env.VITE_EMAIL_TEMPLATE_ID),
        'process.env.VITE_EMAIL_USER_ID': JSON.stringify(process.env.VITE_EMAIL_USER_ID),
    },
});
