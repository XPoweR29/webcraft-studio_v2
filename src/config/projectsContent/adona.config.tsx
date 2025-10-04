import { SITE_CONFIG } from '../site.config';
import { ProjectContentConfig } from '@/types/projectPage.type';

const EXTERNAL_LINK = 'http://adona.net.pl';
const INTERNAL_LINK = '/portfolio/adona'
const MOCKUP = {
	img: '/img/portfolio/adona_mockup.webp',
	alt: 'Strona internetowa restauracji Adona'
};


export const ADONA: ProjectContentConfig = {
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
		externalUrl: EXTERNAL_LINK,
	},

	contentSection: {
		heading: 'Strona internetowa dla restauracji z systemem zarządzania menu',
		customerInfo:
			'Restauracja Adona to lokal gastronomiczny serwujący orientalne dania. Właścicielowi zależało na stworzeniu strony, która nie tylko zaprezentuje ofertę w przejrzysty sposób, ale również pozwoli na samodzielne zarządzanie menu – bez konieczności ingerencji w kod.',
		mockupImg: MOCKUP.img,
		mockupAlt: MOCKUP.alt,
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
		title: 'Restauracja orietnalna Adona',
		description:
			'Przejrzysta i czytelna strona, która przedstawia ofertę lokalu ADONA. Całość zaprojektowana tak, by użytkownik szybko znalazł to, czego szuka.',
		mockupImg: MOCKUP.img,
		mockupAlt: MOCKUP.alt,
		externalLink: EXTERNAL_LINK,
		caseStudyLink: INTERNAL_LINK,
	},

	recentProjects: {
		heading: 'Zobacz inne projekty, nad którymi pracowałem',
		text: 'Tworzę strony dopasowane do potrzeb i branży klienta — od koncepcji graficznej po optymalizację SEO. Sprawdź, jak wyglądają inne projekty, które pomogły moim klientom skuteczniej działać w sieci.',
		excludeProjectSlug: INTERNAL_LINK,
	},

	contactSection: {
		heading: 'Chcesz podobną stronę dla swojej firmy?',
		text: 'Zaprojektuję stronę internetową od podstaw, dopasowaną do Twojej branży i oczekiwań klientów. Każdy projekt tworzę tak, aby dobrze wyglądał, działał szybko i był widoczny w Google. Dzięki temu Twoja strona realnie wspiera sprzedaż i pozyskiwanie nowych kontaktów.',
	},
};
