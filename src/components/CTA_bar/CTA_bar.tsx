'use client';

import {
	motion,
	Variants,
} from 'framer-motion';
import styles from './CTA_bar.module.scss';
import Link from 'next/link';

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
	visible: (delay: number) => ({
		opacity: 1,
		y: 0,
		scale: 1,
		filter: 'blur(0px)',
		transition: { delay, duration: WHOLE_LINE_DURATION, ease: 'easeOut' },
	}),
};

export const CTA_bar = ({
	textLines,
	redirectTo,
	buttonLabel,
	className,
	bgImgae,
}: Props) => {
	let accumulationDelay = 0;
	const startTimes = textLines.map((line, i) => {
		const startTime = accumulationDelay;
		if (i === 0) {
			const len = line.replace(/\s/g, '').length;
			accumulationDelay += (len - 1) * LETTER_STAGGER + LETTER_DURATION;
		} else {
			accumulationDelay += WHOLE_LINE_DURATION;
		}
		return startTime;
	});

	return (
		<motion.section
			className={`${styles.cta}  ${className || ''}`}
			aria-labelledby='cta_bar-heading'
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.6 }}
			style={bgImgae ? { background: `url(${bgImgae})` } : undefined}>
			<h3 id='cta_bar-heading' className={styles.heading}>
				{textLines.map((line, lineIndex) => {
					if (lineIndex === 0) {
						let offset = 0;

						return (
							<motion.div
								key={lineIndex}
								variants={lineContainerVariants}
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
							custom={startTimes[lineIndex]}
							style={{ display: 'block', transformOrigin: 'center' }}>
							{line}
						</motion.div>
					);
				})}
			</h3>

			<Link href={redirectTo} className={styles.button}>
				{buttonLabel}
			</Link>
		</motion.section>
	);
};
