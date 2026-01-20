import { SITE_CONFIG } from '../site.config';
import { ProjectContentConfig } from '@/types/projectPage.type';

const SLUG = 'dzialki-w-beskidzie';
const TITLE = 'Działki w Beskidzie Żywieckim – strona ofertowa nieruchomości';
const DESCRIPTION =
	'Strona ofertowa prezentująca działki na sprzedaż — z opisami, galeriami, mapami Google oraz czytelną nawigacją między ogłoszeniami.';
const EXTERNAL_LINK = 'http://dzialkiwbeskidzie.pl';
const MOCKUP = {
	img: '/img/portfolio/dzialki_w_beskidzie/screen_mockup.webp',
	alt: 'Strona ofertowa niruchomości w Beskidach',
};

export const DZIALKI_W_BESKIDZIE = {
	id: 'dzialki-w-beskidzie',
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
		heading: 'Działki w Beskidzie Żywieckim',
		subline: 'Strona ofertowa działek na sprzedaż',
		bgImage: '/img/photos/project_hero_image.webp',
		techStack: 'NextJS, TypeScript, SASS, Vercel',
		externalUrl: EXTERNAL_LINK,
	},

	contentSection: {
		heading: 'Strona ofertowa nieruchomości z podstronami ogłoszeń',
		projectInfo: (
			<>
				<span>
					„Działki w Beskidzie Żywieckim” to strona ofertowa przygotowana do
					prezentacji kilku działek na sprzedaż w formie zbliżonej do ogłoszeń
					znanych z portali nieruchomości. Projekt powstał od zera na potrzeby
					klienta i miał zapewnić spójną, własną obecność w sieci.
				</span>

				<span>
					Głównym celem było czytelne przedstawienie oferty — z podziałem na
					osobne podstrony dla każdej działki, pełnym opisem, zdjęciami oraz
					informacjami lokalizacyjnymi. Strona główna w większym stopniu
					eksponuje kluczową ofertę inwestycyjną, a pozostałe działki są
					dostępne z poziomu sekcji z linkowaniem do podstron.
				</span>

				<span>
					W ramach projektu wdrożono elementy wspierające kontakt i pozyskiwanie
					zapytań, w tym formularz kontaktowy oraz widoczne przyciski CTA,
					ułatwiające szybki kontakt z właścicielem oferty.
				</span>
			</>
		),
		mockupImg: MOCKUP.img,
		mockupAlt: MOCKUP.alt,
		servicesList: [
			{
				name: 'Projekt i wdrożenie strony ofertowej',
				description:
					'indywidualny layout zaprojektowany i wdrożony w Next.js (TypeScript, SASS).',
			},
			{
				name: 'Podstrony ogłoszeń dla działek',
				description:
					'oddzielne podstrony z opisem, parametrami, galerią zdjęć oraz materiałami prezentacyjnymi.',
			},
			{
				name: 'Prezentacja ofert na stronie głównej',
				description:
					'sekcje z wyróżnioną ofertą główną oraz linkowaniem do pozostałych działek (karty/slider).',
			},
			{
				name: 'Mapy i oznaczenia lokalizacji',
				description:
					'integracja z Google Maps oraz prezentacja lokalizacji działek na mapie.',
			},
			{
				name: 'Materiały wizualne i wideo',
				description:
					'galerie zdjęć, materiały wideo oraz wizualne wyróżnienie działek.',
			},
			{
				name: 'Kontakt i CTA',
				description:
					'formularz kontaktowy oraz "call to action" widoczne w kluczowych miejscach strony.',
			},
		],
	},

	gallery: {
		commonAlt: 'Strona internetowa restauracji Adona - Layout',
		photos: [
			'/img/portfolio/dzialki_w_beskidzie/gallery/photo_1.webp',
			'/img/portfolio/dzialki_w_beskidzie/gallery/photo_2.webp',
			'/img/portfolio/dzialki_w_beskidzie/gallery/photo_3.webp',
			'/img/portfolio/dzialki_w_beskidzie/gallery/photo_4.webp',
			'/img/portfolio/dzialki_w_beskidzie/gallery/photo_5.webp',
			'/img/portfolio/dzialki_w_beskidzie/gallery/photo_6.webp',
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
