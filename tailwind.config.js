/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        extend: {
            backgroundImage: {
                "hero-image": "url('./pexels-markus-spiske-330771.jpg')",
            },
        },
    },
    plugins: [],
};
