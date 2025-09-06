import Image from 'next/image';
import React from 'react';
import styles from './ServiceParagraph.module.scss';

interface Props {
	heading: React.ReactNode;
	children: string;
	image: string;
	imgAlt: string;
	reverse?: boolean;
}

export const ServiceParagraph = ({
	image,
	children,
	heading,
	imgAlt,
	reverse,
}: Props) => {
	return (
		<div
			className={`${styles.paragraph} ${
				reverse ?? styles['paragraph--reverse']
			}`}>
			<Image
				className={styles.image}
				src={image}
				alt={imgAlt}
				width={521}
				height={257}
				sizes='
					(min-width: 500px) 450px,
					(min-width: 1400px) 500px,
					350px'
			/>
			<div className={styles.content}>
				<h2 className={styles.heading}>{heading}</h2>
				<p className={styles.text}>{children}</p>
			</div>
		</div>
	);
};
