import { Blog_Section } from '@/sections/Blog_Section/Blog_Section';
import { Portfolio_Content } from '@/sections/Portfolio_Content/Portfolio_Content';
import { SectionHero } from '@/sections/SectionHero/SectionHero';
import React from 'react';
import styles from './index.module.scss';
import { createMetadata } from '@/utils/creataeMetadata';
import { SITE_CONFIG } from '@/config/site.config';
import { RECENT_PROJECTS } from '@/utils/getProjectsInfo';

export const metadata = createMetadata({
	title: 'Moje realizacje | Strony WWW stworzone w WebCraftSTUDIO',
	description:
		'Zobacz portfolio WebCraftSTUDIO. Tworzę strony WWW od podstaw – indywidualne projekty, bez szablonów, szybkie i widoczne w Google.',
	relPath: '/portfolio',
});

const schema = [
	{
		'@context': 'https://schema.org',
		'@type': 'CollectionPage',
		'@id': `${SITE_CONFIG.baseUrl}${metadata.relPath}/#portfolio`,
		url: `${SITE_CONFIG.baseUrl}${metadata.relPath}`,
		name: metadata.title,
		description: metadata.description,
		isPartOf: {
			'@id': `${SITE_CONFIG.baseUrl}/#website`,
		},
		mainEntity: RECENT_PROJECTS.map((p) => ({
			'@id': `${SITE_CONFIG.baseUrl}${p.caseStudyLink}/#project`,
		})),
	},

	...(RECENT_PROJECTS ?? []).map((p) => ({
		'@context': 'https://schema.org',
		'@type': 'CreativeWork',
		'@id': `${SITE_CONFIG.baseUrl}${p.caseStudyLink}/#project`,
		name: p.title,
		description: p.description,
		url: `${SITE_CONFIG.baseUrl}${p.caseStudyLink}`,
		image: `${SITE_CONFIG.baseUrl}${p.mockupImg}`,
	})),

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
			<Blog_Section className={styles.blogSection} />
		</>
	);
};

export default Portfolio;