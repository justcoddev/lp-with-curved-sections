/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {

			fontFamily: {
				"heading": ['"Poppins"', "sans-serif"],
				"body": ['"Open Sans"', "serif"],
			},
			fontSize: {
				"x11": "0.688rem",

			},

			colors: {
				"new": "hsl(228, 45%, 44%)",
				"pink": "hsl(322, 100%, 66%)",
				"light-pink": "hsl(321, 100%, 78%)",
				"light-red": "hsl(0, 100%, 63%)",

				"n-very-dark-cyan": "hsl(192, 100%, 9%)",
				"n-very-pale-blue": "hsl(207, 100%, 98%)"
			}
		},
	},
	plugins: [],
}
