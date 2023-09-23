/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		fontFamily: {
			Fira: ['"Fira Sans"', 'sans-serif'],
			Fuggles: ['"Fuggles"', 'cursive'],
			Lato: ['"Lato"', 'sans-serif'],
		},
	},
	plugins: [],
};
