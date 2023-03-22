/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"bg-light": "#f9f5ed",
				"bg-dark": "#252A34",
				text: "#08D9D6",
			},
			spacing: {
				18: "4.5rem",
			},
			height: {
				content: "calc(100vh - 3.5rem)",
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
