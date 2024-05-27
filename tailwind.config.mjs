/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            fontFamily: {
                roboto: ["Roboto", "sans-serif"],
            },
            colors: {
                bg_color: "hsl(235, 18%, 26%)",
                main_font_color: "hsl(234, 29%, 20%)",
                gray: "hsl(231, 7%, 60%)",
            },
        },
    },
    plugins: [],
};
