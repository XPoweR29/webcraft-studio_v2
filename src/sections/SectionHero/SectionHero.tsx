'use client';

import React from 'react';
import styles from './SectionHero.module.scss';
import Image from 'next/image';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { Variants, motion } from 'framer-motion';

interface Props {
	heading: string;
	subline?: string;
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

export const SectionHero = ({ heading, bgImage, subline, className }: Props) => {

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
			<Wrapper className={`${styles.wrapper} ${className??""}`}>
				<h1 className={styles.heading} id='page-hero-title' role='text'>
					<span>{heading}</span>{" "}
					{subline && (
						<motion.span
							className={styles.subline}
							variants={sublineVariants}
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true, amount: 0.6 }}>
							{subline.split(' ').map((word, wordIdx, arr) => (
								<React.Fragment key={wordIdx}>
									<span
										style={{
											display: 'inline-block', 
											whiteSpace: 'nowrap',
										}}>
										{Array.from(word).map((char, i) => (
											<motion.span
												key={`${wordIdx}-${i}`}
												variants={letterVariants}
												style={{ display: 'inline-block', whiteSpace: 'pre' }}>
												{char}
											</motion.span>
										))}
									</span>
									{wordIdx < arr.length - 1 && ' '}
								</React.Fragment>
							))}
						</motion.span>
					)}
				</h1>
			</Wrapper>
		</header>
	);
};
