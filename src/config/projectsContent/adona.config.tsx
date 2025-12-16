import { linkHref } from '@/utils/linkHref.helper';
import { SITE_CONFIG } from '../site.config';
import { ProjectContentConfig } from '@/types/projectPage.type';

const SLUG = 'restauracja-orientalna-adona';
const TITLE = 'ADONA – strona internetowa restauracji orientalnej';
const DESCRIPTION =
	'Projekt nowej strony internetowej restauracji ADONA z panelem do samodzielnej edycji menu oraz komunikatów dla klientów.';
const EXTERNAL_LINK = 'http://adona.net.pl';
const MOCKUP = {
	img: '/img/portfolio/adona/screen_mockup.webp',
	alt: 'Projekt strony internetowej restauracji ADONA',
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
		heading: 'ADONA',
		subline: 'Restauracja orientalna',
		bgImage: '/img/photos/project_hero_image.webp',
		techStack: 'React (Vite), TypeScript, NodeJS, Firebase, SCSS',
		externalUrl: EXTERNAL_LINK,
	},

	contentSection: {
		heading: 'Strona internetowa restauracji z systemem zarządzania menu',
		projectInfo: (
			<>
				<span>
					Restauracja ADONA posiadała wcześniej stronę internetową, jednak wraz
					z rozwojem oferty pojawiła się potrzeba jej odświeżenia oraz lepszego
					dostosowania do urządzeń mobilnych i aktualnych standardów użytkowych.
				</span>

				<span>
					Celem projektu było stworzenie nowej, czytelnej strony internetowej,
					która w przejrzysty sposób zaprezentuje ofertę lokalu oraz menu, a
					jednocześnie umożliwi właścicielowi samodzielne zarządzanie treścią.
					Projekt obejmował również wdrożenie panelu administracyjnego z
					możliwością edycji menu oraz publikowania komunikatów w formie
					pop-upu.
				</span>

				<span>
					Wdrożone rozwiązanie uprościło korzystanie ze strony zarówno po
					stronie użytkowników, jak i administratora. Panel zarządzania pozwala
					na szybką aktualizację oferty oraz komunikację z klientami bez
					konieczności ingerencji w kod strony.
				</span>
			</>
		),
		mockupImg: MOCKUP.img,
		mockupAlt: MOCKUP.alt,
		servicesList: [
			{
				name: 'Projekt i wdrożenie strony internetowej',
				description:
					'lekka i szybka strona front-endowa oparta na React (Vite) i TypeScript.',
			},
			{
				name: 'Panel administracyjny do zarządzania menu',
				description:
					'panel umożliwiający edycję menu, kategorii oraz cen bez ingerencji w kod.',
			},
			{
				name: 'Komunikaty pop-up',
				description:
					'funkcjonalność umożliwiająca publikowanie komunikatów i ogłoszeń na stronie głównej.',
			},
			{
				name: 'Autoryzacja administratora',
				description:
					'bezpieczny dostęp do panelu oparty na Firebase Authentication.',
			},
			{
				name: 'Struktura danych menu',
				description:
					'przechowywanie i obsługa danych menu w relacyjnej bazie MySQL.',
			},
		],
	},

	gallery: {
		commonAlt: 'Strona internetowa restauracji ADONA — układ i widoki',
		photos: [
			'/img/portfolio/adona/gallery/photo_1.webp',
			'/img/portfolio/adona/gallery/photo_2.webp',
			'/img/portfolio/adona/gallery/photo_3.webp',
			'/img/portfolio/adona/gallery/photo_4.webp',
			'/img/portfolio/adona/gallery/photo_5.webp',
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


//IMPROVE: Dodać ikony ptaszków koło futureList (podobnie jak w cenniku)