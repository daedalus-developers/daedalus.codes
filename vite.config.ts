import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { configDefaults } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit(), tsconfigPaths()],
	test: {
		globals: true,
		environment: 'jsdom',
		restoreMocks: true,
		include: ['src/**/*.{test,spec}.{js,ts}'],
		reporters: ['verbose', 'json'],
		setupFiles: ['./src/test.config.ts'],
		coverage: {
			reporter: ['text', 'json-summary', 'json'],
			exclude: ['./src/test.config.ts']
		},
		exclude: [...configDefaults.exclude, 'tests'],
		outputFile: 'test-results/results.json'
	}
});
