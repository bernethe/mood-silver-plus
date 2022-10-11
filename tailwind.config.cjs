/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
		  transparent: 'transparent',
		  current: 'currentColor',
		  'white': '#fff',
		  'black': '#000',
		  'gray': {
			DEFAULT: '#808080',
			'50': '#DCDCDC',
			'100': '#D2D2D2',
			'200': '#BDBDBD',
			'300': '#A9A9A9',
			'400': '#949494',
			'500': '#808080',
			'600': '#646464',
			'700': '#484848',
			'800': '#2C2C2C',
			'900': '#101010'
		  },
		  'purple': {
			DEFAULT: '#60269D',
			'50': '#BC95E5',
			'100': '#B285E1',
			'200': '#9D64D9',
			'300': '#8943D2',
			'400': '#742EBE',
			'500': '#60269D',
			'600': '#441B70',
			'700': '#291043',
			'800': '#0D0515',
			'900': '#000000'
		  }
		}
	},
	plugins: [],
}
