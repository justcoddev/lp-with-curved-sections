/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {

			fontFamily: {
				"heading": ['"Poppins"', "sans-serif"],
				"body": ['"Open Sans"', "serif"],
			},

			colors: {
				"p-pink": "hsl(322, 100%, 66%)",
				"p-light-pink": "hsl(321, 100 %, 78 %)",
				"p-light-red": "hsl(0, 100 %, 63 %)",

				"n-very-dark-cyan": "hsl(192, 100 %, 9 %)",
				"n-very-pale-blue": "hsl(207, 100 %, 98 %)"
			}
		},
	},
	plugins: [],
}
