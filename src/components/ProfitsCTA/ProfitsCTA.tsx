'use client';

import React from 'react';
import styles from './ProfitsCTA.module.scss';
import Link from 'next/link';
import { linkHref } from '@/utils/linkHref.helper';
import Image from 'next/image';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useBreakpoints } from '@/hooks/useBreakpoint';

export type ProfitItem = {
	title: string;
	description: string;
};

export interface ProfitsCTAPProps {
	className?: string;
	heading: string;
	text: string;
	children: ProfitItem[];
}

export const ProfitsCTA = ({ className, heading, text, children }: ProfitsCTAPProps) => {
	const { breakpoint } = useBreakpoints();
	return (
		<section className={`${styles.cta} ${className}`}>
			<Image
				className={styles.sketchImg}
				src={'/img/progress_Sketch.svg'}
				alt=''
				aria-hidden={true}
				draggable={false}
				width={480}
				height={460}
			/>

			<div className={styles.contentContainer}>
				<h3 className={styles.title}>{heading}</h3>
				<p className={styles.text}>{text}</p>

				{breakpoint.md && (
					<Link href={linkHref('contact')} className={styles.button}>
						Skontaktuj się{' '}
						<Icon icon='solar:arrow-right-broken' className={styles.icon} />
					</Link>
				)}
			</div>

			<ul className={styles.list}>
				{children.map((p, i) => (
					<li className={styles.item} key={`profit_${i}`}>
						<h4><span>{`0${i+1}.`}</span> {p.title}</h4>
						<p className={styles.description}>{p.description}</p>
					</li>
				))}
			</ul>

			{!breakpoint.md && (
				<Link href={linkHref('contact')} className={styles.button}>
					Skontaktuj się{' '}
					<Icon icon='solar:arrow-right-broken' className={styles.icon} />
				</Link>
			)}
		</section>
	);
};
