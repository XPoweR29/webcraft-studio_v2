'use client';

import { Icon } from '@iconify/react/dist/iconify.js';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './OfferItem.module.scss';
import { motion, Variants } from 'framer-motion';

interface Props {
	title: string;
	children: React.ReactNode;
	image: string;
	imageAlt: string;
	url: string;
	sketchImg: string;
	inverse?: boolean;
}

const variants: Variants = {
	hidden: {
		y: 100,
		scale: 1.2,
		filter: 'blur(8px)',
		opacity: 0,
	},
	visible: {
		y: 0,
		scale: 1,
		filter: 'blur(0px)',
		opacity: 1,

		transition: {
			duration: 0.5,
			ease: 'easeOut'
		},
	},
};

export const OfferItem = ({
	children,
	image,
	imageAlt,
	title,
	url,
	sketchImg,
	inverse,
}: Props) => {
	return (
		<motion.li
			className={`${styles.offerItem} ${
				inverse && styles['offerItem--inverse']
			}`}
			initial='hidden'
			whileInView='visible'
			variants={variants}
			viewport={{once: true, amount: 0.4}}>
			<Image
				className={styles.image}
				src={image}
				alt={imageAlt}
				draggable={false}
				width={500}
				height={450}
			/>
			<div className={styles.content}>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.description}>{children}</p>
				<Link href={url} className={styles.button}>
					<span>Więcej</span>
					<Icon icon='solar:arrow-right-broken' className={styles.icon} />
				</Link>
			</div>
			<Image
				className={styles.sketchImg}
				src={sketchImg}
				alt=''
				aria-hidden={true}
				draggable={false}
				width={300}
				height={300}
			/>
		</motion.li>
	);
};
