import React from 'react';
import styles from './PortfolioItem.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react/dist/iconify.js';

export const PortfolioItem = ({
	mockupImg,
	mockupAlt,
	title,
	description,
	externalLink,
	caseStudyLink,
}: PortfolioItem) => {
	return (
		<article className={styles.portfolioItem}>
			<Image
				className={styles.thumb}
				src={mockupImg}
				alt={mockupAlt}
				width={500}
				height={256}
				sizes='(min-width: 1200px) 300px, (min-width: 992px) 250px, 350px'
			/>

			<div className={styles.content}>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.description}>{description}</p>

				<a
					className={styles.externalLink}
					href={externalLink}
					target='_blank'
					rel='noopener noreferrer'>
					{externalLink}
				</a>
			</div>

			<Link href={caseStudyLink} className={styles.button}>
				<span>Więcej</span>
				<Icon icon='solar:arrow-right-broken' className={styles.icon} />
			</Link>
		</article>
	);
};
