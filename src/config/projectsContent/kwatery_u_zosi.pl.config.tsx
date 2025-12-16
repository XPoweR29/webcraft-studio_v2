import { SITE_CONFIG } from '../site.config';
import { ProjectContentConfig } from '@/types/projectPage.type';

const SLUG = 'kwatery-u-zosi';
const TITLE = 'Kwatery u Zosi – strona internetowa obiektu noclegowego';
const DESCRIPTION =
	'Strona wizytówkowa dla obiektu noclegowego „Kwatery u Zosi”, zaprojektowana z myślą o czytelnej prezentacji oferty i obecności w sieci.';
const EXTERNAL_LINK = 'http://kwateryuzosi.pl';
const MOCKUP = {
	img: '/img/portfolio/kwatery_u_zosi/screen_mockup.webp',
	alt: 'Projekt strony internetowej obiektu noclegowego Kwatery u Zosi',
};

export const KWATERY_U_ZOSI = {
	id: 'kwatery-u-zosi',
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
		subline: 'Prosta i czytelna strona noclegowa',
		bgImage: '/img/photos/project_hero_image.webp',
		techStack: 'Gatsby, TypeScript, SCSS',
		externalUrl: EXTERNAL_LINK,
	},

	contentSection: {
		heading: 'Strona internetowa dla obiektu noclegowego w Węgierskiej Górce',
		projectInfo: (
			<>
				<span>
					Kwatery u Zosi to obiekt oferujący pokoje gościnne i noclegi dla
					turystów poszukujących spokojnego miejsca na wypoczynek. Przed
					rozpoczęciem współpracy klient nie posiadał własnej strony
					internetowej, co oznaczało brak widoczności w sieci oraz konieczność
					polegania wyłącznie na zewnętrznych ogłoszeniach.
				</span>
				<span>
					Celem projektu było stworzenie prostej i estetycznej strony
					wizytówkowej, która pozwala w czytelny sposób zaprezentować ofertę
					noclegową oraz podstawowe informacje o obiekcie.
				</span>
				<span>
					Dzięki wdrożeniu strony obiekt zyskał własną, niezależną obecność w
					sieci oraz prosty kanał kontaktu dla osób zainteresowanych rezerwacją.
				</span>
			</>
		),
		mockupImg: MOCKUP.img,
		mockupAlt: MOCKUP.alt,
		servicesList: [
			{
				name: 'Responsywny layout',
				description:
					'pełne dostosowanie strony do telefonów, tabletów oraz ekranów desktopowych.',
			},
			{
				name: 'Strona główna z ofertą i cennikiem',
				description:
					'czytelna prezentacja oferty noclegowej wraz z sekcją cenową dostępną bezpośrednio na stronie głównej.',
			},
			{
				name: 'Formularz kontaktowy',
				description:
					'prosty formularz umożliwiający wysyłanie zapytań o dostępność i rezerwację bezpośrednio na dedykowaną skrzynkę e-mail.',
			},
			{
				name: 'Integracja z Google Maps',
				description:
					'osadzona mapa ułatwiająca szybkie zlokalizowanie obiektu.',
			},
			{
				name: 'Podstawowe SEO',
				description:
					'poprawna struktura nagłówków oraz treści umożliwiająca podstawową obecność strony w wyszukiwarce.',
			},
		],
	},

	gallery: {
		commonAlt: 'Strona internetowa restauracji Adona - Layout',
		photos: [
			'/img/portfolio/kwatery_u_zosi/gallery/photo_1.webp',
			'/img/portfolio/kwatery_u_zosi/gallery/photo_2.webp',
			'/img/portfolio/kwatery_u_zosi/gallery/photo_3.webp',
			'/img/portfolio/kwatery_u_zosi/gallery/photo_4.webp',
			'/img/portfolio/kwatery_u_zosi/gallery/photo_5.webp',
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
