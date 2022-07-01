/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#19D3AE",

                    secondary: "#0FCFEC",

                    accent: "#37CDBE",

                    neutral: "#3A4256",

                    "base-100": "#FFFFFF",

                    info: "#3ABFF8",

                    success: "#36D399",

                    warning: "#FBBD23",

                    error: "#F87272",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
};
