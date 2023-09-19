import { expect, test } from '@playwright/test';

test('expect daedalus to be visible', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('link', { name: 'Daedalus' })).toBeVisible();
});

test('expect links to be visible', async ({ page }) => {
	await page.goto('/');
	// expect navbar to contain links
	await expect(page.getByRole('link', { name: 'About Us' })).toBeVisible();
	await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
	await expect(page.getByRole('link', { name: 'Courses' })).toBeVisible();
	await expect(page.getByRole('link', { name: 'Projects' })).toBeVisible();
	await expect(page.getByRole('link', { name: 'Events' })).toBeVisible();
	await expect(page.getByRole('link', { name: 'Log in?' })).toBeVisible();
});

test('expect tagline to be visible', async ({ page }) => {
	await page.goto('/');
	const expectedTextSubsetRegex = /\b(?:carry|craftsmanship)\b/i;
	const taglineElement = await page.waitForSelector('h1');
	const taglineText = await taglineElement.textContent();
	expect(taglineText).toMatch(expectedTextSubsetRegex);
});
