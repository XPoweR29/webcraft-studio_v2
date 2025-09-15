import { Process_Section } from '@/components/Process_Section/Process_Section';
import { SITE_CONFIG } from '@/config/site.config';
import { About_Content } from '@/sections/About_Content/About_Content';
import { Home_Contact } from '@/sections/Home_Contact/Home_Contact';
import { SectionHero } from '@/sections/SectionHero/SectionHero';
import { createMetadata } from '@/utils/creataeMetadata';
import { linkHref } from '@/utils/linkHref.helper';
import React from 'react';

export const metadata = createMetadata({
	title: 'Poznaj mnie | Tworzenie stron WWW i SEO - WebCraftSTUDIO',
	description:
		'Jestem web developerem i specjalistą SEO. W WebCraftSTUDIO tworzę strony WWW, które są skuteczne i pomagają Twojej firmie zdobywać klientów online.',
	relPath: '/o-mnie',
});

const schema = [
	{
		'@context': 'https://schema.org',
		'@type': 'AboutPage',
		'@id': `${SITE_CONFIG.baseUrl}${metadata.relPath}/#webpage`,
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
				item: `${SITE_CONFIG.baseUrl}`,
			},
			{
				'@type': 'ListItem',
				position: 2,
				name: 'O mnie',
				item: `${SITE_CONFIG.baseUrl}${metadata.relPath}`,
			},
		],
	},
];

const About = () => {
	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
			/>

			<SectionHero
				heading='Kilka słów o mnie'
				subline='I o tym, co robię w WebCraftSTUDIO'
				bgImage='/img/photos/about_hero_image.webp'
			/>
			<About_Content />
			<Process_Section
				heading='Co zyskujesz dzięki współpracy ze mną?'
				bgImage='/img/handshake_sketch.svg'
				btnLabel='skontaktuj się'
				redirectTo={linkHref('contact')}
				steps={[
					{
						title: 'Indywidualne podejście',
						text: 'Każdy projekt tworzę od zera, dopasowując go do Twojej branży, klientów i celów biznesowych.',
					},
					{
						title: 'Jasny plan działania',
						text: 'Od początku wiesz, co się dzieje – przygotowuję harmonogram i konkretne kroki, bez zbędnego chaosu.',
					},
					{
						title: 'Pełna przejrzystość',
						text: 'Regularnie informuję Cię o postępach, zapewniam możliwość wnoszenia uwag i pełnego wglądu w cały proces realizacji.',
					},
					{
						title: 'Wsparcie i spokojna głowa',
						text: 'Po oddaniu strony pomagam Ci w jej obsłudze i doradzam, jak najlepiej ją wykorzystać.',
					},
				]}>
				Każdy projekt to nie tylko efekt końcowy w postaci strony, ale też
				sposób, w jaki razem do niego dochodzimy. Współpraca ze mną oznacza
				jasne zasady, pełne zaangażowanie i stronę, która działa na Twoją
				korzyść.
			</Process_Section>
			<Home_Contact />
		</>
	);
};

export default About;
