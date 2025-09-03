import React from 'react';
import styles from './ProjectCard.module.scss';
import Image from 'next/image';
import { Icon } from '@iconify/react/dist/iconify.js';
import Link from 'next/link';

export const ProjectCard = ({
	caseStudyLink,
	description,
	externalLink,
	mockupAlt,
	mockupImg,
	title,
}: PortfolioItem) => {
	return (
		<article className={styles.card}>
			<Image
				className={styles.thumb}
				src={mockupImg}
				alt={mockupAlt}
				width={500}
				height={366}
				sizes='(min-width: 1200px) 500px, (min-width: 992px) 350px, (min-width: 768px) 500px, (min-width: 500px) 320px, 295px'
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
