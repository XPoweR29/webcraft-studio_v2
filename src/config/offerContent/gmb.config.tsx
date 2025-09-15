import { linkHref } from '@/utils/linkHref.helper';
import { ServiceContentConfig } from '@/types/servicePage.types';
import { OFFER_LINKING } from '@/config/offerLinking.config';

import basicIcon from '../../assets/icons/lighting_icon.svg';
import standardIcon from '../../assets/icons/rocket_icon.svg';
import proIcon from '../../assets/icons/crown_icon.svg';
import { SITE_CONFIG } from '../site.config';

export const GMB_CONTENT: ServiceContentConfig = {
	METADATA: {
		title: 'Optymalizacja SEO i pozycjonowanie stron internetowych w Google',
		description:
			'Skuteczne pozycjonowanie SEO – popraw widoczność swojej strony w Google, zwiększ ruch i zdobądź nowych klientów. Sprawdź ofertę WebCraftSTUDIO.',
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
			serviceType: 'Tworzenie stron internetowych',
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
			name: `Pakiet ${pkg.name} – strona internetowa`,
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
					name: 'Tworzenie stron WWW',
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
		heading: 'Optymalizacja SEO dla Twojej strony',
		subline: 'Skuteczne pozycjonowanie stron internetowych w Google',
		bgImage: '/img/photos/seo_hero_image.jpg',
	},

	contentSection: {
		paragraphs: [
			{
				heading: (
					<>
						Zbuduj <span>silną markę</span>, którą klienci znajdą w Google
					</>
				),
				children:
					'Dobrze zoptymalizowana i widoczna w Google strona internetowa buduje prestiż Twojej firmy i sprawia, że klienci od razu traktują Cię jako wiarygodnego partnera. Pozycjonowanie stron internetowych to inwestycja w wizerunek – im wyżej pojawiasz się w wynikach wyszukiwania, tym większe zaufanie zdobywasz w oczach potencjalnych klientów. Profesjonalne strony internetowe wsparte SEO stają się wizytówką marki i pracują na Twoją rozpoznawalność 24/7.',
				image: '/img/searching.webp',
				imgAlt: 'Pozycjonowanie strony w Google',
			},
			{
				heading: (
					<>
						Dlaczego <span>optymalizacja SEO</span> to najlepsza inwestycja?
					</>
				),
				children:
					'Pozycjonowanie stron WWW to nie tylko widoczność, ale przede wszystkim konkretne efekty biznesowe – więcej wejść, więcej zapytań i więcej sprzedaży. Odpowiednia optymalizacja SEO sprawia, że Twoja strona działa szybciej, jest lepiej dopasowana do potrzeb użytkowników i generuje wyższy zwrot z inwestycji. Funkcjonalna strona WWW w połączeniu z systematycznym SEO daje Ci przewagę nad konkurencją i zamienia odwiedzających w realnych klientów.',
				image: '/img/devices_dashboard.webp',
				imgAlt: 'Opotymalizacja stron internetowych',
			},
		],
	},

	processSection: {
		heading: 'Jak wygląda proces pozycjonowania strony?',
		bgImage: '/img/steps_sketch.svg',
		btnLabel: 'skontaktuj się',
		redirectTo: linkHref('contact'),
		steps: [
			{
				title: 'Audyt i analiza',
				text: 'Sprawdzam kondycję Twojej strony, analizuję konkurencję i słowa kluczowe. Na tej podstawie tworzę plan działań SEO dopasowany do Twojej branży.',
			},
			{
				title: 'Optymalizacja techniczna',
				text: 'Wdrażam poprawki w strukturze strony, meta tagach, nagłówkach i prędkości ładowania. Dzięki temu Twoja witryna jest lepiej oceniana przez Google.',
			},
			{
				title: 'Treści i linkowanie',
				text: 'Przygotowuję wartościowe treści oparte na słowach kluczowych i dbam o linkowanie wewnętrzne oraz zewnętrzne. To fundament trwałej widoczności w wyszukiwarce.',
			},
			{
				title: 'Monitoring i rozwój',
				text: 'Regularnie analizuję wyniki i dopasowuję strategię SEO, aby utrzymać i zwiększać pozycje Twojej strony. To proces ciągły, który stale pracuje na Twoją przewagę.',
			},
		],
		children:
			'Pozycjonowanie stron internetowych opieram na sprawdzonej strategii SEO. Dzięki jasno określonym etapom wiesz, jakie działania podejmuję i kiedy możesz spodziewać się pierwszych efektów.',
	},

	pricingSection: {
		heading: (
			<>
				Wybierz pakiet SEO <span>opasowany</span> do Twoich potrzeb
			</>
		),
		text: 'Każda firma potrzebuje innej strategii widoczności w sieci, dlatego przygotowałem trzy elastyczne pakiety SEO. Dzięki nim możesz wybrać rozwiązanie dopasowane do swojego budżetu i etapu rozwoju biznesu – od podstawowej optymalizacji SEO po pełne pozycjonowanie stron internetowych w Google z linkowaniem i tworzeniem treści. Jasna struktura oferty pozwala szybko zdecydować, który pakiet najlepiej wspiera cele Twojej firmy: zwiększenie ruchu na stronie, pozyskiwanie klientów lokalnych czy budowanie przewagi nad konkurencją. Każdy wariant opiera się na sprawdzonych działaniach SEO, które realnie podnoszą widoczność Twojej strony w Google i przyspieszają rozwój biznesu.',
		sketchImg: '/img/seo_sketch.webp',
		packages: [
			{
				name: 'START',
				description:
					'Szybka poprawa podstaw SEO i gotowość do dalszych działań.',
				icon: basicIcon,
				pricePrefix: 'od',
				price: 999,
				features: [
					'Audyt techniczny strony',
					'Core Web Vitals + optymalizacja',
					'Integracja z Google Search Console',
					'Analiza 5 fraz kluczowych',
					'Analiza struktury i treści podstron',
					'Raport z rekomendacjami',
				],
				info: 'Usługa jednorazowa',
			},
			{
				name: 'SEO PLUS',
				description: 'Zyskaj stały ruch z Google i realnych klientów online',
				icon: standardIcon,
				price: 955,
				priceSuffix: '/msc',
				features: [
					'Wszystko z pakietu START',
					'+1 podstrona pod frazę w Google',
					'Podstawowy Link Building',
					'Obecność w katalogach lokalnych',
					'Miesięczny raport pozycji i ruchu',
					'2 wpisy blogowe miesięcznie',
					'Doradztwo i wsparcie SEO',
				],
				dark: true,
				info: 'Min. 3 msc. abonamentu',
			},
			{
				name: 'SEO PREMIUM',
				description:
					'Pełna strategia SEO i content, który pracuje na Twoją markę.',
				icon: proIcon,
				pricePrefix: 'od',
				price: 1749,
				priceSuffix: '/msc',
				features: [
					'Wszystko z pakietu SEO PLUS',
					'Rozszerzenie struktury podstron SEO',
					'Rozbudowany Link Building',
					'Kwartalne analizy konkurencji',
					'Kwartalna strategia contentowa',
					'Cotygodniowa optymalizacja treści',
					'Szkolenie SEO dla klienta',
					'Priorytetowa obsługa SEO',
				],
				info: 'Min. 3 msc. abonamentu',
			},
		],
	},

	directQuery: {
		heading: (
			<>
				Czy Twoja strona internetowa naprawdę <span>wyróżnia</span> Twoją firmę
				w sieci?
			</>
		),
		children: (
			<>
				<p>
					Pozycjonowanie SEO to klucz do zbudowania trwałej przewagi na rynku –
					Twoja strona internetowa nie tylko pojawia się w Google, ale
					faktycznie przyciąga uwagę klientów. Dzięki indywidualnej strategii
					SEO Twoja firma zyskuje unikalną pozycję w sieci, która odróżnia Cię
					od innych. To właśnie dzięki skutecznemu pozycjonowaniu strona
					internetowa Twojej firmy staje się narzędziem, które pomaga wyróżnić
					się w branży i zdobywać klientów szybciej niż konkurencja.
				</p>
				<p>
					Twoi konkurenci już inwestują w SEO – pytanie, czy Ty chcesz ich
					dogonić, czy wyprzedzić. Dzięki indywidualnemu podejściu, analizie
					branży i lokalnym frazom, pomagam tworzyć strategię, która wyróżnia
					Twoją firmę w sieci. Nie działam szablonowo – SEO to nie pakiet, tylko
					proces, który buduje przewagę krok po kroku. Wyróżnij się w Google –
					zanim zrobią to inni.
				</p>
			</>
		),
	},

	otherOffer: {
		heading: (
			<>
				Sprawdź co jeszcze mogę dla <span>Ciebie</span> zrobić
			</>
		),
		text: 'Skuteczne SEO najlepiej działa w połączeniu z nowoczesną stroną internetową oraz zoptymalizowaną wizytówką Google Moja Firma. Dzięki temu budujesz spójny system widoczności online – od wyników wyszukiwania, przez mapy Google, aż po profesjonalną prezentację Twojej firmy w sieci.',
		offerLinks: OFFER_LINKING,
	},

	faqSection: {
		items: [
			{
				id: '1',
				title: 'Na czym polega pozycjonowanie strony w Google?',
				content:
					'Pozycjonowanie strony w Google to proces zwiększania jej widoczności w wynikach wyszukiwania. Obejmuje optymalizację techniczną, tworzenie wartościowych treści oraz link building. Dzięki temu Twoja strona internetowa może uzyskiwać wyższe pozycje i przyciągać nowych klientów.',
			},
			{
				id: '2',
				title: 'Ile kosztuje pozycjonowanie SEO?',
				content:
					'Koszt pozycjonowania strony internetowej zależy od konkurencyjności branży, liczby fraz oraz zakresu działań. Ceny zaczynają się już od kilkuset złotych miesięcznie, ale dla skutecznych efektów rekomendowane są rozbudowane pakiety SEO. Każda wycena jest przygotowywana indywidualnie.',
			},
			{
				id: '3',
				title: 'Jak długo trwa pozycjonowanie stron internetowych?',
				content:
					'Pierwsze efekty pozycjonowania stron w Google można zauważyć po kilku tygodniach, jednak na stabilne wyniki potrzeba zwykle od 3 do 6 miesięcy. SEO to proces długofalowy – regularna optymalizacja i rozbudowa treści zapewniają trwałe efekty.',
			},
			{
				id: '4',
				title: 'Czym różni się optymalizacja SEO od pozycjonowania?',
				content:
					'Optymalizacja SEO to działania wewnątrz strony – poprawa kodu, szybkości ładowania czy struktury nagłówków. Pozycjonowanie stron internetowych to szerszy proces, który obejmuje również link building, content marketing oraz monitoring pozycji w Google.',
			},
			{
				id: '5',
				title: 'Czy pozycjonowanie organiczne jest lepsze od płatnych reklam?',
				content:
					'Pozycjonowanie organiczne pozwala na długotrwałą obecność strony w wynikach wyszukiwania, nawet bez dodatkowych opłat za kliknięcia. Reklamy Google Ads dają szybkie efekty, ale znikają po zakończeniu kampanii. Najlepsze rezultaty daje połączenie SEO i kampanii płatnych.',
			},
			{
				id: '6',
				title: 'Jak sprawdzić pozycję mojej strony w Google?',
				content:
					'Pozycję strony w Google możesz monitorować ręcznie, wpisując frazy w wyszukiwarkę, ale bardziej precyzyjnie zrobisz to za pomocą profesjonalnych narzędzi SEO. W ramach współpracy regularnie przygotowuję raporty pozycji i ruchu, abyś wiedział, jak rośnie widoczność Twojej strony.',
			},
		],
	},

	reviewSection: {
		heading: 'Dołącz do zadowolonych klientów',
		children:
			'Opinie klientów to dowód na to, że skuteczne pozycjonowanie stron internetowych i rzetelna optymalizacja SEO przynoszą wymierne efekty. Dzięki regularnym działaniom SEO i widoczności w Google firmy zyskują nowych klientów i zwiększają ruch na stronie. Zaufanie klientów pokazuje, że dobrze zaplanowane SEO naprawdę działa.',
	},

	footerCTA: {
		heading: 'Co zyskasz dzięki pozycjonowaniu SEO',
		text: 'Skuteczne SEO to nie tylko techniczne poprawki, ale przede wszystkim większa widoczność Twojej firmy w Google, stabilny napływ klientów i realne wyniki biznesowe. Pracuję przejrzyście i stawiam na działania, które dają wymierne efekty.',
		children: [
			{
				title: 'Więcej klientów z Google',
				description: 'Twoja strona pojawia się tam, gdzie szukają Cię klienci.',
			},
			{
				title: 'Stabilne efekty',
				description:
					'SEO działa długofalowo – inwestujesz raz, a widoczność rośnie miesiącami.',
			},
			{
				title: 'Transparentne działania',
				description: 'Jasny plan krok po kroku, raporty i konkretne wyniki..',
			},
			{
				title: 'Stałe wsparcie SEO',
				description:
					'Nie zostawiam Cię samego – doradzam i dbam o stały rozwój strony.',
			},
		],
	},
};
