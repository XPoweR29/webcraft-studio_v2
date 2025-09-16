import React from 'react';
import styles from './SubscriptionCTA.module.scss';
import { Wrapper } from '../Wrapper/Wrapper';
import Image from 'next/image';

interface Props {
	heading: React.ReactNode;
	text: string;
}

export const SubscriptionCTA = ({ heading, text }: Props) => {
	return (
		<section className={styles.section}>
			<Wrapper className={styles.wrapper}>
				<Image
					className={styles.sketchImg}
					src={'/img/arrow_sketch.svg'}
					alt=''
					width={240}
					height={190}
					aria-hidden={true}
					draggable={false}
				/>
				<h2 className={styles.heading}>{heading}</h2>
				<p className={styles.text}>{text}</p>
			</Wrapper>
		</section>
	);
};
