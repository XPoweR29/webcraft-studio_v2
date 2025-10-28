'use client';

import {
	motion,
	Variants,
	useAnimationControls,
	useInView,
} from 'framer-motion';
import styles from './CTA_bar.module.scss';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

interface Props {
	textLines: string[];
	redirectTo: string;
	buttonLabel: string;
	className?: string;
	bgImgae?: string;
}

const LETTER_DURATION = 0.3;
const LETTER_STAGGER = 0.05;

const WHOLE_LINE_DURATION = 0.45;

const letterVariants: Variants = {
	hidden: { opacity: 0, y: 15, filter: 'blur(8px)' },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		filter: 'blur(0px)',
		transition: {
			delay: i * LETTER_STAGGER,
			duration: LETTER_DURATION,
			ease: 'easeOut',
		},
	}),
};

const lineContainerVariants: Variants = {
	hidden: {},
	visible: {},
};
const wholeLineVariants: Variants = {
	hidden: { opacity: 0, y: 16, scale: 1.2, filter: 'blur(4px)' },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		filter: 'blur(0px)',
		transition: { duration: WHOLE_LINE_DURATION, ease: 'easeOut' },
		animationDuration: 1,
	},
};

export const CTA_bar = ({
	textLines,
	redirectTo,
	buttonLabel,
	className,
	bgImgae,
}: Props) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.6 });

	const controlsArray = textLines.map(() => useAnimationControls());

	useEffect(() => {
		const run = async () => {
			for (let i = 0; i < textLines.length; i++) {
				await controlsArray[i].start('visible');

				const total =
					i === 0
						? (textLines[i].replace(/\s/g, '').length - 1) * LETTER_STAGGER +
						  LETTER_DURATION
						: WHOLE_LINE_DURATION;
				await new Promise((r) => setTimeout(r, total));
			}
		};

		if (isInView) run();
	}, [isInView, controlsArray, textLines]);

	return (
		<section
			className={`${styles.cta}  ${className || ''}`}
			aria-labelledby='cta_bar-heading'
			ref={ref}
			style={bgImgae ? { background: `url(${bgImgae})` } : undefined}>
			<h3 id='cta_bar-heading' className={styles.heading}>
				{textLines.map((line, lineIndex) => {
					if (lineIndex === 0) {
						let offset = 0;

						return (
							<motion.div
								key={lineIndex}
								variants={lineContainerVariants}
								initial='hidden'
								animate={controlsArray[lineIndex]}
								style={{ display: 'block' }}>
								{line.split(' ').map((word, wIndex) => {
									const letters = word.split('');
									const wordStartIndex = offset;
									offset += letters.length;

									return (
										<span
											key={`w-${lineIndex}-${wIndex}`}
											style={{ whiteSpace: 'nowrap', display: 'inline-block' }}>
											{letters.map((letter, li) => (
												<motion.span
													key={`l-${lineIndex}-${wIndex}-${li}`}
													variants={letterVariants}
													custom={wordStartIndex + li}
													style={{ display: 'inline-block' }}>
													{letter}
												</motion.span>
											))}
											{'\u00A0'}
										</span>
									);
								})}
							</motion.div>
						);
					}
					return (
						<motion.div
							key={lineIndex}
							variants={wholeLineVariants}
							initial='hidden'
							animate={controlsArray[lineIndex]}
							style={{ display: 'block', transformOrigin: 'center' }}>
							{line}
						</motion.div>
					);
				})}
			</h3>

			<Link href={redirectTo} className={styles.button}>
				{buttonLabel}
			</Link>
		</section>
	);
};
