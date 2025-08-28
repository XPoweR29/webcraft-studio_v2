import React from 'react';
import styles from './BlogCard.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import calendarIcon from '../../assets/icons/calendar_icon.svg';
import { Icon } from '@iconify/react/dist/iconify.js';

export type BlogCard = {
	href: string;
	image: string;
	imgAlt: string;
	title: string;
	excerpt: string;
	date: string;
};

export const BlogCard = ({
	href,
	image,
	imgAlt,
	title,
	excerpt,
	date,
}: BlogCard) => {
	return (
		<article className={styles.blogCard}>
			<Link href={href}>
				<div className={styles.thumb}>
					<Image
						src={image}
						className={styles.image}
						alt={imgAlt}
						draggable={false}
						fill
						// sizes='100%'
					/>
				</div>

				<div className={styles.body}>
					<h3 className={styles.title}>{title}</h3>
					<p className={styles.excerpt}>{excerpt}</p>

					<footer className={styles.footer}>
						<div className={styles.date}>
							<Image
								src={calendarIcon}
								alt=''
								aria-hidden={true}
								draggable={false}
							/>
							<span>{date}</span>
						</div>
						<span className={styles.button}>
							Czytaj więcej{' '}
							<Icon icon='solar:arrow-right-broken' className={styles.icon} />
						</span>
					</footer>
				</div>
			</Link>
		</article>
	);
};
