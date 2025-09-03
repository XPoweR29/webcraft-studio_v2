import React from 'react';
import styles from './Portfolio_Content.module.scss';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { PortfolioItem } from '@/components/PortfolioItem/PortfolioItem';
import { CTA_bar } from '@/components/CTA_bar/CTA_bar';
import { linkHref } from '@/utils/linkHref.helper';

export const Portfolio_Content = () => {
	return (
		<section className={styles.section}>
			<Wrapper className={styles.wrapper}>
				<h2 className={styles.heading}>
					Tworzę rozwiązania dopasowanie do Twojego biznesu
				</h2>
				<p className={styles.text}>
					Zajrzyj do mojego portfolio i zobacz, jak wyglądają strony tworzone od
					podstaw – bez gotowych szablonów, bez pośredników. Każdy projekt
					powstaje w oparciu o rozmowę, analizę potrzeb i cele, które chcesz
					osiągnąć online. Dzięki temu finalna witryna nie tylko dobrze wygląda,
					ale też działa szybko, jest widoczna w Google i gotowa do realnej
					sprzedaży lub pozyskiwania klientów.
				</p>

				<ul className={styles.projectList}>
					<li>
						<PortfolioItem
							mockupImg='/img/portfolio/adona_thumb.webp'
							mockupAlt='Makieta stront internetowej Adona'
							title='Restauracja orientalna ADONA'
							description='Przyjemna i przejrzysta strona, która w czytelny sposób
									przedstawia ofertę lokali ADONA. Całość zaprojektowana tak, by
									użytkownik szybko znalazł to, czego szuka.'
							caseStudyLink='/portfolio/adona'
							externalLink='http://www.adona.net.pl'
						/>
					</li>
					<li>
						<PortfolioItem
							mockupImg='/img/portfolio/adona_thumb.webp'
							mockupAlt='Makieta stront internetowej Adona'
							title='Restauracja orientalna ADONA'
							description='Przyjemna i przejrzysta strona, która w czytelny sposób
									przedstawia ofertę lokali ADONA. Całość zaprojektowana tak, by
									użytkownik szybko znalazł to, czego szuka.'
							caseStudyLink='/portfolio/adona'
							externalLink='http://www.adona.net.pl'
						/>
					</li>
				</ul>
			</Wrapper>

			<Wrapper className={styles.cta_wrapper}>
				<CTA_bar
					redirectTo={linkHref('offer')}
					buttonLabel='poznaj ofertę'
					textLines={[
						'Masz pomysł na stronę internetową?',
						'Pomogę Ci go zrealizować.',
					]}
				/>
			</Wrapper>
		</section>
	);
};
