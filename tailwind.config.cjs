/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: 'var(--color-primary)',
				secondary: 'var(--color-secondary)',
				accent: 'var(--color-accent)',
				surface: 'var(--color-surface)',
				daedalusLight: 'var(--color-daedalus-light)',
				daedalusDark: 'var(--color-daedalus-dark)'
			}
		}
	},

	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
};

module.exports = config;
