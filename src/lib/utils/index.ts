export * from './nullish.utils';
export * from './ui.utils';
export * from './response.utils';
export * from './assets.utils';

export const primaryLinks = [
	{
		iconifyCode: 'ion:home-sharp',
		name: 'Home',
		href: '/'
	},
	{
		iconifyCode: 'mdi:about-circle-outline',
		name: 'About',
		href: '/#about'
	},
	{
		iconifyCode: 'zondicons:portfolio',
		name: 'Projects',
		href: '/#projects'
	},
	{
		iconifyCode: 'fluent:people-team-20-filled',
		name: 'Team',
		href: '/#team'
	},
	{
		iconifyCode: 'clarity:event-solid',
		name: 'Events',
		href: '/#events'
	}
];

export const secondaryLinks = [
	{
		iconifyCode: 'clarity:event-solid',
		name: 'Courses',
		href: '/courses'
	},
	{
		iconifyCode: 'ic:baseline-phone',
		name: 'Contact',
		href: '/contact'
	}
];
