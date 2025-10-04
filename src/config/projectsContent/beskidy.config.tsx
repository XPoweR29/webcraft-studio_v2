import { SITE_CONFIG } from '../site.config';
import { ProjectContentConfig } from '@/types/projectPage.type';

export const BESKIDY: ProjectContentConfig = {
	METADATA: {
		title: 'Restauracja orientalna ADONA',
		description:
			'Zajebista strona która zastąpiła starego paździerza na którego nie dało się patrzeć. A juz napewno wejść na telefonie - haa tfuuu!',
	},

	SCHEMA: (meta) => [
		{
			'@context': 'https://schema.org',
			'@type': 'WebPage',
			'@id': `${SITE_CONFIG.baseUrl}/${meta.relPath}/#webpage`,
			url: `${SITE_CONFIG.baseUrl}/${meta.relPath}`,
			name: meta.title,
			description: meta.description,
			isPartOf: {
				'@id': `${SITE_CONFIG.baseUrl}/#website`,
			},
			mainEntity: {
				'@id': `${SITE_CONFIG.baseUrl}/${meta.relPath}/#service`,
			},
		},
		//BREADCRUMB
		{
			'@context': 'https://schema.org',
			'@type': 'BreadcrumbList',
			itemListElement: [
				{
					'@type': 'ListItem',
					position: 1,
					name: 'Strona główna',
					item: SITE_CONFIG.baseUrl,
				},
				{
					'@type': 'ListItem',
					position: 2,
					name: 'Oferta',
					item: `${SITE_CONFIG.baseUrl}/oferta`,
				},
				{
					'@type': 'ListItem',
					position: 3,
					name: 'Tworzenie stron WWW',
					item: `${SITE_CONFIG.baseUrl}/${meta.relPath}`,
				},
			],
		},
	],

	heroSection: {
		heading: 'Adona',
		subline: 'Restauracja orientalna',
		bgImage: '/img/photos/project_hero_image.webp',
		techStack: 'React, TypeScript, NodeJS, Firebase, SCSS',
		externalUrl: 'http://adona.net.pl',
	},

	contentSection: {
		heading: 'Strona internetowa dla restauracji z systemem zarządzania menu',
		customerInfo:
			'Restauracja Adona to lokal gastronomiczny serwujący orientalne dania. Właścicielowi zależało na stworzeniu strony, która nie tylko zaprezentuje ofertę w przejrzysty sposób, ale również pozwoli na samodzielne zarządzanie menu – bez konieczności ingerencji w kod.',
		mockupImg: '/img/portfolio/adona/screen_mockup.webp',
		mockupAlt: 'Projekt strony internetowej Adona',
		servicesList: [
			{
				name: 'Projekt i wdrożenie front-endu',
				description: 'lekka i szybka strona oparta na React (Vite)',
			},
			{
				name: 'Panel administratora',
				description:
					'dedykowany CMS umożliwiający łatwe zarządzanie menu, kategoriami i cenami.',
			},
			{
				name: 'System logowania',
				description:
					'bezpieczne logowanie administratora oparte na Firebase Authentication.',
			},
			{
				name: 'Baza danych',
				description:
					'przechowywanie informacji o menu w MySQL, zapewniające stabilność i elastyczność.',
			},
		],
	},

	gallery: {
		commonAlt: 'Strona internetowa restauracji Adona - Layout',
		photos: [
			'/img/portfolio/adona/gallery/adona_1.webp',
			'/img/portfolio/adona/gallery/adona_2.webp',
			'/img/portfolio/adona/gallery/adona_3.webp',
			'/img/portfolio/adona/gallery/adona_1.webp',
			'/img/portfolio/adona/gallery/adona_2.webp',
			'/img/portfolio/adona/gallery/adona_3.webp',
		],
	},

	previewInfo: {
		title: 'Działki na sprzedaż w Beskidach',
		description:
			'No i to jest ta strona którą puszczałem live ostatnio. Nawet spoko to wyszło chociaż miałem pewne ograniczenia.',
		mockupImg: '/img/portfolio/adona_mockup.webp',
		mockupAlt: 'Strona internetowa restauracji Adona',
		externalLink: 'http://adona.net.pla',
		caseStudyLink: '/portfolio/adona123',
	},
};
