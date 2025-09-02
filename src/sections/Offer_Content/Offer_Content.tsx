import React from 'react';
import styles from './Offer_Content.module.scss';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { OfferItem } from '@/components/OfferItem/OfferItem';
import { linkHref } from '@/utils/linkHref.helper';

export const Offer_Content = () => {
	return (
		<section className={styles.section}>
			<Wrapper className={styles.wrapper}>
				<h2 className={styles.heading}>
					Usługi, dzięki którym <span>zyskasz</span> nowych klientów
				</h2>
				<p className={styles.text}>
					W WebCraftSTUDIO tworzę strony internetowe od podstaw, optymalizuję je
					pod wyszukiwarki i dbam o widoczność firm w Google. Moja oferta
					obejmuje projektowanie nowoczesnych witryn, skuteczne pozycjonowanie
					oraz profesjonalną obsługę wizytówek Google Moja Firma. Niezależnie od
					tego, czy potrzebujesz jednej usługi, czy pełnego pakietu – znajdziesz
					tu rozwiązanie dopasowane do Twoich potrzeb.
				</p>

				<ul className={styles.offersList}>
					<OfferItem
						title='Tworzenie stron internetowych'
						image='/img/websites-mockups.webp'
						imageAlt='Nowoczesne strony internetowe'
						url={linkHref('websites')}
						sketchImg='/img/web_sketch.svg'>
						Stworzę dla Ciebie stronę internetową, która wyróżni Twoją firmę w
						sieci i pomoże zdobywać klientów. Projekt przygotuję od zera, bez
						gotowych szablonów - tak, aby idealnie pasował do Twojej branży,
						oferty i odbiorców. Strona będzie szybka, nowoczesna i przyjazna dla
						SEO, co zwiększy jej widoczność w Google i pozwoli skutecznie
						przedstwić twoją ofertę.
					</OfferItem>

					<OfferItem
						title='Optymalizacja SEO'
						image='/img/dahsboard-mockup.webp'
						imageAlt='Optymalizacja seo stron www'
						url={linkHref('seo')}
						sketchImg='/img/search_sketch.svg'
						inverse={true}>
						Zadbam o to, aby Twoja strona była łatwiejsza do znalezienia w
						Google i przyciągała właściwych klientów. Poprawię jej szybkość,
						strukturę i treści, dobiorę skuteczne słowa kluczowe oraz stworzę
						strategię, która przyniesie trwałe efekty. Dzięki optymalizacji SEO
						Twoja witryna zacznie zdobywać wyższe pozycje w wyszukiwarce i
						generować więcej zapytań od zainteresowanych osób.
					</OfferItem>

					<OfferItem
						title='Wizytówka Google'
						image='/img/google-map.webp'
						imageAlt='Pozycjonowanie wizytówki Google Maps'
						url={linkHref('gmb')}
						sketchImg='/img/gmb_sketch.svg'>
						Zadbam o to, aby Twoja firma była widoczna w Mapach Google wyżej niż
						konkurencja. Wykorzystam analizę rynku, odpowiednie frazy i bieżące
						reagowanie na zmiany, aby utrzymać Cię w czołówce lokalnych wyników.
						Dzięki temu dotrzesz do klientów dokładnie w momencie, gdy szukają
						Twoich usług – często zanim zdążą wejść na jakąkolwiek stronę
						internetową.
					</OfferItem>
				</ul>
			</Wrapper>
		</section>
	);
};
