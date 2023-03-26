/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"bg-light": "#FFFFFF",
				"bg-dark": "#252A34",
				text: "#08D9D6",
				textBlack: "#111111",
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
