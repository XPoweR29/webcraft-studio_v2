import { Blog_Section } from '@/sections/Blog_Section/Blog_Section';
import { Portfolio_Content } from '@/sections/Portfolio_Content/Portfolio_Content';
import { SectionHero } from '@/sections/SectionHero/SectionHero';
import React from 'react';
import { createMetadata } from '@/utils/createMetadata';
import { SITE_CONFIG } from '@/config/site.config';
import { PROJECTS } from '@/config/projectsContent/_reigistry';
import styles from './index.module.scss';

export const metadata = createMetadata({
	title: 'Moje realizacje | Strony WWW stworzone w WebCraftSTUDIO',
	description:
		'Zobacz portfolio WebCraftSTUDIO. Tworzę strony WWW od podstaw – indywidualne projekty, bez szablonów, szybkie i widoczne w Google.',
	relPath: '/portfolio',
});

const schema = [
	{
		'@context': 'https://schema.org',
		'@type': ['WebPage', 'CollectionPage'],
		'@id': `${SITE_CONFIG.baseUrl}${metadata.relPath}/#portfolio`,
		url: `${SITE_CONFIG.baseUrl}${metadata.relPath}`,
		name: metadata.title,
		description: metadata.description,
		isPartOf: {
			'@id': `${SITE_CONFIG.baseUrl}/#website`,
		},
		mainEntity: {
			'@type': 'ItemList',
			itemListElement: PROJECTS.map((p, i) => ({
				'@type': 'ListItem',
				position: i + 1,
				item: {
					'@type': 'CreativeWork',
					'@id': `${SITE_CONFIG.baseUrl}${p.metadata.relPath}/#project`,
				},
			})),
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
				item: `${SITE_CONFIG.baseUrl}${metadata.relPath}`,
			},
		],
	},
];

const Portfolio = () => {
	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
			/>

			<SectionHero
				heading='Skuteczne strony internetowe'
				subline='Projekty, które wyróżniają się w sieci'
				bgImage='/img/photos/portfolio_hero_image.webp'
			/>

			<Portfolio_Content />
			<Blog_Section
				className={styles.blogSection}
				heading={
					<>
						Sprawdź co <span>nowego</span> na blogu
					</>
				}
				text='Poznaj praktyczne porady, inspiracje i świeże nowości ze świata stron
					internetowych, SEO oraz promocji lokalnej firmy. Na blogu regularnie
					dzielę się sprawdzonymi wskazówkami i rozwiązaniami, które naprawdę
					pomagają rozwinąć Twój biznes online.'
				variant='latest'
			/>
		</>
	);
};

export default Portfolio;

