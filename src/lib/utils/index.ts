export * from './nullish.utils';
export * from './ui.utils';
export * from './response.utils';
export * from './assets.utils';

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
		href: '/#about'
	},
	{
		is_protected: false,
		iconifyCode: 'zondicons:portfolio',
		name: 'Projects',
		href: '/#projects'
	},
	{
		is_protected: false,
		iconifyCode: 'fluent:people-team-20-filled',
		name: 'Team',
		href: '/#team'
	},
	{
		is_protected: true,
		iconifyCode: 'clarity:event-solid',
		name: 'Events',
		href: '/#events'
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
