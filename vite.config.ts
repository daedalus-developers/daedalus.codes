import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
		reporters: ['verbose', 'json'],
		coverage: {
			reporter: ['text', 'json-summary', 'json']
		},
		outputFile: 'test-results/results.json'
	}
});
