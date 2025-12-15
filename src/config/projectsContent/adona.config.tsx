import { linkHref } from '@/utils/linkHref.helper';
import { SITE_CONFIG } from '../site.config';
import { ProjectContentConfig } from '@/types/projectPage.type';

const SLUG = 'restauracja-orientalna-adona';
const TITLE = 'Restauracja orientalna ADONA';
const DESCRIPTION =
	'Przejrzysta i czytelna strona, która przedstawia ofertę lokalu ADONA. Całość zaprojektowana tak, by użytkownik szybko znalazł to, czego szuka.';
const EXTERNAL_LINK = 'http://adona.net.pl';
const MOCKUP = {
	img: '/img/portfolio/adona/screen_mockup.webp',
	alt: 'Strona internetowa dla restauracji Adona',
};

export const ADONA = {
	id: 'adona',
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
				'@id': `${SITE_CONFIG.baseUrl}${project?.metadata.relPath}/#webpage`,
			},
			publisher: {
				'@type': 'Organization',
				'@id': `${SITE_CONFIG.baseUrl}/#organization`,
			},
			image: {
				'@type': 'ImageObject',
				url: `${SITE_CONFIG.baseUrl}${project?.mckpImage}`,
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
					name: 'Blog',
					item: `${SITE_CONFIG.baseUrl}${linkHref('portfolio')}`,
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
} as const satisfies ProjectContentConfig;
