'use client';

import React from 'react';
import styles from './Home_Contact.module.scss';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { ContactNap } from '@/components/ContactNap/ContactNap';
import Image from 'next/image';
import { useBreakpoints } from '@/hooks/useBreakpoint';

export const Home_Contact = () => {
	const { breakpoint } = useBreakpoints();
	return (
		<section className={styles.section}>
			<Wrapper className={styles.wrapper}>
				<Image
					className={styles.sketchImg}
					src={'./img/plane_sketch.svg'}
					alt=''
					aria-hidden={true}
					draggable={false}
					width={400}
					height={280}
				/>
				<h2 className={styles.heading}>
					Gotowy na <span>sukces</span>? Zacznijmy współpracę!
				</h2>
				<p className={styles.text}>
					Chcesz rozwijać swoją firmę i potrzebujesz wsparcia w zakresie
					tworzenia stron internetowych? Skontaktuj się ze mną, aby omówić
					szczegóły i rozpocząć współpracę. Pomogę Ci stworzyć stronę, która
					naprawdę wspiera Twój biznes.
				</p>

				<ContactNap />
				{!breakpoint.lg && (
					<Image
						className={styles.image}
						src={'/img/contactImg.webp'}
						alt='Tworzenie i pozycjonowanie stron internteowych'
						draggable={false}
						width={550}
						height={350}
						sizes='
								(min-width: 400px) 370px, 
								(min-width: 576px) 510px, 
								(min-width: 768px) 550px,
								340px'
					/>
				)}
			</Wrapper>
		</section>
	);
};
