import path from "node:path";
import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
    modules: ["@wxt-dev/module-react"],
    manifest: {
        permissions: ["tabs", "bookmarks", "storage"],
    },
    vite: () => ({
        base: "./",
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./entrypoints"),
                $: path.resolve(__dirname, "./"),
            },
        },
    }),
});
