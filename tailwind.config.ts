import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                // Add color schemes
            },
            transform: {
                preserve3d: "preserve-3d",
            },
            transitionTimingFunction: {
                "custom-cubic": "cubic-bezier(0.76, 0, 0.24, 1)",
            },
            fontFamily: {
                lato: ["Lato", "sans-serif"],
                poppins: ["Poppins", "sans-serif"], // Added Poppins font
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        styled: true,
        themes: [
            {
                // docs: https://daisyui.com/theme-generator
                mytheme: {
                    "primary": "#5D5CD6",
                    "secondary": "#0DBA67",
                    "accent": "#FFB800",
                    "neutral": "#010101",
                    "base-100": "#FFFFFF",

                    // TODO: update as needed
                    "info": "#22D3EE",
                    "success": "#15803D",
                    "warning": "#FBBF24",
                    "error": "#DC2626",
                },
            },
            // "dark"
        ],
        base: true,
        utils: true,
        logs: false,
        rtl: false,
        prefix: "",
        darkTheme: "dark",
    },
};

export default config;
