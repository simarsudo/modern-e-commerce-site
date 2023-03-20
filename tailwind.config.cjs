/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"bg-light": "#FFF",
				"bg-dark": "#252A34",
				text: "#08D9D6",
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
