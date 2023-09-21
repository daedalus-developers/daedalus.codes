import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
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
			},
			fontFamily: {
				inter: ['Inter Variable', ...defaultTheme.fontFamily.sans]
			},
			backgroundSize: {
				'50%': '50%',
				'70%': '70%',
				'80%': '80%',
				'90%': '90%'
			},
			container: {
				center: true
			}
		}
	},

	plugins: [forms, typography]
} satisfies Config;
