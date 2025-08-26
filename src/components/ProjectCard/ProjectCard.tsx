import React from 'react';
import styles from './ProjectCard.module.scss';
import Image from 'next/image';
import { Icon } from '@iconify/react/dist/iconify.js';
import Link from 'next/link';

export const ProjectCard = ({ mockupImg, imgAlt, title, excerpt, url }: ProjectCard) => {
	return (
		<article className={styles.projectCard}>
			<div className={styles.thumb}>
				<Image
					src={mockupImg}
					alt={imgAlt}
					width={1200}
					height={800}
				/>
			</div>

			<div className={styles.body}>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.excerpt}>
                    {excerpt}
				</p>

				<Link href={url} className={styles.button}>
					<span>zobacz więcej</span>
					<Icon icon='solar:arrow-right-broken' className={styles.icon} />
				</Link>
			</div>
		</article>
	);
};
