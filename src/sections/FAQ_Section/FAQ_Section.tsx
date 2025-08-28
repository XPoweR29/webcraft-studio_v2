'use client';

import React from 'react';
import styles from './FAQ_Section.module.scss';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { Accordion, AccordionItem } from '@/components/Accordion/Accordion';
import Image from 'next/image';
import Link from 'next/link';
import { linkHref } from '@/utils/linkHref.helper';
import { motion, Variants } from 'framer-motion';

interface Props {
	items: AccordionItem[];
}

const headingVariants: Variants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const wordVariants: Variants = {
	hidden: {
		opacity: 0,
		x: -50,
		filter: 'blur(4px)',
	},
	visible: {
		opacity: 1,
		x: 0,
		filter: 'blur(0px)',
		transition: {
			duration: 2,
			ease: [0.25, 1, 0.5, 1],
		},
	},
};

export const FAQ_Section = ({ items }: Props) => {
	return (
		<section className={styles.section}>
			<Wrapper className={styles.wrapper}>
				<div className={styles.headingContainer}>
					<h2 className={styles.heading}>FAQ</h2>
					<motion.h3
						className={styles.subheading}
						variants={headingVariants}
						initial={'hidden'}
						whileInView={'visible'}
						viewport={{ once: true, amount: 1 }}>
						<motion.span variants={wordVariants}>Najczęściej</motion.span>
						<motion.span variants={wordVariants}>zadawane</motion.span>
						<motion.span variants={wordVariants}>pytania</motion.span>
					</motion.h3>
				</div>

				<div className={styles.flexContainer}>
					<Accordion
						className={styles.accordion}
						allowMultiopen={true}
						items={items}
					/>

					<div className={styles.cta_container}>
						<h3 className={styles.cta_title}>Masz więcej pytań?</h3>
						<p className={styles.cta_text}>
							Czasem jedno pytanie wystarczy, żeby ruszyć z tematem. Jeśli nie
							znalazłeś tu odpowiedzi, odezwij się — chętnie wyjaśnię wszystko
							na spokojnie.{' '}
						</p>

						<Link href={linkHref('contact')} className={styles.cta_btn}>
							skontaktuj się
						</Link>
					</div>
				</div>

				<Image
					src={'/img/questions_sketch.svg'}
					className={styles.sketchImg}
					alt=''
					draggable={false}
					aria-hidden={true}
					width={650}
					height={620}
				/>
			</Wrapper>
		</section>
	);
};
