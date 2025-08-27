'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import styles from './Expectations.module.scss';
import { Wrapper } from '../Wrapper/Wrapper';

import icon_personal from '../../assets/icons/icon_personal.svg';
import icon_communication from '../../assets/icons/icon_communication.svg';
import icon_quality from '../../assets/icons/icon_quality.svg';
import icon_deadline from '../../assets/icons/icon_deadline.svg';
import icon_innovation from '../../assets/icons/icon_innovation.svg';
import icon_support from '../../assets/icons/icon_support.svg';
import Image from 'next/image';

const ITEMS = [
	{ icon: icon_personal, title: 'Indywidualne podejście' },
	{ icon: icon_communication, title: 'Jasna komunikacja' },
	{ icon: icon_quality, title: 'Profesjonalizm' },
	{ icon: icon_deadline, title: 'Terminowość' },
	{ icon: icon_innovation, title: 'Innowacyjne rozwiązania' },
	{ icon: icon_support, title: 'Wsparcie po wdrożeniu' },
];

const listVariants: Variants = {
	hidden: {},
	visible: {
		transition: {
			delayChildren: 0.1,
			staggerChildren: 0.15,
		},
	},
};

const itemVariants: Variants = {
	hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
	visible: {
		opacity: 1,
		y: 0,
		filter: 'blur(0px)',
		transition: { duration: 0.5, ease: 'easeOut' },
	},
};
export const Expectation = () => {
	return (
		<section className={styles.section}>
			<Wrapper className={styles.wrapper}>
				<h2 className={styles.heading}>Czego możesz oczekiwać?</h2>
				<p className={styles.text}>
					Wybierając współpracę ze mną, zyskujesz więcej niż tylko stronę
					internetową. To zestaw realnych korzyści, które wpływają na jakość
					projektu i komfort naszej współpracy.{' '}
				</p>

				<motion.ul
					className={styles.list}
					variants={listVariants}
					initial={'hidden'}
					whileInView={'visible'}
					viewport={{ once: true, amount: 0.3 }}>
					{ITEMS.map(({ icon, title }) => (
						<motion.li key={title} variants={itemVariants}>
							<Image src={icon} alt='' aria-hidden={true} draggable={false} />
							<span>{title}</span>
						</motion.li>
					))}
				</motion.ul>
			</Wrapper>
		</section>
	);
};
