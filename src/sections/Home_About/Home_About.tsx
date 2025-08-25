import React from 'react';
import styles from './Home_About.module.scss';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import Image from 'next/image';
import { CTA_bar } from '@/components/CTA_bar/CTA_bar';
import { linkHref } from '@/utils/linkHref.helper';

export const Home_About = () => {
	return (
		<section className={styles.section}>
			<Wrapper className={styles.wrapper}>
				<Image
					className={styles.image}
					src={'/img/creative_img.webp'}
					alt='Nowoczesne strony internetowe'
					width={630}
					height={380}
					sizes='
					(min-width: 576px) 510px, 
					345px
					'
					priority
				/>
				<div className={styles.content}>
					<h2 className={styles.heading}>
						Projektuję i buduję strony, które <span>wyróżnią</span> Cię w sieci
					</h2>
					<div className={styles.paragraph}>
						<p>
							Jako freelancer działający pod marką WebCraft STUDIO, specjalizuję
							się w tworzeniu i pozycjonowaniu stron internetowych. Pomagam
							firmom i lokalnym biznesom wyróżnić się w sieci i przyciągać
							klientów dzięki dopracowanym i zoptymalizowanym stronom. Nie
							korzystam z gotowych motywów i generatorów – każda strona powstaje
							od podstaw i jest w pełni dopasowana do potrzeb danej branży.
						</p>
						<p>
							Nie jestem agencją, dzięki czemu masz bezpośredni kontakt z osobą
							odpowiedzialną za każdy etap realizacji – od projektu graficznego,
							przez kodowanie, aż po wdrożenie i opiekę techniczną. Dbam również
							o widoczność Twojej strony w Google, optymalizując treści i
							strukturę. Jeśli prowadzisz biznes lokalny – chętnie pomogę też w
							rozwoju wizytówki Google Maps.
						</p>
						<p>
							Stawiam na indywidualne podejście, prostą komunikację i konkretne
							efekty. Chcesz wypaść profesjonalnie i być lepiej widoczny w
							sieci? Jesteś w dobrym miejscu.
						</p>
					</div>
				</div>
			</Wrapper>

			<Wrapper className={styles.cta_wrapper}>
				<CTA_bar
					redirectTo={linkHref('offer')}
					buttonLabel='poznaj ofertę'
					textLines={[
						'Masz pomysł na stronę internetową?',
						'Pomogę Ci go zrealizować.'
					]}
				/>
			</Wrapper>
		</section>
	);
};
