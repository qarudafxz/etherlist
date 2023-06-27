/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				main: ["Poppins", "sans-serif"],
				header: ["Kanit", "sans-serif"],
			},
			colors: {
				primary: "#040404",
				secondary: "#292929",
				accent: "#1C1C1C",
				leash: "#2C2C2C",
			},
		},
	},
	plugins: [],
};
