import { SITE_CONFIG } from '../site.config';
import { ProjectContentConfig } from '@/types/projectPage.type';

const SLUG = 'pro-wnetrze-zywiec';
const TITLE = 'PRO Wnętrze Żywiec – strona firmy remontowej';
const DESCRIPTION =
	'Strona internetowa firmy remontowo-wykończeniowej z rozbudowaną ofertą usług, landingami lokalizacyjnymi oraz wsparciem SEO i Google Moja Firma.';
const EXTERNAL_LINK = 'http://pro-wnetrze.pl';
const MOCKUP = {
	img: '/img/portfolio/pro_wnetrze/screen_mockup.webp',
	alt: 'Strona internetowa firmy remontowo-wykończeniowej PRO Wnętrze Żywiec',
};

export const PRO_WNETRZE_ZYWIEC = {
	id: 'pro-wnetrze-zywiec',
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
		heading: 'PRO Wnętrze Żywiec',
		subline: 'Remonty i Wykończenia wnętrz',
		bgImage: '/img/photos/project_hero_image.webp',
		techStack: 'Next.js, TypeScript, SASS, Tailwind, SEO',
		externalUrl: EXTERNAL_LINK,
	},

	contentSection: {
		heading: 'Strona internetowa firmy remontowo-wykończeniowej',
		projectInfo: (
			<>
				<span>
					PRO Wnętrze Żywiec to firma świadcząca usługi remontowe i
					wykończeniowe, dla której strona internetowa została zaprojektowana i
					wdrożona od podstaw. Projekt powstał na prośbę klienta i miał na celu
					zbudowanie profesjonalnej obecności w sieci oraz czytelnej prezentacji
					zakresu usług.
				</span>

				<span>
					Struktura serwisu obejmuje stronę główną, sekcje informacyjne,
					rozbudowaną ofertę usług podzieloną na grupy tematyczne oraz
					dedykowane podstrony usługowe. Każda z głównych kategorii posiada
					własne podstrony, co pozwala na przejrzyste zaprezentowanie oferty i
					ułatwia nawigację użytkownikom.
				</span>

				<span>
					W ramach projektu przygotowano również lokalne podstrony ofertowe
					oparte o analizę fraz kluczowych, wspierające widoczność strony w
					wynikach wyszukiwania. Całość została zaprojektowana z naciskiem na
					czytelność, UX oraz wsparcie działań sprzedażowych i wizerunkowych
					firmy.
				</span>
			</>
		),
		mockupImg: MOCKUP.img,
		mockupAlt: MOCKUP.alt,
		servicesList: [
			{
				name: 'Projekt i wdrożenie strony internetowej',
				description:
					'indywidualny projekt graficzny oraz implementacja strony w Next.js z naciskiem na UX i czytelność oferty.',
			},
			{
				name: 'Struktura usług i podstrony ofertowe',
				description:
					'rozbudowana architektura informacji obejmująca grupy usług oraz dedykowane podstrony.',
			},
			{
				name: 'Landingi lokalizacyjne',
				description:
					'przygotowanie lokalnych podstron ofertowych wspierających widoczność w wynikach wyszukiwania.',
			},
			{
				name: 'Optymalizacja SEO i struktura danych',
				description:
					'wdrożenie podstawowej i rozszerzonej optymalizacji SEO, w tym struktury nagłówków oraz danych schema.',
			},
			{
				name: 'Integracja z Google Moja Firma',
				description:
					'spięcie strony z wizytówką Google w celu wsparcia lokalnej widoczności i pozyskiwania zapytań.',
			},
		],
	},

	gallery: {
		commonAlt: 'Strona internetowa firmy remontowej PRO Wnętrze - Layout',
		photos: [
			'/img/portfolio/pro_wnetrze/gallery/photo_1.webp',
			'/img/portfolio/pro_wnetrze/gallery/photo_2.webp',
			'/img/portfolio/pro_wnetrze/gallery/photo_3.webp',
			'/img/portfolio/pro_wnetrze/gallery/photo_4.webp',
			'/img/portfolio/pro_wnetrze/gallery/photo_5.webp',
			'/img/portfolio/pro_wnetrze/gallery/photo_6.webp',
			'/img/portfolio/pro_wnetrze/gallery/photo_7.webp',
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
