'use client';

import React from 'react';
import styles from './Process_Section.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { Wrapper } from '../Wrapper/Wrapper';
import { motion, Variants } from 'framer-motion';
import { useBreakpoints } from '@/hooks/useBreakpoint';
import { Icon } from '@iconify/react/dist/iconify.js';

interface Props {
	heading: string;
	children: React.ReactNode;
	btnLabel: string;
	redirectTo: string;
	steps: StepType[];
	bgImage: string;
}

export type StepType = {
	title: string;
	text: string;
};

const stepVariants: Variants = {
	hidden: (custom: { i: number; isDesktop: boolean }) => ({
		opacity: 0,
		x: custom.isDesktop ? 0 : custom.i % 2 === 0 ? 80 : -80,
		y: custom.isDesktop ? 80 : 0,
		filter: 'blur(8px)',
	}),
	visible: {
		opacity: 1,
		x: 0,
		y: 0,
		filter: 'blur(0px)',
		transition: { duration: 0.55, ease: 'easeOut' },
	},
};
export const Process_Section = ({
	heading,
	children,
	btnLabel,
	redirectTo,
	bgImage,
	steps,
}: Props) => {
	const { breakpoint } = useBreakpoints();
	const isDesktop = !!breakpoint.lg;

	return (
		<section className={styles.section}>
			<Wrapper className={styles.wrapper}>
				<Image
					src={bgImage}
					className={styles.bgImage}
					alt=''
					aria-hidden={true}
					draggable={false}
					width={400}
					height={180}
				/>

				<div className={styles.flexContainer}>
					<h2 className={styles.heading}>{heading}</h2>
					<p className={styles.text}>{children}</p>
					{breakpoint.lg && (
						<Link href={redirectTo} className={styles.button}>
							{btnLabel}
							<Icon icon='solar:arrow-right-broken' className={styles.icon} />
						</Link>
					)}
				</div>

				<ul className={styles.stepList}>
					{steps.map((s, i) => (
						<motion.li
							className={styles.step}
							key={`${isDesktop ? 'desk' : 'mob'}_${i}`}
							custom={{ i, isDesktop }}
							variants={stepVariants}
							initial='hidden'
							whileInView={'visible'}
							viewport={{ once: false, amount: 0.35 }}>
							<h3>
								{' '}
								<span>{`0${i + 1}.`}</span>
								{s.title}
							</h3>
							<p>{s.text}</p>
						</motion.li>
					))}
				</ul>

				{!breakpoint.lg && (
					<Link href={redirectTo} className={styles.button}>
						{btnLabel}{' '}
						<Icon icon='solar:arrow-right-broken' className={styles.icon} />
					</Link>
				)}
			</Wrapper>
		</section>
	);
};
