import React from 'react';
import styles from './Blog_Content.module.scss';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import Image from 'next/image';

export const Blog_Content = () => {
	return (
		<section className={styles.section}>
			<Wrapper className={styles.wrapper}>
				<Image
					src={'/img/pen_sketch.svg'}
					className={styles.sketchImg}
					alt=''
					width={720}
					height={360}
					aria-hidden={true}
					draggable={false}
				/>
				
				<h2 className={styles.heading}>
					Praktyczne <span>wskazówki</span> dla Twojej obecności w sieci
				</h2>
				<p className={styles.text}>
					Ten blog to przestrzeń, w której łączę wiedzę o stronach WWW,
					pozycjonowaniu i wizytówkach Google z bardziej osobistymi refleksjami.
					Znajdziesz tu praktyczne porady, inspiracje i sprawdzone rozwiązania,
					które pomogą Twojej marce wyróżnić się w internecie. Pokazuję, jak
					wygląda praca freelancera w WebCraftSTUDIO, jak podejmować skuteczne
					działania online oraz dlaczego widoczność w sieci jest łatwiejsza, niż
					się wydaje.
				</p>
			</Wrapper>
		</section>
	);
};
