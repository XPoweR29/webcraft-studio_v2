import www_icon from '../../assets/icons/sites_icon.svg';
import gmb_icon from '../../assets/icons/gmb_icon.svg';
import seo_icon from '../../assets/icons/seo_icon.svg';
import { linkHref } from '@/utils/linkHref.helper';

export const OFFER_LINKING: OfferLink[] = [
	{
		title: 'Tworzenie stron WWW',
		description:
			'Zdobądź stronę internetową dopasowaną do Twojej branży, która wyróżnia się designem i skutecznie przyciąga klientów.',
		icon: www_icon,
		sketchImg: '/img/web_sketch.svg',
		sketchId: 'www',
		href: linkHref('websites'),
	},
	{
		title: 'Wizytówka Google',
		description:
			'Przyciągnij lokalnych klientów dzięki zoptymalizowanemu profilowi, który budzi zaufanie i zapewnia lepszą widoczność w mapach Google.',
		icon: gmb_icon,
		sketchImg: '/img/location_sketch.svg',
		sketchId: 'gmb',
		href: linkHref('gmb'),
	},
	{
		title: 'Optymalizacja SEO',
		description:
			'Zadbaj o widoczność Twojej strony w Google. Dzięki skutecznemu pozycjonowaniu SEO dotrzesz do osób, które faktycznie szukają Twoich usług.',
		icon: seo_icon,
		sketchImg: '/img/search_sketch.svg',
		sketchId: 'seo',
		href: linkHref('seo'),
	},
];
