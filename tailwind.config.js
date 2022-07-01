/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#19D3AE",
                secondary: "#0FCFEC",
                darker: "#3A4256",
            },
        },
        container: {
            padding: {
                DEFAULT: "1rem",
                sm: "2rem",
                lg: "4rem",
                xl: "5rem",
                "2xl": "5rem",
            },
        },
    },
    daisyui: {
        themes: [
            {
                myTheme: {
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
