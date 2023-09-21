type Link = {
	text: string;
	link: string;
};

export const navLinks: Link[] = [
	{
		text: 'About us',
		link: '#about'
	},
	{
		text: 'Home',
		link: '/'
	},
	{
		text: 'Courses',
		link: '#courses'
	},
	{
		text: 'Projects',
		link: '#projects'
	},
	{
		text: 'Events',
		link: '#events'
	}
];

export const footerLinks: Link[] = [
	{ text: 'privacy policy', link: '/about#privacy' },
	{ text: 'disclaimer', link: '/about#disclaimer' },
	{ text: 'terms and condition', link: '/about#terms' }
];
