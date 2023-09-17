import { expect, test } from '@playwright/test';

test('expect daedalus to be visible', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('link', { name: 'Daedalus' })).toBeVisible();
});

test('expect tagline to be visible', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: '/\b(?:carry|craftsmanship)\b/i' })).toBeVisible();
});

test('expect tagline to be visible', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('#herocta')).toBeVisible();
});
