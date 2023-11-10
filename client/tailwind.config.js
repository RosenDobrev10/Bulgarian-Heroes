/* eslint-disable no-undef */
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{html,js,ts,jsx,tsx}',
		'./node_modules/tw-elements/dist/js/**/*.js'
	],
	theme: {
		extend: {}
	},
	plugins: [require('tw-elements/dist/plugin.cjs')],
	darkMode: 'class'
};
