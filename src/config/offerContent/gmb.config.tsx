import { linkHref } from '@/utils/linkHref.helper';
import { ServiceContentConfig } from '@/types/servicePage.types';
import { OFFER_LINKING } from '@/config/offerLinking.config';

import basicIcon from '../../assets/icons/lighting_icon.svg';
import standardIcon from '../../assets/icons/rocket_icon.svg';
import proIcon from '../../assets/icons/crown_icon.svg';
import { SITE_CONFIG } from '../site.config';

export const GMB_CONTENT: ServiceContentConfig = {
	METADATA: {
		title: 'Pozycjonowanie Wizytówki Google | Zwiększ widoczność w Google Maps',
		description:
			'Twoja firma w Google Maps może być wyżej. Oferuję pozycjonowanie wizytówki Google, dodawanie ofert, produkty, opinie i pełną optymalizację profilu.',
	},

	SCHEMA: (meta, faq, products) => [
		{
			'@context': 'https://schema.org',
			'@type': 'WebPage',
			'@id': `${SITE_CONFIG.baseUrl}/${meta.relPath}/#webpage`,
			url: `${SITE_CONFIG.baseUrl}/${meta.relPath}`,
			name: meta.title,
			description: meta.description,
			isPartOf: {
				'@id': `${SITE_CONFIG.baseUrl}/#website`,
			},
			mainEntity: {
				'@id': `${SITE_CONFIG.baseUrl}/${meta.relPath}/#service`,
			},
		},
		//SERVICE
		{
			'@context': 'https://schema.org',
			'@type': 'Service',
			'@id': `${SITE_CONFIG.baseUrl}/${meta.relPath}/#service`,
			serviceType: 'Pozycjonowaine wizytówki Google Moja Firma',
			name: meta.title,
			description: meta.description,
			provider: {
				'@id': `${SITE_CONFIG.baseUrl}/#organization`,
			},
			mainEntityOfPage: {
				'@id': `${SITE_CONFIG.baseUrl}/${meta.relPath}/#webpage`,
			},
			offers: (products ?? []).map((pkg) => ({
				'@id': `${SITE_CONFIG.baseUrl}/${
					meta.relPath
				}/#${pkg.name.toLowerCase()}-offer`,
			})),
		},

		...(products ?? []).map((pkg) => ({
			'@context': 'https://schema.org',
			'@type': 'Product',
			'@id': `${SITE_CONFIG.baseUrl}/${
				meta.relPath
			}/#${pkg.name.toLowerCase()}`,
			name: `Pakiet ${pkg.name} – Wizytówka Google`,
			description: pkg.description,
			image: `${SITE_CONFIG.baseUrl}/logo.jpg`,
			offers: {
				'@type': 'Offer',
				priceCurrency: 'PLN',
				price: pkg.price.toString(),
				availability: 'https://schema.org/InStock',
				url: `${SITE_CONFIG.baseUrl}/${meta.relPath}`,
			},
		})),

		//BREADCRUMB
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
					item: `${SITE_CONFIG.baseUrl}/oferta`,
				},
				{
					'@type': 'ListItem',
					position: 3,
					name: 'Wizytówka Google',
					item: `${SITE_CONFIG.baseUrl}/${meta.relPath}`,
				},
			],
		},
		//FAQ
		faq?.length
			? {
					'@context': 'https://schema.org',
					'@type': 'FAQPage',
					mainEntity: faq.map(({ title: q, content: a }) => ({
						'@type': 'Question',
						name: q,
						acceptedAnswer: {
							'@type': 'Answer',
							text: a,
						},
					})),
			  }
			: null,
	],

	heroSection: {
		heading: 'Pozycjonowanie Wizytówki Google',
		subline: 'Zwiększ swoją widoczność w Google Maps',
		bgImage: '/img/photos/gmb_hero_image.webp',
	},

	contentSection: {
		paragraphs: [
			{
				heading: (
					<>
						Wizytówka Google, która buduje <span>zaufanie</span> do Twojej marki
					</>
				),
				children:
					'Wizytówka Google Moja Firma to jeden z najważniejszych elementów obecności Twojej firmy w internecie. Dla wielu potencjalnych klientów jest to pierwszy kontakt z Twoją marką – zanim wejdą na stronę internetową, widzą Twój profil w Mapach Google i wynikach wyszukiwania. Profesjonalna optymalizacja wizytówki Google sprawia, że Twoja firma wygląda wiarygodnie, nowocześnie i wyróżnia się na tle konkurencji. Uzupełnione dane kontaktowe, godziny otwarcia, zdjęcia oraz atrakcyjne opisy usług zwiększają zaufanie i zachęcają do wyboru właśnie Ciebie. Dobrze wypozycjonowany profil Google Moja Firma nie tylko przyciąga uwagę, ale także generuje realny ruch – więcej telefonów, zapytań o trasę i wizyt w Twojej lokalizacji. To skuteczne narzędzie marketingowe, które buduje wizerunek profesjonalnej marki i wspiera pozyskiwanie klientów lokalnych.',
				image: '/img/gmb_position.webp',
				imgAlt: 'Wysoka pozycja w Google Maps',
			},
			{
				heading: (
					<>
						Dlaczego pozycjonowanie wizytówki Google<span>zwiększa</span> liczbę
						klientów?
					</>
				),
				children:
					'Dobrze wypozycjonowana wizytówka Google Moja Firma to jedno z najskuteczniejszych narzędzi lokalnego marketingu. Dzięki optymalizacji profilu, wykorzystaniu odpowiednich fraz kluczowych oraz regularnym aktualizacjom treści, Twoja firma zyskuje lepszą widoczność w Mapach Google i wynikach wyszukiwania. To sprawia, że klienci szybciej znajdują Twoje usługi i chętniej wybierają właśnie Ciebie zamiast konkurencji. Pozycjonowanie wizytówki Google przekłada się na większą liczbę telefonów, zapytań o trasę, rezerwacji i realnych zamówień. Profesjonalnie prowadzony profil buduje wiarygodność marki, wspiera SEO lokalne i stanowi uzupełnienie strony internetowej, dzięki czemu Twoja obecność online staje się spójna i skuteczna.',
				image: '/img/gmb_device.webp',
				imgAlt: 'Pozycjonowanie wizytówki Google Maps',
			},
		],
	},

	processSection: {
		heading: 'Proces optymalizacji wizytówki Google',
		bgImage: '/img/steps_sketch.svg',
		btnLabel: 'skontaktuj się',
		redirectTo: linkHref('contact'),
		steps: [
			{
				title: 'Audyt profilu',
				text: 'Sprawdzam aktualny stan wizytówki – dane, zdjęcia, opinie, kategorie i słowa kluczowe. Na tej podstawie przygotowuję plan działań.',
			},
			{
				title: 'Publikacje i aktualizacje',
				text: 'Regularnie dodaję posty, zdjęcia i oferty, które zwiększają aktywność profilu i budują zaufanie klientów.',
			},
			{
				title: 'Optymalizacja treści',
				text: 'Uzupełniam i poprawiam wszystkie informacje: opisy firmy, usługi, produkty i kategorie. Dbam, by były atrakcyjne i zgodne z wytycznymi Google.',
			},
			{
				title: 'Monitoring i rozwój',
				text: 'Śledzę widoczność wizytówki, opinie i zapytania klientów. W razie potrzeby wprowadzam zmiany, by profil stale przyciągał nowych odbiorców.',
			},
		],
		children:
			'Twoja wizytówka Google to klucz do pozyskiwania lokalnych klientów. Dzięki sprawdzonemu procesowi optymalizacji wiesz, jakie działania podejmuję i kiedy możesz spodziewać się lepszej widoczności w Mapach Google i wyszukiwarce.',
	},

	pricingSection: {
		heading: (
			<>
				Pozycjonowanie w Mapach Google w <span>elastycznych</span> pakietach
			</>
		),
		text: 'Wizytówka Google Moja Firma to kluczowe narzędzie dla biznesów lokalnych – pozwala zdobywać nowych klientów bezpośrednio z Map Google i wyszukiwarki. Dlatego przygotowałem dwa elastyczne pakiety usług, które dopasujesz do potrzeb swojej firmy. Jeśli nie masz jeszcze wizytówki, pomogę Ci ją założyć i prawidłowo skonfigurować, a następnie zoptymalizować treści pod frazy branżowe, aby przyciągała właściwych odbiorców. Dla firm posiadających już profil proponuję pełną optymalizację i regularne działania SEO, dzięki którym wizytówka będzie stale rosnąć w widoczności, zdobywać opinie i generować realne zapytania od klientów. Niezależnie od wybranego pakietu, zyskujesz sprawdzone działania, które zwiększają Twoją obecność w Google i przewagę nad lokalną konkurencją.',
		sketchImg: '/img/gmb_sketch.webp',
		packages: [
			{
				name: 'START',
				description: 'Zyskaj poprawnie skonfigurowaną wizytówkę',
				icon: basicIcon,
				price: 390,
				features: [
					'Założenie lub aktualizacja wizytówki',
					'Kompletne uzupełnienie profilu',
					'Dodanie logo i zdjęć firmowych',
					'Podstawowa optymalizacja SEO',
					'Powiązanie wizytówki ze stroną www',
					'Przygotowanie do aktywnego działania',
				],
				info: 'Usługa jednorazowa',
			},
			{
				name: 'LOCAL PRO',
				description: 'Stały rozwój i większa widoczność lokalna',
				icon: standardIcon,
				price: 499,
				priceSuffix: '/msc',
				features: [
					'Wszystko z pakietu START',
					'Cotygodniowe aktualizacje profilu',
					'Optymalizacja produktów i usług',
					'Monitoring opinii i odpowiedzi',
					'Optymalizacja treści pod frazy branżowe',
					'Comiesięczne raporty widoczności',
					'Stałe doradztwo SEO',
				],
				dark: true,
				info: 'Min. 3 msc. abonamentu',
			},
		],
	},

	directQuery: {
		heading: (
			<>
				Jak <span>wyróżnić</span> swój profil Google Moja Firma na tle
				konkurencji?
			</>
		),
		children:
			'W wielu branżach to właśnie wizytówka Google Moja Firma decyduje o tym, czy klient wybierze Twoją ofertę. Profesjonalna optymalizacja profilu – unikalne opisy usług, dodanie produktów, aktualne zdjęcia, a także regularne publikowanie postów – sprawia, że Twoja firma staje się bardziej widoczna i atrakcyjna niż konkurencja. Opinie klientów dodatkowo wzmacniają wiarygodność marki, a odpowiednio prowadzone pozycjonowanie wizytówki Google pozwala zająć wysokie miejsca w Mapach Google i lokalnych wynikach wyszukiwania. Dzięki temu zyskujesz nie tylko przewagę wizerunkową, ale także realny wzrost liczby zapytań, telefonów i nowych klientów z Twojego regionu.',
	},

	otherOffer: {
		heading: (
			<>
				Sprawdź co jeszcze mogę dla <span>Ciebie</span> zrobić
			</>
		),
		text: 'Wizytówka Google przyciąga lokalnych klientów, ale jej potencjał rośnie, gdy łączysz ją ze skutecznym pozycjonowaniem SEO oraz profesjonalną stroną internetową. Razem tworzą pełny ekosystem marketingu online, który zwiększa widoczność Twojej firmy i wspiera sprzedaż.',
		offerLinks: OFFER_LINKING,
	},

	faqSection: {
		items: [
			{
				id: '1',
				title: 'Na czym polega pozycjonowanie wizytówki Google?',
				content:
					'Pozycjonowanie wizytówki Google to działania, które poprawiają widoczność Twojej firmy w mapach i wynikach lokalnych. Obejmuje optymalizację profilu, dodawanie zdjęć, ofert, produktów oraz regularne aktualizacje treści.',
			},
			{
				id: '2',
				title: 'Czym różni się pozycjonowanie lokalne od tradycyjnego SEO?',
				content:
					'Pozycjonowanie lokalne skupia się na tym, aby firma była widoczna dla klientów w najbliższej okolicy – głównie w mapach Google i Google Moja Firma. Tradycyjne SEO obejmuje szerszy zakres działań i pozycjonowanie na poziomie ogólnopolskim lub globalnym.',
			},
			{
				id: '3',
				title: 'Jak poprawić pozycję wizytówki Google?',
				content:
					'Na pozycję wizytówki w Google wpływają m.in. opinie klientów, regularne dodawanie zdjęć, opis usług, a także optymalizacja wizytówki pod kątem fraz kluczowych. Ważne jest też powiązanie profilu z dobrze wypozycjonowaną stroną internetową.',
			},
			{
				id: '4',
				title: 'Na czym polega zarządzanie wizytówką Google?',
				content:
					'Zarządzanie wizytówką Google to systematyczna aktualizacja danych, dodawanie postów, produktów, usług oraz odpowiadanie na opinie klientów. Dzięki temu wizytówka jest aktywna i buduje większe zaufanie użytkowników.',
			},
			{
				id: '5',
				title: 'Dlaczego optymalizacja wizytówki Google jest ważna?',
				content:
					'Optymalizacja wizytówki Google sprawia, że profil jest bardziej atrakcyjny dla klientów i lepiej widoczny w wynikach lokalnych. To prosty sposób na zwiększenie liczby zapytań i wizyt w Twojej firmie.',
			},
			{
				id: '6',
				title: 'Czy wizytówka Google może zastąpić stronę internetową?',
				content:
					'Wizytówka Google jest świetnym narzędziem do pozyskiwania klientów lokalnych, ale nie zastąpi w pełni strony internetowej. Najlepsze efekty daje połączenie pozycjonowania wizytówki Google z profesjonalną stroną WWW i SEO.',
			},
		],
	},

	reviewSection: {
		heading: 'Dołącz do zadowolonych klientów',
		children:
			'Opinie przedsiębiorców potwierdzają, że odpowiednio zoptymalizowana wizytówka Google Moja Firma zwiększa lokalną widoczność w mapach Google i pomaga dotrzeć do klientów z Twojej okolicy. Dzięki działaniom SEO i stałej obsłudze profilu wizytówki Google, firmy notują więcej zapytań i wizyt. Zadowoleni klienci to najlepszy dowód, że pozycjonowanie lokalne wizytówki Google ma sens.',
	},

	footerCTA: {
		heading: 'Co zyskasz dzięki wizytówce Google?',
		text: 'Twoja wizytówka Google to pierwsze miejsce, gdzie klienci szukają informacji o firmie. Dzięki optymalizacji i regularnym aktualizacjom zyskujesz większą widoczność w Mapach Google, więcej zapytań i przewagę nad lokalną konkurencją.',
		children: [
			{
				title: 'Większa widoczność',
				description:
					'Twoja firma częściej pojawia się w Mapach Google i wynikach lokalnych.',
			},
			{
				title: 'Nowi klienci',
				description:
					'Przyciągasz osoby faktycznie szukające usług w Twojej branży.',
			},
			{
				title: 'Silniejsza marka',
				description:
					'Profesjonalny profil budzi zaufanie i wyróżnia Cię na tle konkurencji.',
			},
			{
				title: 'Stałe wsparcie',
				description:
					'Pomagam w aktualizacjach i odpowiadaniu na opinie klientów.',
			},
		],
	},
};
