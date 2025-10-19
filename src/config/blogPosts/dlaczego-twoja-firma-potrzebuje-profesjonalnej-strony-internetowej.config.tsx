import { PostPageConfig } from '@/types/blog.type';
import { linkHref } from '@/utils/linkHref.helper';
import { SITE_CONFIG } from '../site.config';

const SLUG =
	'dlaczego-twoja-firma-potrzebuje-profesjonalnej-strony-internetowej';
const TITLE =
	'Dlaczego Twoja firma potrzebuje profesjonalnej strony internetowej w 2025 roku';
const DESCRIPTION =
	'Dowiedz się, dlaczego profesjonalna strona internetowa to dziś podstawa każdego biznesu. Poznaj korzyści z tworzenia stron dla firm i zobacz, jak WebCraftSTUDIO pomaga w budowie wizerunku online.';

export const DLACZEGO_TWOJA_FIRMA_POTRZEBUJE_PROFESJONALNEJ_STRONY: PostPageConfig = {
	metadata: {
		title: TITLE,
		description: DESCRIPTION,
		relPath: `/blog/${SLUG}`,
		slug: SLUG,
	},

	SCHEMA: ({ post }) => [
		{
			'@context': 'https://schema.org',
			'@type': 'WebPage',
			'@id': `${SITE_CONFIG.baseUrl}${post?.metadata.relPath}/#webpage`,
			url: `${SITE_CONFIG.baseUrl}${post?.metadata.relPath}`,
			name: post?.metadata.title,
			description: post?.metadata.description,
			inLanguage: 'pl-PL',
			isPartOf: {
				'@type': 'WebSite',
				'@id': `${SITE_CONFIG.baseUrl}/#website`,
			},
			mainEntity: {
				'@type': 'BlogPosting',
				'@id': `${SITE_CONFIG.baseUrl}${post?.metadata.relPath}/#blogpost`,
			},
		},
		{
			'@context': 'https://schema.org',
			'@type': 'BlogPosting',
			'@id': `${SITE_CONFIG.baseUrl}${post?.metadata.relPath}/#blogpost`,
			url: `${SITE_CONFIG.baseUrl}${post?.metadata.relPath}`,
			headline: post?.metadata.title,
			name: post?.metadata.title,
			description: post?.metadata.description,
			datePublished: new Date(post!.date).toISOString(),
			dateModified: new Date(post!.date).toISOString(),
			articleSection: post?.category,
			inLanguage: 'pl-PL',
			isPartOf: {
				'@type': 'Blog',
				'@id': `${SITE_CONFIG.baseUrl}${linkHref('blog')}/#blog`,
			},
			publisher: {
				'@type': 'Organization',
				'@id': `${SITE_CONFIG.baseUrl}/#organization`,
			},
			author: {
				'@type': 'Person',
				name: 'Paweł',
				url: `${SITE_CONFIG.baseUrl}${linkHref('about')}`,
			},
			mainEntityOfPage: {
				'@type': 'WebPage',
				'@id': `${SITE_CONFIG.baseUrl}${post?.metadata.relPath}/#webpage`,
			},
			image: {
				'@type': 'ImageObject',
				url: `${SITE_CONFIG.baseUrl}${post?.mainImg}`,
				width: 1200,
				height: 630,
				caption: post?.mainImgAlt ?? post?.metadata.title,
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
					name: 'Blog',
					item: `${SITE_CONFIG.baseUrl}${linkHref('blog')}`,
				},
				{
					'@type': 'ListItem',
					position: 3,
					name: post?.metadata.title,
					item: `${SITE_CONFIG.baseUrl}${post?.metadata.relPath}`,
				},
			],
		},
	],

	category: 'WWW',
	title: TITLE,
	description: DESCRIPTION,
	date: '2025-10-17',
	mainImg:
		'/img/blog/dlaczego-twoja-firma-potrzebuje-profesjonalnej-strony-internetowej/strona-internetowa-dla-firm.jpg',
	mainImgAlt: 'Profesjonalna strona internetowa dla Twojej firmy',

	content: {
		introImg:
			'/img/blog/dlaczego-twoja-firma-potrzebuje-profesjonalnej-strony-internetowej/strona-internetowa-dla-firm.jpg',
		introImgAlt: 'Strona internetowa widoczna w Google',
		intro:
			'Jeszcze kilka lat temu wielu przedsiębiorców sądziło, że profil na Facebooku wystarczy, by być widocznym w internecie. Dziś to już za mało. Klienci szukają usług w Google, porównują oferty online i podejmują decyzję o współpracy często w ciągu kilku sekund. Dlatego w 2025 roku strona internetowa dla firmy nie jest już dodatkiem – to absolutny fundament obecności w sieci. Profesjonalna witryna to coś znacznie więcej niż ładna wizytówka. To narzędzie, które buduje wiarygodność, zdobywa klientów i sprzedaje Twoje usługi nawet wtedy, gdy śpisz. W tym artykule pokażę Ci, dlaczego tworzenie stron dla firm to jedna z najlepszych inwestycji, jakie możesz zrobić w rozwój swojego biznesu.',
		body: [
			{
				type: 'content',
				heading: 'Strona internetowa to centrum Twojego biznesu',
				paragraphs: (
					<>
						<p>
							Każda firma ma swoją siedzibę, numer telefonu i adres e-mail. W
							internecie tym miejscem jest właśnie Twoja strona internetowa. To
							ona gromadzi całą komunikację – od oferty i cennika po formularz
							kontaktowy czy mapę dojazdu.
						</p>

						<p>
							Kiedy potencjalny klient wpisuje w wyszukiwarkę frazę „usługi
							budowlane Kęty” lub „fotograf Bielsko-Biała”, w ułamku sekundy
							podejmuje decyzję, komu zaufa. Jeśli Twoja witryna wygląda
							nieprofesjonalnie lub – co gorsza – nie istnieje, od razu
							przegrywasz ten wyścig.
						</p>

						<p>
							Dobrze zaprojektowana firmowa strona internetowa działa jak
							cyfrowe biuro, które nigdy się nie zamyka. To miejsce, które
							pracuje na Twój wizerunek przez całą dobę, siedem dni w tygodniu.
							W przeciwieństwie do mediów społecznościowych masz nad nią pełną
							kontrolę – to Twoja przestrzeń, Twój wizerunek i Twoje zasady.
						</p>
					</>
				),
			},

			{
				type: 'content',
				heading: 'Profesjonalna strona buduje zaufanie',
				paragraphs: (
					<>
						<p>
							Pierwsze wrażenie w sieci ma ogromne znaczenie. Klient w kilka
							sekund ocenia, czy Twoja firma wydaje się wiarygodna. Jeśli strona
							ładuje się długo, wygląda chaotycznie lub nie jest dostosowana do
							telefonu, to najprawdopodobniej ją opuści. Profesjonalna strona
							internetowa dla biznesu mówi wprost: „Jesteśmy solidni, wiemy, co
							robimy i potrafimy zadbać o szczegóły”. A to dokładnie to, czego
							oczekują Twoi klienci.
						</p>

						<p>
							Ludzie wolą współpracować z firmami, które wyglądają wiarygodnie.
							Nowoczesna strona internetowa dla biznesu sprawia, że Twój klient
							od razu widzi, że działasz poważnie. Dobre zdjęcia, dopracowane
							treści, klarowna struktura – to wszystko buduje zaufanie, które
							później przekłada się na realne decyzje zakupowe.
						</p>

						<p>
							Strona wykonana przez specjalistę to także gwarancja, że wszystko
							działa, jak należy – od kontaktu po SEO. W WebCraftSTUDIO tworzę
							strony internetowe na zamówienie, które nie tylko dobrze
							wyglądają, ale przede wszystkim wzbudzają zaufanie. Każdy projekt
							powstaje od zera – indywidualnie, z myślą o konkretnej branży i
							celach klienta.
						</p>
					</>
				),
			},

			{
				type: 'cta',
				textLines: [
					'Masz pomysł na stronę internetową?',
					'Pomogę Ci go zrealizować',
				],
				buttonLabel: 'Poznaj ofertę',
				redirectTo: linkHref('offer'),
			},

			{
				type: 'content',
				heading: 'Strona internetowa to inwestycja, nie koszt',
				paragraphs: (
					<>
						<p>
							Wielu przedsiębiorców traktuje stronę jak wydatek, który „trzeba
							po prostu mieć”. Tymczasem to inwestycja, która się zwraca –
							często bardzo szybko. Strona przyciąga nowych klientów, skraca
							czas obsługi zapytań i zwiększa liczbę zleceń. Można powiedzieć,
							że jest jak najlepszy pracownik: nie bierze urlopu, działa 24
							godziny na dobę i zawsze odpowiada na pytania klientów. Dobrze
							zaprojektowana strona internetowa to nie tylko kwestia estetyki —
							to przede wszystkim narzędzie, które powinno realizować konkretne
							cele biznesowe. Zanim rozpoczniesz projekt, warto poświęcić chwilę
							na przemyślenie kilku kluczowych kwestii.
						</p>

						<p>
							Każda firmowa strona internetowa powinna być zaprojektowana z
							myślą o konkretnym celu – czy to sprzedaż, rezerwacje, czy
							pozyskiwanie kontaktów. Jeśli jest dopracowana technicznie i
							strategicznie, potrafi działać jak niewidoczny handlowiec, który
							codziennie wykonuje za Ciebie dziesiątki rozmów.
						</p>
					</>
				),
				image: {
					alt: 'Strona internetowa jako inwestycja dla Twojej firmy',
					src: '/img/photos/offer_hero_image.jpg',
				},
			},
			{
				type: 'content',
				heading:
					'Strony internetowe na zamówienie – pełna kontrola i przewaga nad konkurencją',
				paragraphs: (
					<>
						<p>
							Gotowe szablony i kreatory wydają się szybkim rozwiązaniem, ale
							mają swoje ograniczenia. Kiedy korzystasz z takich narzędzi,
							jesteś skazany na kompromisy – brak elastyczności, ograniczone
							opcje SEO i powtarzalny wygląd. W efekcie Twoja witryna wygląda
							jak setki innych.
						</p>

						<p>
							Strony internetowe na zamówienie pozwalają stworzyć coś zupełnie
							innego – stronę dopasowaną do potrzeb firmy, charakteru marki i
							oczekiwań odbiorców. Tylko indywidualny projekt daje Ci pełną
							kontrolę nad tym, jak Twoja marka jest postrzegana w sieci. Dzięki
							temu możesz rozwijać stronę w przyszłości, dodawać nowe funkcje,
							prowadzić bloga, integrować systemy czy kampanie marketingowe –
							bez ograniczeń, które narzuca kreator.
						</p>
					</>
				),
			},
			{
				type: 'content',
				heading: 'Tworzenie stron dla firm to proces, nie przypadek',
				paragraphs: (
					<>
						<p>
							Dobra strona nie powstaje z dnia na dzień. To efekt przemyślanego
							procesu, w którym liczy się każdy etap – od analizy potrzeb po
							finalne wdrożenie.
						</p>

						<ul>
							<p>
								W WebCraftSTUDIO pracuję według jasnego, powtarzalnego schematu,
								który daje klientom spokój i pewność efektu:
							</p>

							<li>
								<strong>rozmowa i analiza celów biznesowych</strong>
							</li>
							<li>
								<strong>
									projekt graficzny w Figmie, dopasowany do branży
								</strong>
							</li>
							<li>
								<strong>
									kodowanie w Next.js / React, zapewniające szybkość i
									bezpieczeństwo
								</strong>
							</li>
							<li>
								<strong>
									optymalizacja SEO i poprawna struktura nagłówków
								</strong>
							</li>
							<li>
								<strong>
									testy i publikacja z pełnym wsparciem po wdrożeniu
								</strong>
							</li>
						</ul>

						<p>
							Każdy etap ma znaczenie. To dzięki temu powstają strony, które nie
							tylko dobrze wyglądają, ale też działają skutecznie i przynoszą
							realne rezultaty.
						</p>
					</>
				),
			},
			{
				type: 'content',
				heading: 'Strona, która sprzedaje – nie tylko informuje',
				paragraphs: (
					<>
						<p>
							Wielu przedsiębiorców ma stronę, ale mało kto ma stronę, która
							naprawdę pracuje na sprzedaż. Różnica polega na strategii. Dobra
							strona nie tylko prezentuje ofertę – ona prowadzi użytkownika krok
							po kroku do kontaktu lub zakupu.
						</p>

						<p>
							Każdy element ma znaczenie: nagłówki, zdjęcia, układ sekcji,
							przyciski i język. Strona powinna odpowiadać na potrzeby klienta i
							rozwiewać jego wątpliwości, zanim jeszcze kliknie w formularz
							kontaktowy.
						</p>

						<p>
							Projektując strony internetowe dla firm, zawsze myślę o
							użytkowniku – o tym, by poruszył się po niej intuicyjnie, czuł się
							pewnie i chciał zostać dłużej. Bo strona, która potrafi zatrzymać
							uwagę, to strona, która sprzedaje.
						</p>
					</>
				),
			},
		],

		blogSection: {
			heading: 'Zobacz również inne wpisy, które mogą Cię zainteresować',
			text: 'To tylko jeden z wielu tematów, które poruszam na blogu. Zajrzyj też do pozostałych wpisów — może znajdziesz coś, co zainspiruje Cię do działania.',
			variant: 'related',
		},
	},
};
