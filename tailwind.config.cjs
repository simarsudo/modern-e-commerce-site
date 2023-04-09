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
			fontFamily: {
				highlight: "Rokkitt",
			},
			gridTemplateColumns: {
				md: "repeat(auto-fit, minmax(16rem, 1fr))",
				lg: "repeat(auto-fit, minmax(20rem, 1fr))",
			},
			animation: {
				moveX: "moveX 10s ease-in-out infinite",
				moveY: "moveY 10s ease-in-out infinite",
			},
			keyframes: {
				moveX: {
					"0%, 100%": { transform: "translateX(10%)" },
					"50%": { transform: "translateX(-10%)" },
				},
				moveY: {
					"0%, 100%": { transform: "translateY(10%)" },
					"50%": { transform: "translateY(-10%)" },
				},
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
