import { expect, test } from '@playwright/test';

test('expect daedalus to be visible', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('link', { name: 'Daedalus' })).toBeVisible();
});

test('expect tagline to be visible', async ({ page }) => {
	await page.goto('/');

	const taglineSelector = 'h1';
	const expectedTextSubsetRegex = /\b(?:carry|craftsmanship)\b/i;

	const taglineElement = await page.waitForSelector(taglineSelector);
	const taglineText = await taglineElement.textContent();

	expect(taglineText).toMatch(expectedTextSubsetRegex);
});

// test('expect tagline to be visible', async ({ page }) => {
// 	await page.goto('/');
// 	await expect(page.getByRole('heading', { name: '/\b(?:carry|craftsmanship)\b/i' })).toBeVisible();
// });
//
// test('expect tagline to be visible', async ({ page }) => {
// 	await page.goto('/');
// 	await expect(page.locator('#herocta')).toBeVisible();
// });
//
