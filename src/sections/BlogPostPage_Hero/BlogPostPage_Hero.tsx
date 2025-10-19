'use client';

import React from 'react';
import styles from './BlogPostPage_Hero.module.scss';
import Image from 'next/image';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { Variants } from 'framer-motion';
import calendarIcon from '../../assets/icons/calendar_icon--white.svg';

interface Props {
	title: string;
	date: string;
	category?: string;
	bgImage: string;
	className?: string;
}

const LETTER_DURATION = 0.3;

const sublineVariants: Variants = {
	hidden: {},
	visible: {
		transition: {
			delayChildren: 1,
			staggerChildren: 0.05,
		},
	},
};

const letterVariants: Variants = {
	hidden: {
		opacity: 0,
		y: 15,
		filter: 'blur(8px)',
	},
	visible: {
		opacity: 1,
		y: 0,
		filter: 'blur(0px)',
		transition: {
			duration: LETTER_DURATION,
			ease: 'easeOut',
		},
	},
};

export const BlogPostPage_Hero = ({
	title,
	bgImage,
	date,
	category,
	className,
}: Props) => {
	return (
		<header className={styles.hero} aria-labelledby='page-hero-title'>
			<div className={styles.background}>
				<Image
					src={bgImage}
					alt=''
					aria-hidden={true}
					draggable={false}
					fill
					priority
					fetchPriority='high'
					sizes='100vw'
					style={{ objectFit: 'cover' }}
				/>
			</div>
			<Wrapper className={`${styles.wrapper} ${className ?? ''}`}>
				<h1 className={styles.heading} id='page-hero-title' role='text'>
					{title}
				</h1>

				<div className={styles.tagContainer}>
					{category && <span className={styles.category}>{category}</span>}
					
					<div className={styles.date}>
						<Image
							className={styles.icon}
							src={calendarIcon}
							alt=''
							aria-hidden={true}
							draggable={false}
						/>
						<span>{date}</span>
					</div>
				</div>
			</Wrapper>
		</header>
	);
};
