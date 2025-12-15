import { DirectQuery } from '@/components/DirectQuery/DirectQuery';
import { Expectation } from '@/components/Expectation/Expectation';
import { Offer_Content } from '@/sections/Offer_Content/Offer_Content';
import { Review_Section } from '@/sections/Review_Sectoin/Review_Section';
import { SectionHero } from '@/sections/SectionHero/SectionHero';
import React from 'react';
import styles from './index.module.scss';
import { SITE_CONFIG } from '@/config/site.config';
import { createMetadata } from '@/utils/createMetadata';
import { linkHref } from '@/utils/linkHref.helper';

export const metadata = createMetadata({
	title:
		'Strony internetowe, SEO i Google Moja Firma | Zobacz ofertę WebCraftSTUDIO',
	description:
		'Kompleksowe wsparcie online dla Twojej marki - strony internetowe, SEO i Google Moja Firma. Zwiększ swoją widoczność w sieci!',
	relPath: '/oferta',
});

const schema = [
	{
		'@context': 'https://schema.org',
		'@type': 'CollectionPage',
		'@id': `${SITE_CONFIG.baseUrl}${metadata.relPath}/#collection`,
		url: `${SITE_CONFIG.baseUrl}${metadata.relPath}`,
		name: metadata.title,
		alternateName:
			'Tworzenie i pozycjonowanie stron internetowych oraz wizytówki Google Moja Firma',
		description: metadata.description,
		isPartOf: {
			'@id': `${SITE_CONFIG.baseUrl}/#website`,
		},
		mainEntity: [
			{
				'@type': 'Service',
				'@id': `${SITE_CONFIG.baseUrl}${linkHref('websites')}/#service`,
				name: 'Tworzenie stron internetowych',
			},
			{
				'@type': 'Service',
				'@id': `${SITE_CONFIG.baseUrl}${linkHref('seo')}/#service`,
				name: 'Optymalizacja SEO',
			},
			{
				'@type': 'Service',
				'@id': `${SITE_CONFIG.baseUrl}${linkHref('gmb')}/#service`,
				name: 'Pozycjonowaine wizytówki Google Moja Firma',
			},
		],
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
				name: 'Oferta',
				item: `${SITE_CONFIG.baseUrl}${metadata.relPath}`,
			},
		],
	},
];

const Offer = () => {
	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
			/>

			<SectionHero
				heading='Skuteczne wsparcie online'
				subline='Zwiększ widoczność swojej marki w Google'
				bgImage='/img/photos/offer_hero_image.jpg'
			/>
			<Offer_Content />

			<Expectation />

			<DirectQuery heading='A czy Twój biznes dobrze pozycjonuje się online?'>
				Masz świetny produkt lub usługę, ale Twoja obecność w sieci nie
				odzwierciedla tego, co oferujesz? Pomogę Ci to zmienić. Stworzę stronę
				www, która wyróżni Cię na tle konkurencji, zadbam o SEO, by klienci
				mogli Cię łatwo znaleźć, i zoptymalizuję Twoją wizytówkę Google Moja
				Firma, byś był zawsze o krok przed innymi. Wspólnie zbudujemy Twoją
				silną pozycję online.
			</DirectQuery>

			<Review_Section
				className={styles.reviewSection}
				heading='Dołącz do zadowolonych klientów'>
				Zadowoleni klienci to najlepszy dowód skuteczności mojej pracy. Każda
				realizacja to dla mnie szansa, by w pełni zrozumieć potrzeby Twojego
				biznesu i stworzyć rozwiązania, które realnie wspierają jego rozwój.
				Twoja opinia jest dla mnie inspiracją do dalszego doskonalenia usług.
			</Review_Section>
		</>
	);
};

export default Offer;
