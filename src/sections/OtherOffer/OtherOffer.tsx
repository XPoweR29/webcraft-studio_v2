'use client';

import { Wrapper } from '@/components/Wrapper/Wrapper';
import React from 'react';
import styles from './OtherOffer.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react/dist/iconify.js';
import { usePathname } from 'next/navigation';
import { motion, Variants } from 'framer-motion';

interface Props {
	heading: React.ReactNode;
	text: string;
	offerLinks: OfferLink[];
}

const variants: Variants = {
	hidden: {
		y: 100,
		scale: 1.2,
		filter: 'blur(8px)',
		opacity: 0,
	},
	visible: {
		y: 0,
		scale: 1,
		filter: 'blur(0px)',
		opacity: 1,

		transition: {
			duration: 0.5,
			ease: 'easeOut',
		},
	},
};

export const OtherOffer = ({ heading, text, offerLinks }: Props) => {
	const pathname = usePathname();
	const filteredLinks = offerLinks.filter((link) => link.href !== pathname);

	return (
		<section className={styles.section}>
			<Wrapper className={styles.wrapper}>
				<h2 className={styles.heading}>{heading}</h2>
				<p className={styles.text}>{text}</p>

				<ul className={styles.container}>
					{filteredLinks.map((link) => (
						<motion.li
							className={styles.paragraph}
							key={link.href}
							initial='hidden'
							whileInView='visible'
							variants={variants}
							viewport={{ once: true, amount: 0.4 }}>
							<Image
								src={link.sketchImg}
								className={styles.sketchImg}
								alt=''
								data-sketch={link.sketchId}
								aria-hidden={true}
								width={100}
								height={100}
							/>
							<Image
								src={link.icon}
								className={styles.icon}
								alt=''
								aria-hidden={true}
							/>

							<div className={styles.content}>
								<h3 className={styles.title}>{link.title}</h3>
								<p className={styles.description}>{link.description}</p>
								<Link href={link.href} className={styles.button}>
									<span>Sprawdź</span>
									<Icon icon='solar:arrow-right-broken' />
								</Link>
							</div>
						</motion.li>
					))}
				</ul>
			</Wrapper>
		</section>
	);
};
