import solid from "solid-start/vite";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [solid()],
    optimizeDeps: {
        include: ["@acme/db"]
    },
    build: {
        commonjsOptions: {
            include: [/@acme\/db/, /node_modules/]
        }
    }
});
