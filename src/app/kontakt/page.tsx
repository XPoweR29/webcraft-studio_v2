import { ContactNap } from '@/components/ContactNap/ContactNap';
import { SITE_CONFIG } from '@/config/site.config';
import { Contact_Content } from '@/sections/Contact_Content/Contact_Content';
import { SectionHero } from '@/sections/SectionHero/SectionHero';
import { createMetadata } from '@/utils/createMetadata';
import React from 'react';
import styles from './index.module.scss';

export const metadata = createMetadata({
	title: 'Kontakt – WebCraftSTUDIO | Strony internetowe i SEO',
	description:
		'Chcesz dowiedzieć się więcej o tworzeniu stron WWW i SEO? Skontaktuj się ze mną przez formularz, e-mail lub telefon.',
	relPath: '/kontakt',
});

const schema = [
	{
		'@context': 'https://schema.org',
		'@type': 'ContactPage',
		'@id': `${SITE_CONFIG.baseUrl}/#contact`,
		url: `${SITE_CONFIG.baseUrl}${metadata.relPath}`,
		name: metadata.title,
		description: metadata.description,
		isPartOf: {
			'@id': `${SITE_CONFIG.baseUrl}/#website`,
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
				name: 'Kontakt',
				item: `${SITE_CONFIG.baseUrl}${metadata.relPath}`,
			},
		],
	},
];

const Contact = () => {
	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
			/>

			<SectionHero
				heading='Skontaktuj się ze mną'
				subline='Chętnie odpowiem na Twoje pytania'
				bgImage='/img/photos/contact_hero_image.webp'
				className={styles.headingWrapper}
			/>
			<Contact_Content />
			<ContactNap className={styles.form} />
		</>
	);
};

export default Contact;
