import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    css: {
        modules: {
            localsConvention: "camelCase",
        },
    },
    resolve: {
        alias: {
            "@constants": path.resolve("src/constants"),
            "@components": path.resolve("src/components"),
            "@elements": path.resolve("src/elements"),
            "@modules": path.resolve("src/modules"),
            "@pages": path.resolve("src/pages"),
            "@utils": path.resolve("src/utils"),
            "@services": path.resolve("src/services"),
            "@state": path.resolve("src/state"),
            "@theme": path.resolve("src/theme"),
            "@router": path.resolve("src/router"),
            "@assets": path.resolve("src/assets"),
        },
    },
});
