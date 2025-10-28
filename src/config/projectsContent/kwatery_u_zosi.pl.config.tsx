import { SITE_CONFIG } from '../site.config';
import { ProjectContentConfig } from '@/types/projectPage.type';

const SLUG = 'kwatery-u-zosi';
const TITLE = 'Pokoje gościnne "Kwatery u Zosi"';
const DESCRIPTION =
	'Jeśli szukasz komfortowego wypoczynku wśród pięknych krajobrazów oraz gór, koniecznie zajżyj do tego miejsca. Czeka Cie tutaj niezwykłe ciepłe przywitanie no i wiadomo zimna wódeczka.';
const EXTERNAL_LINK = 'http://kwateryuzosi.pl';
const MOCKUP = {
	img: '/img/portfolio/adona_mockup.webp',
	alt: 'Strona internetowa restauracji Adona',
};

export const KWATERY_U_ZOSI: ProjectContentConfig = {
	metadata: {
		title: TITLE,
		description: DESCRIPTION,
		relPath: `/portfolio/${SLUG}`,
		slug: SLUG,
	},

	externalLink: EXTERNAL_LINK,
	mckpImage: MOCKUP.img,
	mckpImageAlt: MOCKUP.alt,

	SCHEMA: ({ project }) => [
		{
			'@context': 'https://schema.org',
			'@type': 'WebPage',
			'@id': `${SITE_CONFIG.baseUrl}${project?.metadata.relPath}/#webpage`,
			url: `${SITE_CONFIG.baseUrl}${project?.metadata.relPath}`,
			name: project?.metadata.title,
			description: project?.metadata.description,
			inLanguage: 'pl-PL',
			isPartOf: { '@id': `${SITE_CONFIG.baseUrl}/#website` },
			mainEntity: {
				'@id': `${SITE_CONFIG.baseUrl}${project?.metadata.relPath}/#project`,
			},
		},

		{
			'@context': 'https://schema.org',
			'@type': 'CreativeWork',
			'@id': `${SITE_CONFIG.baseUrl}${project?.metadata.relPath}/#project`,
			url: `${SITE_CONFIG.baseUrl}${project?.metadata.relPath}`,
			name: project?.metadata.title,
			headline: project?.metadata.title,
			description: project?.metadata.description,
			inLanguage: 'pl-PL',
			isPartOf: {
				'@type': 'Collection',
				'@id': `${SITE_CONFIG.baseUrl}/portfolio/#portfolio`,
			},
			mainEntityOfPage: {
				'@id': `${SITE_CONFIG.baseUrl}/${project?.metadata.relPath}/#webpage`,
			},
			publisher: {
				'@type': 'Organization',
				'@id': `${SITE_CONFIG.baseUrl}/#organization`,
			},
			image: {
				'@type': 'ImageObject',
				url: `${SITE_CONFIG.baseUrl}${project?.mckpImage}`
			},
		},

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
					name: 'Portfolio',
					item: `${SITE_CONFIG.baseUrl}/portfolio`,
				},
				{
					'@type': 'ListItem',
					position: 3,
					name: project?.metadata.title,
					item: `${SITE_CONFIG.baseUrl}${project?.metadata.relPath}`,
				},
			],
		},
	],

	heroSection: {
		heading: 'Kwateru u Zosi',
		subline: 'Przytulne pokoje Gościnne',
		bgImage: '/img/photos/project_hero_image.webp',
		techStack: 'React, TypeScript, NodeJS, Firebase, SCSS',
		externalUrl: EXTERNAL_LINK,
	},

	contentSection: {
		heading: 'Strona ofertowa dla domu gościnnego w Węgierskiej Górce',
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
		title: TITLE,
		description: DESCRIPTION,
		mockupImg: MOCKUP.img,
		mockupAlt: MOCKUP.alt,
		externalLink: EXTERNAL_LINK,
		caseStudyLink: `/portfolio/${SLUG}`,
	},

	recentProjects: {
		heading: 'Zobacz inne projekty, nad którymi pracowałem',
		text: 'Tworzę strony dopasowane do potrzeb i branży klienta — od koncepcji graficznej po optymalizację SEO. Sprawdź, jak wyglądają inne projekty, które pomogły moim klientom skuteczniej działać w sieci.',
		excludeProjectSlug: SLUG,
	},

	contactSection: {
		heading: 'Chcesz podobną stronę dla swojej firmy?',
		text: 'Zaprojektuję stronę internetową od podstaw, dopasowaną do Twojej branży i oczekiwań klientów. Każdy projekt tworzę tak, aby dobrze wyglądał, działał szybko i był widoczny w Google. Dzięki temu Twoja strona realnie wspiera sprzedaż i pozyskiwanie nowych kontaktów.',
	},
};
