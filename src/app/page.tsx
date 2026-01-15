import { Home_Start } from '@/sections/Home_Start/Home_Start';
import { Home_About } from '@/sections/Home_About/Home_About';
import { Recent_Projects } from '@/sections/Home_Projects/Recent_Projects';
import { Process_Section } from '@/components/Process_Section/Process_Section';
import { linkHref } from '@/utils/linkHref.helper';
import { Expectation } from '@/components/Expectation/Expectation';
import { Review_Section } from '@/sections/Review_Sectoin/Review_Section';
import { FAQ_Section } from '@/sections/FAQ_Section/FAQ_Section';
import { Blog_Section } from '@/sections/Blog_Section/Blog_Section';
import { Home_Contact } from '@/sections/Home_Contact/Home_Contact';
import { SITE_CONFIG } from '@/config/site.config';
import { createMetadata } from '@/utils/createMetadata';

export const metadata = createMetadata({
	title: 'Tworzenie stron internetowych i SEO | WebCraftSTUDIO',
	description:
		'Projektowanie stron WWW i pozycjonowanie w Google. Nowoczesne strony internetowe dla firm oraz lokalne SEO, które zwiększa Twoją widoczność w sieci.',
});

const schema = [
	{
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		'@id': `${SITE_CONFIG.baseUrl}/#website`,
		url: `${SITE_CONFIG.baseUrl}`,
		name: metadata.title,
		alternateName: 'Tworzenie i pozycjonowanie sron internetowych',
		description: metadata.description,
		publisher: {
			'@id': `${SITE_CONFIG.baseUrl}/#organization`,
		},
	},
	{
		'@context': 'https://schema.org',
		'@type': 'Organization',
		'@id': `${SITE_CONFIG.baseUrl}/#organization`,
		url: `${SITE_CONFIG.baseUrl}`,
		name: 'WebCraftSTUDIO',
		logo: {
			'@type': 'ImageObject',
			url: `${SITE_CONFIG.baseUrl}/logo.jpg`,
			width: 600,
			height: 600,
		},
		image: {
			'@type': 'ImageObject',
			url: `${SITE_CONFIG.baseUrl}/og_img.jpg`,
			width: 1200,
			height: 630,
		},
		contactPoint: {
			'@type': 'ContactPoint',
			telephone: `${SITE_CONFIG.contact.phoneHref}`,
			email: SITE_CONFIG.contact.email,
			contactType: 'customer service',
			areaServed: 'PL',
			availableLanguage: ['Polish'],
		},
		address: {
			'@type': 'PostalAddress',
			addressLocality: SITE_CONFIG.address.city,
			streetAddress: SITE_CONFIG.address.streetAddress,
			postalCode: SITE_CONFIG.address.postalCode,
			addressCountry: SITE_CONFIG.address.countryCode,
		},
		location: {
			'@type': 'Place',
			hasMap: SITE_CONFIG.address.map,
		},
		areaServed: [
			{
				'@type': 'AdministrativeArea',
				name: 'woj. Śląskie',
			},
			{
				'@type': 'AdministrativeArea',
				name: 'woj. Małopolskie',
			},
		],
		sameAs: Object.values(SITE_CONFIG.externalLinks).filter(Boolean),
	},
	{
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		name: 'Najczęściej zadawane pytania – WebCraftSTUDIO',
		description:
			'FAQ o tworzeniu stron internetowych, SEO i Google Moja Firma.',
		mainEntity: [
			{
				'@type': 'Question',
				name: 'Ile kosztuje profesjonalna strona internetowa dla małej firmy?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: 'Koszt stworzenia profesjonalnej strony internetowej dla małej firmy zależy od zakresu projektu. W WebCraftSTUDIO oferuję gotowe pakiety z przejrzystą wyceną. Każda strona jest tworzona od zera, bez szablonów, z naciskiem na wygląd, szybkość i lokalne SEO.',
				},
			},
			{
				'@type': 'Question',
				name: 'Czy zajmujesz się pozycjonowaniem strony internetowej w Google?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: 'Tak, pozycjonowanie strony internetowej w Google to jeden z kluczowych elementów mojej oferty. Optymalizuję strukturę strony, nagłówki, treści i linkowanie wewnętrzne, aby zwiększyć widoczność w organicznych wynikach wyszukiwania – szczególnie lokalnie.',
				},
			},
			{
				'@type': 'Question',
				name: 'Czy wykonujesz responsywne strony internetowe z optymalizacją SEO?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: 'Każda strona, którą projektuję, jest w pełni responsywna i przygotowana pod optymalizację SEO. Dzięki temu dobrze działa na telefonie i jednocześnie jest gotowa do pozycjonowania – zarówno lokalnego, jak i ogólnego.',
				},
			},
			{
				'@type': 'Question',
				name: 'Jak działa pozycjonowanie wizytówki Google Moja Firma?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: 'Pozycjonowanie wizytówki Google Moja Firma polega na jej optymalizacji pod kątem lokalnych wyników – map, opinii i zapytań „w pobliżu”. Pomagam zarówno w założeniu wizytówki, jak i jej regularnej aktualizacji, co zwiększa widoczność Twojej firmy w Google.',
				},
			},
			{
				'@type': 'Question',
				name: 'Czy mogę zlecić audyt SEO istniejącej strony internetowej?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: 'Tak – wykonuję audyty SEO dla istniejących stron internetowych. Sprawdzam strukturę, nagłówki, szybkość i obecność fraz kluczowych. Na tej podstawie proponuję konkretne działania, które poprawią widoczność strony w Google.',
				},
			},
			{
				'@type': 'Question',
				name: 'Czy tworzysz strony internetowe z indywidualnym projektem graficznym?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: 'W WebCraftSTUDIO każda strona internetowa powstaje na podstawie indywidualnego projektu graficznego. Nie korzystam z gotowych motywów – dzięki temu Twoja strona wyróżnia się i jest lepiej dopasowana do potrzeb biznesu i pozycjonowania.',
				},
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
		],
	},
];
export default async function Home() {
	
	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
			/>

			<Home_Start />
			<Home_About />
			<Recent_Projects
				heading={
					<>
						Zobacz moje ostatnie <span>realizacje</span>
					</>
				}
				text='Każdy projekt tworzę samodzielnie. Bez schematów, bez korporacyjnego
					podejścia. Dzięki temu masz bezpośredni kontakt z osobą odpowiedzialną
					za cały proces i pewność, że nic nie zostanie potraktowane „taśmowo”.
					Stawiam na indywidualne podejście, realne zaangażowanie i efekt, który
					naprawdę działa – wizualnie i biznesowo.'
			/>
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
			<Blog_Section
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
			<Home_Contact />
		</>
	);
}
