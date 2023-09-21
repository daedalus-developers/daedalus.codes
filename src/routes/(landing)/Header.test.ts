import { render, screen } from '@testing-library/svelte';
import Header from './Header.svelte';

describe('Header', () => {
	it('should display links', () => {
		render(Header, {});
		expect(screen.getByRole('navigation')).toBeVisible();
		expect(screen.getByRole('link', { name: 'Home' })).toBeVisible();
		expect(screen.getByRole('link', { name: 'Courses' })).toBeVisible();
		expect(screen.getByRole('link', { name: 'Projects' })).toBeVisible();
		expect(screen.getByRole('link', { name: 'Events' })).toBeVisible();
		expect(screen.getByRole('link', { name: 'Log in?' })).toBeVisible();
	});
	it('should diplay theme toggle', () => {
		render(Header, {});
		expect(screen.getByRole('checkbox')).toBeVisible();
	});
});
