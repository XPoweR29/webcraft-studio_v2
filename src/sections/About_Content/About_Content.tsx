import React from 'react';
import styles from './About_Content.module.scss';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import Image from 'next/image';

export const About_Content = () => {
	return (
		<section className={styles.section}>
			<Wrapper className={styles.photoWrapper}>
				<Image
					src={'/img/dev_photo.png'}
					className={styles.devPhoto}
					alt='Zdjęcie web developera'
					draggable={false}
					width={494}
					height={636}
					priority
				/>
			</Wrapper>

			<Wrapper className={styles.wrapper}>
				<Image
					src={'/img/laptop_sketch.svg'}
					className={styles.sketchImg}
					alt=''
					aria-hidden={true}
					draggable={false}
					width={445}
					height={380}
				/>
				<h2 className={styles.heading}>
					Poznaj mnie i dowiedz się co mogę zrobić dla <span>Twojej</span> marki
				</h2>
				<div className={styles.paragraph}>
					<p>
						Cześć! Mam na imię Paweł i jako fronted developer tworzę strony
						internetowe w ramach WebCraftSTUDIO. Programowaniem zajmuję się od
						kilku lat. Zaczynałem od backendu i baz danych, ale szybko odkryłem,
						że największą frajdę daje mi frontend oraz tworzenie stron, które
						dobrze wyglądają, działają bez zarzutu i są widoczne w Google.
					</p>
					<p>
						Nie korzystam z kreatorów czy gotowych szablonów. Każdy projekt
						tworzę samodzielnie, pisząc kod od zera i dopasowując stronę
						dokładnie do potrzeb klienta. To podejście pozwala mi kontrolować
						każdy detal — od wyglądu, po szybkość działania i SEO.
					</p>
					<p>
						WebCraftSTUDIO powstało z myślą o lokalnych firmach, które chcą
						zdobywać klientów online. Nie jestem agencją – pracuję jako
						freelancer i podchodzę do projektów po ludzku. Bez obietnic „złotych
						gór”, bez marketingowego bełkotu i masówki. Każdą realizację
						traktuję jak wyzwanie, z którego mogę wyciągnąć nowe doświadczenie i
						wiedzę.
					</p>
					<p>
						Wiem, że strona internetowa to nie tylko ładny projekt. Musi przede
						wszystkim spełniać swój cel – być skuteczna. Dlatego stale się
						rozwijam, poszerzając swoją wiedzę o SEO, Google Moja Firma, content
						marketing, a także tworząc własne projekty aplikacji webowych.
					</p>
				</div>
			</Wrapper>
		</section>
	);
};
