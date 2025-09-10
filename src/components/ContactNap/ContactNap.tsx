'use client';

import React from 'react';
import styles from './ContactNap.module.scss';
import { Wrapper } from '../Wrapper/Wrapper';
import { ContactForm } from '../ContactForm/ContactForm';
import Image from 'next/image';
import fb_icn from '../../assets/icons/facebook_icon.svg';
import phone_icn from '../../assets/icons/phone_icon.svg';
import env_icn from '../../assets/icons/envelope_icon.svg';
import { useBreakpoints } from '@/hooks/useBreakpoint';
import { Variants, motion } from 'framer-motion';
import { SITE_CONFIG } from '@/config/site.config';

interface Props {
	className?: string;
}

export const listVariants: Variants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.3,
		},
	},
};

export const itemVariants: Variants = {
	hidden: {
		x: -200,
		opacity: 0,
		filter: 'blur(20px)' as any,
	},
	visible: {
		x: 0,
		opacity: 1,
		filter: 'blur(0)' as any,
		transition: {
			duration: 2,
			ease: [0.25, 0.1, 0.25, 1],
		},
	},
};

export const ContactNap = ({ className }: Props) => {
	const { breakpoint } = useBreakpoints();

	return (
		<section className={`${styles.section} ${className}`}>
			<Wrapper className={styles.wrapper}>
				<address>
					< motion.ul className={styles.napContainer}
					initial={'hidden'}
					whileInView={'visible'}
					variants={listVariants}
					viewport={{once: true, amount: 0.2}}
					>
						<motion.li className={styles.napItem} variants={itemVariants}>
							<a
								href={`tel:${SITE_CONFIG.contact.phoneHref}`}
								aria-label='Zadzwoń do nas'>
								<Image
									src={phone_icn}
									alt=''
									draggable={false}
									className={styles.icon}
									aria-hidden={true}
								/>

								<div className={styles.container}>
									<span>+48 {SITE_CONFIG.contact.phone}</span>
									<p>Zadzwoń, a udzielimy ci niezbędnych informacji</p>
								</div>
							</a>
						</motion.li>

						<motion.li className={styles.napItem} variants={itemVariants}>
							<a
								href={`mailto:${SITE_CONFIG.contact.email}`}
								aria-label='Napisz wiadomość email'>
								<Image
									className={styles.icon}
									src={env_icn}
									alt=''
									draggable={false}
									aria-hidden={true}
								/>

								<div className={styles.container}>
									<span>{SITE_CONFIG.contact.email}</span>
									<p>Napisz bezpośrednio lub skorzystaj z formularza</p>
								</div>
							</a>
						</motion.li>

						<motion.li className={styles.napItem} variants={itemVariants}>
							<a
								href={SITE_CONFIG.externalLinks.facebook!}
								target='_blank'
								rel='noopener noreferrer'
								aria-label='Śledź nas na Facebooku'>
								<Image
									className={styles.icon}
									src={fb_icn}
									alt=''
									draggable={false}
									aria-hidden={true}
								/>

								<div className={styles.container}>
									<span>/facebook</span>
									<p>Śledź nas na socialach, aby być na bieżąco</p>
								</div>
							</a>
						</motion.li>
					</motion.ul>
					{breakpoint.lg && (
						<Image
							className={styles.image}
							src={'/img/contactImg.webp'}
							alt='Tworzenie i pozycjonowanie stron internteowych'
							draggable={false}
							width={550}
							height={350}
							sizes='
								(min-width: 1200px) 500px, 
								384px'
						/>
					)}
				</address>

				<ContactForm />
			</Wrapper>
		</section>
	);
};
