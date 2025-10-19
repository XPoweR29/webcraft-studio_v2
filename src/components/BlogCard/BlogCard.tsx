import React from 'react';
import styles from './BlogCard.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import calendarIcon from '../../assets/icons/calendar_icon.svg';
import { Icon } from '@iconify/react/dist/iconify.js';
import { formatDatePL } from '@/utils/formatDatePL';

export type BlogCard = {
	href: string;
	mainImg: string;
	mainImgAlt: string;
	title: string;
	description: string;
	date: string;
	category: string;
};

export const BlogCard = ({
	href,
	mainImg,
	mainImgAlt,
	title,
	description,
	date,
	category
}: BlogCard) => {
	return (
		<article className={styles.blogCard}>
			<Link href={href}>
				{category && <span className={styles.categoryTag}>{category}</span>}
			
				<div className={styles.thumb}>
					<Image
						src={mainImg}
						className={styles.image}
						alt={mainImgAlt}
						draggable={false}
						fill
					/>
				</div>

				<div className={styles.body}>
					<h3 className={styles.title}>{title}</h3>
					<p className={styles.excerpt}>{description}</p>

					<footer className={styles.footer}>
						<div className={styles.date}>
							<Image
								src={calendarIcon}
								alt=''
								aria-hidden={true}
								draggable={false}
							/>
							<span>{formatDatePL(date)}</span>
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
