'use client';

import React from 'react';
import styles from './ProjectPage_Content.module.scss';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { ProjectPage_Gallery } from '../ProjectPage_Gallery/ProjectPage_Gallery';

export type ServiceItem = {
	name: string;
	description: string;
};

interface Props {
	mockupImg: string;
	mockupAlt: string;
	heading: string;
	customerInfo: string;
	servicesList: ServiceItem[];
}

const variants: Variants = {
	hidden: {
		filter: 'blur(8px)',
		opacity: 0,
	},
	visible: {
		filter: 'blur(0px)',
		opacity: 1,

		transition: {
			duration: 0.5,
			ease: 'easeOut',
		}
	},
	
}

export const ProjectPage_Content = ({
	mockupImg,
	mockupAlt,
	heading,
	customerInfo,
	servicesList,
}: Props) => {
	return (
		<article className={styles.section}>
			<motion.div 
				className={styles.mockupWrapper}
				initial='hidden'
				whileInView='visible'
				variants={variants}
				viewport={{once: true, amount: 0.3}}
			>
				<Image
					className={styles.mockupImg}
					src={mockupImg}
					alt={mockupAlt}
					draggable={false}
					width={500}
					height={366}
					sizes='
					(min-width: 992px) 500px
					(min-width: 768px) 450vw,
					90vw, 
					'
				/>
			</motion.div>

			<Wrapper className={styles.wrapper}>
				<Image
					className={styles.sketchImg}
					src={'/img/magnifying_sketch.svg'}
					alt=''
					aria-hidden={true}
					draggable={false}
					width={450}
					height={380}
				/>
				<h2 className={styles.heading}>{heading}</h2>

				<div className={styles.blockContainer}>
					<section className={`${styles.block} ${styles['block--customer']}`}>
						<h3>O kliencie:</h3>
						<p>{customerInfo}</p>
					</section>

					<section className={`${styles.block} ${styles['block--service']}`}>
						<h3>Zakres usług:</h3>

						<ul className={styles.serviceList}>
							{servicesList.map(({ name, description }, i) => (
								<li className={styles.serviceItem} key={i}>
									<p>
										<strong>{name}</strong> – {description}
									</p>
								</li>
							))}
						</ul>
					</section>
				</div>
			</Wrapper>
		</article>
	);
};
