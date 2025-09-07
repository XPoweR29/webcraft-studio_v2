import React from 'react';
import { DirectQuery } from '@/components/DirectQuery/DirectQuery';
import { Expectation } from '@/components/Expectation/Expectation';
import { Process_Section } from '@/components/Process_Section/Process_Section';
import { OtherOffer } from '@/sections/OtherOffer/OtherOffer';
import { Pricing_Section } from '@/sections/Pricing_Section/Pricing_Section';
import { SectionHero } from '@/sections/SectionHero/SectionHero';
import { ServicePage_Content } from '@/sections/ServicePage_Content/ServicePage_Content';
import { linkHref } from '@/utils/linkHref.helper';
import { OFFER_LINKING } from '@/assets/data/offerLinks';
import { FAQ_Section } from '@/sections/FAQ_Section/FAQ_Section';
import { Review_Section } from '@/sections/Review_Sectoin/Review_Section';

import styles from './index.module.scss';

//FIXME: Pozostać przy dynamicznie tworzonych slugach i wszystkie propsy jakimi tutaj uzupełniamy ten page.tsx powinny znaleźć się w jakimś configu tej strony - czytelniej będzie jak będzie jeden folder który zbiera dane dotycznące różnych stron a w nim rozdzielone poszczególne configi dla różnych stron. W takim configu oczywiśćie treści i zdjęcia używane na tej stornie ale również metadane title i OG data. Tak samo schema. 

//IMPROVE: trzeba sie zastanowić czy w /data porobić foldery dla kazdej podstrony a w tym folderze configi osobno dla metadanych, schema i treści wraz z grafikami czy raczej może to wszystko w jednym zbiorczym configu dla jednej strony. - co będzie bardziej przejrzyste w wygodne w użytkowaniu?

//TODO: wciącnąć dane ctaFooter dla każdej podstrony do jej wląsnego configa - tak będzie bardziej przejżyście i lepiej uporządkowane. 

//IMPROVE: warto się podjąć takiego rozwiązania bo ia tak tego nie będzie dało sie uniknąć przy blogu.... 

const ServicePage = () => {
	return (
		<>
			<SectionHero
				heading='Strony internetowe dla firm i beznesów'
				subline='Indywidualny proejtk WWW dla Twojej marki'
				bgImage='/img/photos/websites_hero_image.webp'
			/>
			<ServicePage_Content />
			<Process_Section
				heading='Jak wygląda proces tworzenia Twojej strony?'
				bgImage='/img/steps_sketch.svg'
				btnLabel='skontaktuj się'
				redirectTo={linkHref('contact')}
				steps={[
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
				]}>
				Budowanie stron internetowych opieram na sprawdzonym procesie. Dzięki
				jasnym krokom wiesz, na jakim etapie jest Twój projekt WWW i co jeszcze
				przed nami.
			</Process_Section>

			<Pricing_Section
				heading={
					<>
						Tworzenie <span>stron internetowych</span> w trzech wariantach
					</>
				}
				text='Każdy biznes ma inne potrzeby i możliwości, dlatego przygotowałem trzy elastyczne pakiety. Dzięki nim łatwo wybierzesz rozwiązanie dopasowane do swojego budżetu – od prostej strony wizytówki po rozbudowany serwis z pełną optymalizacją SEO. Jasna struktura oferty pozwala Ci szybko zdecydować, które rozwiązanie najlepiej odpowiada Twoim celom. Wszystkie pakiety opierają się na indywidualnym podejściu do projektowania stron internetowych, dzięki czemu zyskujesz nowoczesną, funkcjonalną i widoczną w Google stronę.'
				sketchImg='/img/www_sketch.svg'
			/>

			<Expectation />

			<DirectQuery
				alignLeft
				heading={
					<>
						Czy Twoja strona internetowa <span>wyróżnia</span> Cię na tle
						konkurencji?
					</>
				}>
				Wizerunek w sieci ma ogromne znaczenie – to często pierwszy kontakt
				klienta z Twoją firmą. Profesjonalnie zaprojektowana i zbudowana strona
				WWW buduje wiarygodność, wzmacnia zaufanie i pokazuje, że dbasz o każdy
				detal swojego biznesu. Estetyczny projekt internetowy, spójny z
				identyfikacją wizualną marki, sprawia, że Twoja firma jest postrzegana
				jako solidna i nowoczesna. To nie tylko narzędzie sprzedaży, ale przede
				wszystkim element, który wyróżnia Cię na tle konkurencji i sprawia, że
				klienci chętniej wybierają właśnie Ciebie.
			</DirectQuery>

			<OtherOffer
				heading={
					<>
						Sprawdź co jeszcze mogę dla <span>Ciebie</span> zrobić
					</>
				}
				text='Wizytówka Google to doskonałe narzędzie do pozyskiwania lokalnych klientów. Gdy dodasz do niej profesjonalną stronę internetową i skuteczne SEO, tworzysz spójny system widoczności w sieci. Zapoznaj się z pełną ofertą i wybierz rozwiązania, które najlepiej wspierają Twój biznes.'
				offerLinks={OFFER_LINKING}
			/>

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

			<Review_Section heading='Dołącz do zadowolonych klientów' className={styles.reviewSection}>
				Opinie klientów najlepiej pokazują skuteczność moich działań przy
				projektowaniu stron internetowych i tworzeniu nowoczesnych stron WWW dla
				firm. Każda realizacja to indywidualny projekt, optymalizowany pod SEO,
				by Twoja strona nie tylko wyglądała, ale też była widoczna w Google.
				Zaufanie klientów potwierdza, że profesjonalne strony internetowe mogą
				realnie wspierać rozwój biznesu. klientów.
			</Review_Section>
		</>
	);
};

export default ServicePage;
