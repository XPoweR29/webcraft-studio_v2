'use client';

import Image from 'next/image';
import React from 'react';
import styles from './ServiceParagraph.module.scss';
import { motion, Variants } from 'framer-motion';

interface Props {
	heading: React.ReactNode;
	children: string;
	image: string;
	imgAlt: string;
	reverse?: boolean;
}

const variants: Variants = {
	hidden: {
		y: 50,
		filter: 'blur(8px)',
		opacity: 0,
	},
	visible: {
		y: 0,
		filter: 'blur(0px)',
		opacity: 1,

		transition: {
			duration: 0.3,
			ease: 'easeOut',
		},
	},
};

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
			<motion.div 
				className={styles.imageWrapper}
				initial='hidden'
				whileInView='visible'
				variants={variants}
				viewport={{once: true, amount: 0.5}}
				>
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
			</motion.div>

			<div className={styles.content}>
				<h2 className={styles.heading}>{heading}</h2>
				<p className={styles.text}>{children}</p>
			</div>
		</div>
	);
};
