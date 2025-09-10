import { linkHref } from '@/utils/linkHref.helper';
import { ServiceContentConfig } from '@/types/servicePage.types';
import { OFFER_LINKING } from '@/config/offerLinking.config';

import basicIcon from '../../assets/icons/lighting_icon.svg';
import standardIcon from '../../assets/icons/rocket_icon.svg';
import proIcon from '../../assets/icons/crown_icon.svg';

export const GMB_CONTENT: ServiceContentConfig = {
	heroSection: {
		heading: 'Zajmę się Twoją wizytówką',
		subline: 'Wyruchaj swoją lokalną konkurencję!',
		bgImage: '/img/photos/websites_hero_image.webp',
	},

	processSection: {
		heading: 'Jak wygląda proces tworzenia Twojej strony?',
		bgImage: '/img/steps_sketch.svg',
		btnLabel: 'skontaktuj się',
		redirectTo: linkHref('contact'),
		steps: [
			{
				title: 'Analiza i planowanie',
				text: 'Wspólnie omawiamy Twoje potrzeby, branżę i cele. Przygotowuję plan projektu strony internetowej oraz propozycję struktury.',
			},
			{
				title: 'Projekt graficzny',
				text: 'Tworzę indywidualny projekt strony internetowej, dopasowany do Twojej marki i wygodny dla użytkowników.',
			},
			{
				title: 'Kodowanie i budowa',
				text: 'Wdrażam projekt w nowoczesnych technologiach. Każda strona internetowa jest responsywna i szybka.',
			},
			{
				title: 'Optymalizacja i publikacja',
				text: 'Wprowadzam poprawki, testuję i uruchamiam stronę. Gotową witrynę oddaję w Twoje ręce.',
			},
		],
		children:
			'Budowanie stron internetowych opieram na sprawdzonym procesie. Dzięki jasnym krokom wiesz, na jakim etapie jest Twój projekt WWW i co jeszcze przed nami.',
	},

	pricingSection: {
		heading: (
			<>
				Tworzenie <span>stron internetowych</span> w trzech wariantach
			</>
		),
		text: 'Każdy biznes ma inne potrzeby i możliwości, dlatego przygotowałem trzy elastyczne pakiety. Dzięki nim łatwo wybierzesz rozwiązanie dopasowane do swojego budżetu – od prostej strony wizytówki po rozbudowany serwis z pełną optymalizacją SEO. Jasna struktura oferty pozwala Ci szybko zdecydować, które rozwiązanie najlepiej odpowiada Twoim celom. Wszystkie pakiety opierają się na indywidualnym podejściu do projektowania stron internetowych, dzięki czemu zyskujesz nowoczesną, funkcjonalną i widoczną w Google stronę.',
		sketchImg: '/img/www_sketch.svg',
		packages: [
			{
				name: 'BASIC',
				description:
					'Zyskaj szybki start online dzięki prostej stronie internetowej.',
				icon: basicIcon,
				price: 1599,
				features: [
					'Do 3 podstron',
					'Indywidualny projekt graficzny',
					'Dostosowana do różnych rozdzielczości',
					'Formularz kontaktowy',
					'Implementacja mapy Google',
					'Integracja z social media',
					'Certyfikat SSL',
					'Pomoc przy zakupie domeny',
					'Integracja z Google Search Console',
				],
			},
			{
				name: 'STANDARD',
				description: 'Rozwiń biznes z rozbudowaną stroną WWW.',
				icon: standardIcon,
				pricePrefix: 'od',
				price: 2399,
				features: [
					'Wszystko z pakietu BASIC',
					'Do 7 podstron',
					'Rozbudowane sekcje ofertowe',
					'System CMS',
					'Linkowanie wewnętrzne',
					'Dane strukturalne schema.org',
					'Integracja z Google Analytics',
				],
				dark: true,
			},
			{
				name: 'PRO',
				description: 'Buduj markę online z pełną widocznością w Google.',
				icon: proIcon,
				pricePrefix: 'od',
				price: 3999,
				features: [
					'Wszystko z pakietu STANDARD',
					'Do 12 podstron',
					'Pełna optymalizacja SEO',
					'Analiza 20 fraz kluczowych',
					'Przygotowanie treści pod wybrane frazy',
					'Publikacja w 10 katalogach firmowych',
					'Sekcja blogowa',
					'Dodatkowe rozszerzenia i integracje',
				],
			},
		],
	},

	directQuery: {
		heading: (
			<>
			Lepiej kurwa zobacz czy footer się zgadza. 
			</>
		),
		children:
			'Wizerunek w sieci ma ogromne znaczenie – to często pierwszy kontakt klienta z Twoją firmą. Profesjonalnie zaprojektowana i zbudowana strona WWW buduje wiarygodność, wzmacnia zaufanie i pokazuje, że  detal swojego biznesu. Estetyczny projekt internetowy, spójny z identyfikacją wizualną marki, sprawia, że Twoja firma jest postrzegana jako solidna i nowoczesna. To nie tylko narzędzie sprzedaży, ale przede wszystkim element, który wyróżnia Cię na tle konkurencji i sprawia, że klienci chętniej wybierają właśnie Ciebie.',
	},

	otherOffer: {
		heading: (
			<>
				Sprawdź co jeszcze mogę dla <span>Ciebie</span> zrobić
			</>
		),
		text: 'Wizytówka Google to doskonałe narzędzie do pozyskiwania lokalnych klientów. Gdy dodasz do niej profesjonalną stronę internetową i skuteczne SEO, tworzysz spójny system widoczności w sieci. Zapoznaj się z pełną ofertą i wybierz rozwiązania, które najlepiej wspierają Twój biznes.',
		offerLinks: OFFER_LINKING,
	},

	faqSection: {
		items: [
			{
				id: '1',
				title: 'To pytanie nie różni sie od innyc. Chcesz mnie wykrzystać.',
				content:
					'Ceny tworzenia stron internetowych zaczynają się od 1599 zł netto. Koszt zależy od liczby podstron, wdrożenia CMS i poziomu rozbudowania projektu. Każda strona jest tworzona indywidualnie – bez użycia gotowych szablonów.',
			},
			{
				id: '2',
				title: 'Czy tworzysz strony internetowe od podstaw, bez szablonów?',
				content:
					'Tak. Każda strona powstaje na podstawie indywidualnego projektu graficznego, zgodnego z identyfikacją wizualną Twojej marki. Nie korzystam z gotowych motywów – dzięki temu Twoja strona jest unikalna i bardziej profesjonalna.',
			},
			{
				id: '3',
				title:
					'Czy moja strona będzie działać poprawnie na telefonach i tabletach?',
				content:
					'Tak. Projektuję tylko strony responsywne – automatycznie dostosowujące się do różnych ekranów. To dziś absolutny standard, który wpływa na doświadczenie użytkownika oraz pozycjonowanie.',
			},
			{
				id: '4',
				title: 'Czy będę mógł samodzielnie edytować treści na stronie?',
				content:
					'Tak. W pakiecie STANDARD i PRO wdrażam prosty system CMS, który umożliwia edycję tekstów, zdjęć i podstron – bez znajomości kodu.',
			},
			{
				id: '5',
				title: 'Ile trwa stworzenie strony internetowej?',
				content:
					'Realizacja strony internetowej zajmuje przeciętnie 10–14 dni roboczych. Czas ten obejmuje projekt graficzny, zakodowanie strony, testy oraz wdrożenie. W przypadku bardziej złożonych projektów, czas może być dłuższy, ale ustalam to zawsze indywidualnie na początku współpracy.',
			},
			{
				id: '6',
				title: 'Czy mogę zlecić stronę z funkcją bloga lub portfolio?',
				content:
					'Tak. Tworzę również strony z dodatkowymi sekcjami: blog, portfolio, FAQ, referencje – wszystko zależy od potrzeb Twojej firmy. Projekt i funkcjonalność są dostosowywane indywidualnie.',
			},
		],
	},

	reviewSection: {
		heading: 'Dołącz do zadowolonych klientów',
		children:
			'Opinie klientów najlepiej pokazują skuteczność moich działań przy projektowaniu stron internetowych i tworzeniu nowoczesnych stron WWW dla firm. Każda realizacja to indywidualny projekt, optymalizowany pod SEO, by Twoja strona nie tylko wyglądała, ale też była widoczna w Google. Zaufanie klientów potwierdza, że profesjonalne strony internetowe mogą realnie wspierać rozwój biznesu. klientów.',
	},

	footerCTA: {
		heading: 'Wypozycjonować Twój marny biznes?',
		text: 'Tworzę strony, które nie tylko dobrze wyglądają, ale realnie wspierają Twój biznes. Jasne zasady, szybka realizacja i pełne skupienie na Twoich celach.',
		children: [
			{
				title: 'Zrobię z ciebie prze chuja',
				description:
					'Każdy projekt tworzę od podstaw, tak aby idealnie pasował do Twojej branży i klientów.',
			},
			{
				title: 'Wyniki przyjdą same',
				description:
					'Projektuję z myślą o efektach – większa widoczność, lepszy odbiór marki i więcej zapytań od klientów.',
			},
			{
				title: 'Nie martwisz się niczym',
				description:
					'Od początku wiesz, co robimy – konkretny plan działań i zero zbędnego chaosu.',
			},
			{
				title: 'Leżysz chujem do góry',
				description:
					'Po wdrożeniu pomagam, doradzam i dbam, aby strona działała bez zarzutu.',
			},
		],
	},
};
