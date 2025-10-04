import sites_icon from '../assets/icons/sites_icon.svg';
import seo_icon from '../assets/icons/seo_icon.svg';
import gmb_icon from '../assets/icons/gmb_icon.svg';

export const LINKS_MAP = [
	{
		id: 'home',
		label: 'Start',
		href: '/',
		hidden: false,
	},
	{
		id: 'offer',
		label: 'Oferta',
		href: '/oferta',
		hidden: false,
		children: [
			{
				id: 'websites',
				label: 'Strony WWW',
				href: '/oferta/strony-www',
				hidden: false,
				icon: sites_icon,
				altIcon: 'Tworzenie stron internetowych',
				description: 'Postaw na stronę, która przyciąga klientów',
			},
			{
				id: 'seo',
				label: 'SEO',
				href: '/oferta/optymalizacja-seo',
				hidden: false,
				icon: seo_icon,
				altIcon: 'Pozycjonowanie SEO',
				description: 'Zdobądź wyższe pozycje w Google i więcej zapytań',
			},
			{
				id: 'gmb',
				label: 'Wizytówka Google',
				href: '/oferta/google-moja-firma',
				hidden: false,
				icon: gmb_icon,
				altIcon: 'Pozycjonowanie wizytówki Google',
				description: 'Wyróżnij się lokalnie i przyciągaj nowych klientów',
			},
		],
	},
	{
		id: 'about',
		label: 'O mnie',
		href: '/o-mnie',
		hidden: false,
	},
	{
		id: 'portfolio',
		label: 'Portfolio',
		href: '/portfolio',
		hidden: false,
		children: [
			{
				id: 'adona',
				label: 'Adona',
				href: '/portfolio/adona',
				hidden: false,
			},
		],
	},
	{
		id: 'blog',
		label: 'Blog',
		href: '/blog',
		hidden: false,
	},
	{
		id: 'contact',
		label: 'Kontakt',
		href: '/kontakt',
		hidden: false,
	},
	{
		id: 'policy',
		label: 'Polityka Prywatności',
		href: '/polityka-prywatnosci',
		hidden: true,
	},
] as const satisfies readonly NavLink[];
