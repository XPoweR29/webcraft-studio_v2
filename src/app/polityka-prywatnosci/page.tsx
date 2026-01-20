import React from 'react';
import styles from './polityka-ptywatnosci.module.scss';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { createMetadata } from '@/utils/createMetadata';

export const metadata = createMetadata(
	{
		relPath: '/polityka-prywatnosci',
		title: 'Polityka Prywatności',
		description:
			'Dowiedz się, jakie dane zbieramy i w jaki sposób je przetwarzamy.',
	},
	{
		robots: { index: false, follow: false },
	}
);

const PrivacyPolicy = () => {
	return (
		<article className={styles.privacy}>
			<Wrapper className={styles.wrapper}>
				<main>
					<article>
						<h1>Polityka Prywatności</h1>
						<p>
							Poniższa Polityka Prywatności określa{' '}
							<strong>
								zasady zapisywania i uzyskiwania dostępu do danych na
								Urządzeniach Użytkowników
							</strong>{' '}
							korzystających z Serwisu do celów świadczenia usług drogą
							elektroniczną przez Administratora oraz{' '}
							<strong>
								zasady gromadzenia i przetwarzania danych osobowych Użytkowników
							</strong>
							, które zostały podane przez nich osobiście i dobrowolnie za
							pośrednictwem narzędzi dostępnych w Serwisie.
						</p>
						<p>
							Poniższa Polityka Prywatności jest integralną częścią{' '}
							<a href='https://nety.pl/regulamin'>Regulaminu Serwisu</a>, który
							określa zasady, prawa i obowiązki Użytkowników korzystających z
							Serwisu.
						</p>

						<h2 style={{ textAlign: 'center' }}>§1 Definicje</h2>
						<ul>
							<li>
								<strong>Serwis</strong> - serwis internetowy "WebCraftSTUDIO"
								działający pod adresem https://webcraft-studio.pl
							</li>
							<li>
								<strong>Serwis zewnętrzny</strong> - serwisy internetowe
								partnerów, usługodawców lub usługobiorców współpracujących z
								Administratorem
							</li>
							<li>
								<strong>Administrator Serwisu / Danych</strong> -
								Administratorem Serwisu oraz Administratorem Danych (dalej
								Administrator) jest osoba fizyczna "Paweł Żydek" zamieszkała w
								Zasole Bielańskie, świadcząca usługi drogą elektroniczną za
								pośrednictwem Serwisu
							</li>
							<li>
								<strong>Użytkownik</strong> - osoba fizyczna, dla której
								Administrator świadczy usługi drogą elektroniczną za
								pośrednictwem Serwisu.
							</li>
							<li>
								<strong>Urządzenie</strong> - elektroniczne urządzenie wraz z
								oprogramowaniem, za pośrednictwem którego Użytkownik uzyskuje
								dostęp do Serwisu
							</li>
							<li>
								<strong>Cookies (ciasteczka)</strong> - dane tekstowe gromadzone
								w formie plików zamieszczanych na Urządzeniu Użytkownika
							</li>
							<li>
								<strong>RODO</strong> - Rozporządzenie Parlamentu Europejskiego
								i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie
								ochrony osób fizycznych w związku z przetwarzaniem danych
								osobowych i w sprawie swobodnego przepływu takich danych oraz
								uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie
								danych)
							</li>
							<li>
								<strong>Dane osobowe</strong> - oznaczają informacje o
								zidentyfikowanej lub możliwej do zidentyfikowania osobie
								fizycznej („osobie, której dane dotyczą”); możliwa do
								zidentyfikowania osoba fizyczna to osoba, którą można
								bezpośrednio lub pośrednio zidentyfikować, w szczególności na
								podstawie identyfikatora taki jak imię i nazwisko, numer
								identyfikacyjny, dane o lokalizacji, identyfikator internetowy
								lub jeden bądź kilka szczególnych czynników określających
								fizyczną, fizjologiczną, genetyczną, psychiczną, ekonomiczną,
								kulturową lub społeczną tożsamość osoby fizycznej
							</li>
							<li>
								<strong>Przetwarzanie</strong> - oznacza operację lub zestaw
								operacji wykonywanych na danych osobowych lub zestawach danych
								osobowych w sposób zautomatyzowany lub niezautomatyzowany, taką
								jak zbieranie, utrwalanie, organizowanie, porządkowanie,
								przechowywanie, adaptowanie lub modyfikowanie, pobieranie,
								przeglądanie, wykorzystywanie, ujawnianie poprzez przesłanie,
								rozpowszechnianie lub innego rodzaju udostępnianie,
								dopasowywanie lub łączenie, ograniczanie, usuwanie lub
								niszczenie;
							</li>
							<li>
								<strong>Ograniczenie przetwarzania</strong> - oznacza oznaczenie
								przechowywanych danych osobowych w celu ograniczenia ich
								przyszłego przetwarzania
							</li>
							<li>
								<strong>Profilowanie</strong> - oznacza dowolną formę
								zautomatyzowanego przetwarzania danych osobowych, które polega
								na wykorzystaniu danych osobowych do oceny niektórych czynników
								osobowych osoby fizycznej, w szczególności do analizy lub
								prognozy aspektów dotyczących efektów pracy tej osoby fizycznej,
								jej sytuacji ekonomicznej, zdrowia, osobistych preferencji,
								zainteresowań, wiarygodności, zachowania, lokalizacji lub
								przemieszczania się
							</li>
							<li>
								<strong>Zgoda</strong> - zgoda osoby, której dane dotyczą
								oznacza dobrowolne, konkretne, świadome i jednoznaczne okazanie
								woli, którym osoba, której dane dotyczą, w formie oświadczenia
								lub wyraźnego działania potwierdzającego, przyzwala na
								przetwarzanie dotyczących jej danych osobowych
							</li>
							<li>
								<strong>Naruszenie ochrony danych osobowych</strong> - oznacza
								naruszenie bezpieczeństwa prowadzące do przypadkowego lub
								niezgodnego z prawem zniszczenia, utracenia, zmodyfikowania,
								nieuprawnionego ujawnienia lub nieuprawnionego dostępu do danych
								osobowych przesyłanych, przechowywanych lub w inny sposób
								przetwarzanych
							</li>
							<li>
								<strong>Pseudonimizacja</strong> - oznacza przetworzenie danych
								osobowych w taki sposób, by nie można ich było już przypisać
								konkretnej osobie, której dane dotyczą, bez użycia dodatkowych
								informacji, pod warunkiem że takie dodatkowe informacje są
								przechowywane osobno i są objęte środkami technicznymi i
								organizacyjnymi uniemożliwiającymi ich przypisanie
								zidentyfikowanej lub możliwej do zidentyfikowania osobie
								fizycznej
							</li>
							<li>
								<strong>Anonimizacja</strong> - Anonimizacja danych to
								nieodwracalny proces operacji na danych, który niszczy /
								nadpisuje "dane osobowe" uniemożliwiając identyfikację, lub
								powiązanie danego rekordu z konkretnym użytkownikiem lub osobą
								fizyczną.
							</li>
						</ul>

						<h2 style={{ textAlign: 'center' }}>§2 Inspektor Ochrony Danych</h2>
						<p>
							Na podstawie Art. 37 RODO, Administrator nie powołał Inspektora
							Ochrony Danych.
						</p>
						<p>
							W sprawach dotyczących przetwarzania danych, w tym danych
							osobowych, należy kontaktować się bezpośrednio z Administratorem.
						</p>

						<h2 style={{ textAlign: 'center' }}>§3 Rodzaje Plików Cookies</h2>
						<ul>
							<li>
								<strong>Cookies wewnętrzne</strong> - pliki zamieszczane i
								odczytywane z Urządzenia Użytkownika przez system
								teleinformatyczny Serwisu
							</li>
							<li>
								<strong>Cookies zewnętrzne</strong> - pliki zamieszczane i
								odczytywane z Urządzenia Użytkownika przez systemy
								teleinformatyczne Serwisów zewnętrznych. Skrypty Serwisów
								zewnętrznych, które mogą umieszczać pliki Cookies na
								Urządzeniach Użytkownika zostały świadomie umieszczone w
								Serwisie poprzez skrypty i usługi udostępnione i zainstalowane w
								Serwisie
							</li>
							<li>
								<strong>Cookies sesyjne</strong> - pliki zamieszczane i
								odczytywane z Urządzenia Użytkownika przez Serwis podczas jednej
								sesji danego Urządzenia. Po zakończeniu sesji pliki są usuwane z
								Urządzenia Użytkownika.
							</li>
							<li>
								<strong>Cookies trwałe</strong> - pliki zamieszczane i
								odczytywane z Urządzenia Użytkownika przez Serwis do momentu ich
								ręcznego usunięcia. Pliki nie są usuwane automatycznie po
								zakończeniu sesji Urządzenia chyba że konfiguracja Urządzenia
								Użytkownika jest ustawiona na tryb usuwanie plików Cookie po
								zakończeniu sesji Urządzenia.
							</li>
						</ul>

						<h2 style={{ textAlign: 'center' }}>
							§4 Bezpieczeństwo składowania danych
						</h2>
						<ul>
							<li>
								<strong>Mechanizmy składowania i odczytu plików Cookie</strong>{' '}
								- Mechanizmy składowania, odczytu i wymiany danych pomiędzy
								Plikami Cookies zapisywanymi na Urządzeniu Użytkownika a
								Serwisem są realizowane poprzez wbudowane mechanizmy
								przeglądarek internetowych i nie pozwalają na pobieranie innych
								danych z Urządzenia Użytkownika lub danych innych witryn
								internetowych, które odwiedzał Użytkownik, w tym danych
								osobowych ani informacji poufnych. Przeniesienie na Urządzenie
								Użytkownika wirusów, koni trojańskich oraz innych robaków jest
								także praktycznie niemożliwe.
							</li>
							<li>
								<strong>Cookie wewnętrzne</strong> - zastosowane przez
								Administratora pliki Cookie są bezpieczne dla Urządzeń
								Użytkowników i nie zawierają skryptów, treści lub informacji
								mogących zagrażać bezpieczeństwu danych osobowych lub
								bezpieczeństwu Urządzenia z którego korzysta Użytkownik.
							</li>
							<li>
								<strong>Cookie zewnętrzne</strong> - Administrator dokonuje
								wszelkich możliwych działań w celu weryfikacji i doboru
								partnerów serwisu w kontekście bezpieczeństwa Użytkowników.
								Administrator do współpracy dobiera znanych, dużych partnerów o
								globalnym zaufaniu społecznym. Nie posiada on jednak pełnej
								kontroli nad zawartością plików Cookie pochodzących od
								zewnętrznych partnerów. Za bezpieczeństwo plików Cookie, ich
								zawartość oraz zgodne z licencją wykorzystanie przez
								zainstalowane w serwisie Skrypty, pochodzących z Serwisów
								zewnętrznych, Administrator nie ponosi odpowiedzialności na tyle
								na ile pozwala na to prawo.
							</li>
							<li>
								<strong>Kontrola plików Cookie</strong>
								<ul>
									<li>
										Użytkownik może w dowolnym momencie, samodzielnie zmienić
										ustawienia dotyczące zapisywania, usuwania oraz dostępu do
										danych zapisanych plików Cookies przez każdą witrynę
										internetową
									</li>
									<li>
										Informacje o sposobie wyłączenia plików Cookie w
										najpopularniejszych przeglądarkach dostępnych na stronie:{' '}
										<a href='https://nety.pl/jak-wylaczyc-pliki-cookie/'>
											jak wyłączyć cookie
										</a>
									</li>
								</ul>
							</li>
						</ul>

						<h2 style={{ textAlign: 'center' }}>
							§5 Cele do których wykorzystywane są pliki Cookie
						</h2>
						<ul>
							<li>Usprawnienie i ułatwienie dostępu do Serwisu</li>
							<li>Personalizacja Serwisu dla Użytkowników</li>
							<li>Usługi serwowania reklam</li>
							<li>
								Prowadzenie statystyk (użytkowników, ilości odwiedzin, rodzajów
								urządzeń, łącze itp.)
							</li>
							<li>Świadczenie usług społecznościowych</li>
						</ul>

						<h2 style={{ textAlign: 'center' }}>
							§6 Cele przetwarzania danych osobowych
						</h2>
						<p>
							Dane osobowe dobrowolnie podane przez Użytkowników są przetwarzane
							w jednym z następujących celów:
						</p>
						<ul>
							<li>Realizacji usług elektronicznych</li>
							<li>
								Komunikacji Administratora z Użytkownikami w sprawach związanych
								z Serwisem oraz ochrony danych
							</li>
							<li>Zapewnienia prawnie uzasadnionego interesu Administratora</li>
						</ul>

						<h2 style={{ textAlign: 'center' }}>
							§7 Pliki Cookies Serwisów zewnętrznych
						</h2>
						<p>
							Administrator w Serwisie wykorzystuje skrypty javascript i
							komponenty webowe partnerów, którzy mogą umieszczać własne pliki
							cookies na Urządzeniu Użytkownika. Poniżej znajduje się lista
							partnerów lub ich usług zaimplementowanych w Serwisie, mogących
							umieszczać pliki cookies:
						</p>
						<ul>
							<li>
								<strong>Usługi społecznościowe / łączone:</strong> (Facebook)
							</li>
							<li>
								<strong>Usługi serwowania reklam:</strong> (Google Adsense)
							</li>
							<li>
								<strong>Prowadzenie statystyk:</strong> (Google Analytics)
							</li>
						</ul>

						<h2 style={{ textAlign: 'center' }}>
							§9 Dostęp do danych osobowych przez podmioty trzecie
						</h2>
						<p>
							Co do zasady jedynym odbiorcą danych osobowych podawanych przez
							Użytkowników jest Administrator. Dane gromadzone w ramach
							świadczonych usług nie są przekazywane ani odsprzedawane podmiotom
							trzecim.
						</p>
						<p>
							Administrator w celu prowadzenia serwisu korzysta z usług
							zewnętrznego dostawcy hostingu -{' '}
							<strong>
								<a href='https://vercel.com/legal/privacy-policy'>Vercel</a>
							</strong>
							. Wszelkie dane gromadzone i przetwarzane w serwisie są
							przechowywane i przetwarzane w infrastrukturze usługodawcy
							zlokalizowanej w Polsce.
						</p>

						<h2 style={{ textAlign: 'center' }}>
							§14 Kontakt do Administratora
						</h2>
						<ul>
							<li>
								<strong>Adres poczty elektronicznej</strong> -
								kontakt@webcraft-studio.pl
							</li>
							<li>
								<strong>Połączenie telefoniczne</strong> - +48 505264517
							</li>
							<li>
								<strong>Formularz kontaktowy</strong> - dostępny pod adresem:
								/kontakt
							</li>
						</ul>
					</article>
				</main>
			</Wrapper>
		</article>
	);
};

export default PrivacyPolicy;
