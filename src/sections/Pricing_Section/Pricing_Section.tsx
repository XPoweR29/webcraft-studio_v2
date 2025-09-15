import { Wrapper } from '@/components/Wrapper/Wrapper';
import React from 'react';
import styles from './Pricing_Section.module.scss';
import Image from 'next/image';
import { PricingCard } from '@/components/PricingCard/PricingCard';

interface Props {
	heading: React.ReactNode;
	text: string;
	sketchImg: string;
	packages: PricingCard[];
};


export const Pricing_Section = ({ heading, text, sketchImg, packages }: Props) => {
	let gmbClass = '';
	if(packages.length === 2) gmbClass = 'gmb';
	console.log(gmbClass);

	return (
		<section className={styles.section}>
			<Wrapper className={styles.wrapper}>
				<Image
					src={sketchImg}
					className={styles.sketchImg}
					alt=''
					aria-hidden={true}
					draggable={false}
					width={480}
					height={350}
				/>
				<h2 className={styles.heading}>{heading}</h2>
				<p className={styles.text}>{text}</p>

				<ul className={`${styles.packages} ${gmbClass?styles['packages--gmb']:''}`}>
					{packages.map((pck) => (
						<li key={pck.name}>
							<PricingCard {...pck} />
						</li>
					))}
				</ul>
			</Wrapper>
		</section>
	);
};
