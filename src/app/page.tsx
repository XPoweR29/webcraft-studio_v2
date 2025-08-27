import { Home_Start } from '@/sections/HomeStart/Home_Start';
import { Home_About } from '@/sections/Home_About/Home_About';
import { siteConfig } from '@/config/site.config';
import { Home_Projects } from '@/sections/Home_Projects/Home_Projects';
import { Process_Section } from '@/components/Process_Section/Process_Section';
import { linkHref } from '@/utils/linkHref.helper';
import { Expectation } from '@/components/Expectation/Expectation';

const schema = {
	'@context': 'https://schema.org',
	'@type': ['WebSite', 'Organization'],
	'@id': `${siteConfig.baseUrl}/#main`,
	url: siteConfig.baseUrl,
	name: siteConfig.siteName,
	alternateName: 'Professional Frontend Starter for Developers',
	description:
		'Kickstart your modern frontend projects with this clean, SEO-friendly, and scalable boilerplate built with Next.js, TypeScript, and SCSS Modules.',
	logo: {
		'@type': 'ImageObject',
		url: `${siteConfig.baseUrl}/logo.jpg`,
		width: 600,
		height: 600,
	},
	image: {
		'@type': 'ImageObject',
		url: `${siteConfig.baseUrl}/og_img.jpg`,
		width: 1200,
		height: 630,
	},
	telephone: siteConfig.contact.phoneHref,
	email: siteConfig.contact.email,
	address: {
		'@type': 'PostalAddress',
		addressLocality: siteConfig.address.city,
		postalCode: siteConfig.address.postalCode,
		addressCountry: 'PL',
	},
	areaServed: [
		{
			'@type': 'AdministrativeArea',
			name: 'woj. Śląskie',
		},
	],
	sameAs: Object.values(siteConfig.externalLinks).filter(Boolean),
};

export default function Home() {
	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
			/>

			<Home_Start />
			<Home_About />
			<Home_Projects />
			<Process_Section
				heading='Jak wygląda współpraca?'
				bgImage='/img/handshake_sketch.svg'
				btnLabel='skontaktuj się'
				redirectTo={linkHref('contact')}
				steps={[
					{
						title: 'Rozmowa i analiza',
						text: 'Zaczynamy od konkretnej rozmowy – poznaję Twój biznes, cele i potrzeby, by zaproponować najlepsze rozwiązanie.',
					},
					{
						title: 'Oferta i plan działania',
						text: 'Na tej podstawie przygotowuję dopasowaną ofertę i przedstawiam Ci harmonogram prac.',
					},
					{
						title: 'Realizacja krok po kroku',
						text: 'Na bieżąco informuję Cię o postępach i przekazuję podglądy – masz pełen wgląd i wpływ na rozwój projektu.',
					},
					{
						title: 'Finalizacja i wspacie',
						text: 'Po zakończeniu wdrożenia możesz liczyć na moja pomoc techniczną i spokojną głowę.',
					},
				]}>
				Prosto, sprawnie, bez niedomówień i korporacyjnego nadęcia. Od
				pierwszego kontaktu wiesz, na czym stoisz, a każdy etap jest przejrzysty
				i dopasowany do Twoich potrzeb.
			</Process_Section>
			<Expectation/>
		</>
	);
}
