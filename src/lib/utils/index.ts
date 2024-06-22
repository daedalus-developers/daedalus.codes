export * from './nullish.utils';
export * from './ui.utils';
export * from './response.utils';
export * from './assets.utils';

export const LOGO_URL = 'https://storage.daedalus.codes/logo.png';
export const ASSET_URL = 'https://storage.daedalus.codes/assets/';

export const primaryLinks = [
	{
		is_protected: false,
		iconifyCode: 'ion:home-sharp',
		name: 'Home',
		href: '/'
	},
	{
		is_protected: false,
		iconifyCode: 'mdi:about-circle-outline',
		name: 'About',
		href: 'about'
	},
	{
		is_protected: false,
		iconifyCode: 'zondicons:portfolio',
		name: 'Projects',
		href: 'projects'
	},
	{
		is_protected: false,
		iconifyCode: 'fluent:people-team-20-filled',
		name: 'Team',
		href: 'team'
	},
	{
		is_protected: true,
		iconifyCode: 'clarity:event-solid',
		name: 'Events',
		href: 'events'
	}
];

export const secondaryLinks = [
	{
		is_protected: true,
		iconifyCode: 'clarity:event-solid',
		name: 'Courses',
		href: '/courses'
	},
	{
		is_protected: false,
		iconifyCode: 'ic:baseline-phone',
		name: 'Contact',
		href: '/contact'
	}
];

export const debounce = <T extends (...args: unknown[]) => void>(
	callback: T,
	wait = 300
): ((...args: Parameters<T>) => void) => {
	let timeout: ReturnType<typeof setTimeout>;

	return (...args: Parameters<T>) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => callback(...args), wait);
	};
};
