import { Home_Start } from '@/sections/Home_Start/Home_Start';
import { Home_About } from '@/sections/Home_About/Home_About';
import { siteConfig } from '@/config/site.config';
import { Home_Projects } from '@/sections/Home_Projects/Home_Projects';
import { Process_Section } from '@/components/Process_Section/Process_Section';
import { linkHref } from '@/utils/linkHref.helper';
import { Expectation } from '@/components/Expectation/Expectation';
import { Review_Section } from '@/sections/Review_Sectoin/Review_Section';
import { FAQ_Section } from '@/sections/FAQ_Section/FAQ_Section';
import { Blog_Section } from '@/sections/Blog_Section/Blog_Section';
import { Home_Contact } from '@/sections/Home_Contact/Home_Contact';

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
			<Expectation />
			<Review_Section heading='Opinie klientów'>
				Opinie, które otrzymuję, to nie tylko podsumowanie współpracy. To
				konkretna wskazówka, co mogę robić jeszcze lepiej, by skuteczniej
				wspierać rozwój Twojego biznesu. Dzięki temu każda kolejna realizacja
				staje się bardziej przemyślana i dopasowana do realnych potrzeb
				klientów.
			</Review_Section>
			<FAQ_Section
				items={[
					{
						id: '1',
						title:
							'Ile kosztuje profesjonalna strona internetowa dla małej firmy?',
						content:
							'Koszt stworzenia profesjonalnej strony internetowej dla małej firmy zależy od zakresu projektu. W WebCraftSTUDIO oferuję gotowe pakiety z przejrzystą wyceną. Każda strona jest tworzona od zera, bez szablonów, z naciskiem na wygląd, szybkość i lokalne SEO.',
					},
					{
						id: '2',
						title:
							'Czy zajmujesz się pozycjonowaniem strony internetowej w Google?',
						content:
							'Tak, pozycjonowanie strony internetowej w Google to jeden z kluczowych elementów mojej oferty. Optymalizuję strukturę strony, nagłówki, treści i linkowanie wewnętrzne, aby zwiększyć widoczność w organicznych wynikach wyszukiwania – szczególnie lokalnie.',
					},
					{
						id: '3',
						title:
							'Czy wykonujesz responsywne strony internetowe z optymalizacją SEO?',
						content:
							'Każda strona, którą projektuję, jest w pełni responsywna i przygotowana pod optymalizację SEO. Dzięki temu dobrze działa na telefonie i jednocześnie jest gotowa do pozycjonowania – zarówno lokalnego, jak i ogólnego.',
					},
					{
						id: '4',
						title: 'Jak działa pozycjonowanie wizytówki Google Moja Firma?',
						content:
							'Pozycjonowanie wizytówki Google Moja Firma polega na jej optymalizacji pod kątem lokalnych wyników – map, opinii i zapytań „w pobliżu”. Pomagam zarówno w założeniu wizytówki, jak i jej regularnej aktualizacji, co zwiększa widoczność Twojej firmy w Google.',
					},
					{
						id: '5',
						title: 'Czy mogę zlecić audyt SEO istniejącej strony internetowej?',
						content:
							'Tak – wykonuję audyty SEO dla istniejących stron internetowych. Sprawdzam strukturę, nagłówki, szybkość i obecność fraz kluczowych. Na tej podstawie proponuję konkretne działania, które poprawią widoczność strony w Google.',
					},
					{
						id: '6',
						title:
							'Czy tworzysz strony internetowe z indywidualnym projektem graficznym?',
						content:
							'W WebCraftSTUDIO każda strona internetowa powstaje na podstawie indywidualnego projektu graficznego. Nie korzystam z gotowych motywów – dzięki temu Twoja strona wyróżnia się i jest lepiej dopasowana do potrzeb biznesu i pozycjonowania.',
					},
				]}
			/>
			<Blog_Section/>
			<Home_Contact/>
		</>
	);
}
