type Link = {
	text: string;
	link: string;
};

export const navLinks: Link[] = [
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
	},
	{
		text: 'About us',
		link: '#about'
	}
];

export const footerLinks: Link[] = [
	{ text: 'privacy policy', link: '/about#privacy' },
	{ text: 'disclaimer', link: '/about#disclaimer' },
	{ text: 'terms and condition', link: '/about#terms' }
];
