import plugin from 'tailwindcss/plugin';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

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

	plugins: [
		forms,
		typography,
		plugin(({ addVariant, e, postcss }) => {
			addVariant('firefox', ({ container, separator }) => {
				const isFirefoxRule = postcss.atRule({
					name: '-moz-document',
					params: 'url-prefix()'
				});
				isFirefoxRule.append(container.nodes);
				container.append(isFirefoxRule);
				isFirefoxRule.walkRules((rule) => {
					rule.selector = `.${e(`firefox${separator}${rule.selector.slice(1)}`)}`;
				});
			});
		})
	]
};

module.exports = config;
