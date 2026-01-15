'use client';

import React from 'react';
import styles from './Home_Start.module.scss';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { WordFlipper } from '@/components/WordFlipper/WordFlipper';
import { AuroraBackground } from '@/components/AuroraBg/AuroraBg';
import { Icon } from '@iconify/react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

import check_icon from '../../assets/icons/citcle_check_icon.svg';
import Link from 'next/link';
import { linkHref } from '@/utils/linkHref.helper';
import { OfferCard } from '@/components/OfferCard/OfferCard';
import { OFFER_CARD_LINKING } from '@/config/offerLinking.config';
import { useBrandLoader } from '@/hooks/useBrandLoader';

export const listVariants: Variants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.5,
		},
	},
};

export const itemVariants: Variants = {
	hidden: {
		x: -500,
		scaleX: 2.5,
		scaleY: 0.2,
		opacity: 0,
		filter: 'blur(20px)' as any,
	},
	visible: {
		x: 0,
		scaleX: 1,
		scaleY: 1,
		opacity: 1,
		filter: 'blur(0)' as any,
		transition: {
			duration: 2,
			ease: [0.25, 0.1, 0.25, 1],
		},
	},
};

export const Home_Start = () => {
	const { isLoaded } = useBrandLoader();

	return (
		<section className={styles.section}>
			<Wrapper className={styles.wrapper}>
				<div className={styles.heroContainer}>
					<div className={styles.upperBox}>
						<AuroraBackground className={styles.auroraBg}>
							<h1 className={styles.heroHeading}>
								<span className={styles.line1}>Stworzymy</span>
								<WordFlipper
									className={styles.line2}
									words={[
										'stronę internetową',
										'optymalizację SEO',
										'wizytówkę Google',
										'rozwiązania online',
									]}
								/>
								<span className={styles.line3}>dla Twojego biznesu</span>
							</h1>

							<p className={styles.text}>
								Jeśli zależy Ci na stronie, która nie tylko wygląda, ale też
								pracuje na Twój biznes – jesteś we właściwym miejscu. Tworzę
								dopracowane witryny, które wyróżniają się stylem, i
								efektywnością oraz są widoczne tam, gdzie szukają Twoi klienci.
							</p>

							<motion.ul
								className={styles.features}
								variants={listVariants}
								initial='hidden'
								whileInView={isLoaded ? 'visible' : 'hidden'}
								viewport={{ once: true, amount: 0.3 }}>
								<motion.li
									className={styles.featureItem}
									variants={itemVariants}>
									<Image
										src={check_icon}
										className={styles.icon}
										alt=''
										draggable={false}
										aria-hidden
									/>
									<span>Indywidualny projekt</span>
								</motion.li>
								<motion.li
									className={styles.featureItem}
									variants={itemVariants}>
									<Image
										src={check_icon}
										className={styles.icon}
										alt=''
										draggable={false}
										aria-hidden
									/>
									<span>Widoczność w Google</span>
								</motion.li>
								<motion.li
									className={styles.featureItem}
									variants={itemVariants}>
									<Image
										src={check_icon}
										className={styles.icon}
										alt=''
										draggable={false}
										aria-hidden
									/>
									<span>Konkurencyjna oferta</span>
								</motion.li>
							</motion.ul>

							<div className={styles.buttonContainer}>
								<Link
									href={linkHref('offer')}
									className={`${styles.button} ${styles['button--offer']}`}>
									Poznaj ofertę
								</Link>
								<Link
									href={linkHref('portfolio')}
									className={`${styles.button} ${styles['button--portfolio']}`}>
									<span>Portfolio</span>
									<Icon
										icon='solar:arrow-right-broken'
										className={styles.icon}
									/>
								</Link>
							</div>
						</AuroraBackground>
					</div>

					<div className={styles.lowerBox}>
						<Image
							className={styles.rocketImg}
							src={'/img/rocket_sketch.svg'}
							width={90}
							height={120}
							alt=''
							aria-hidden
							priority
							draggable={false}
						/>

						<motion.div
							className={styles.mainImgWrapper}
							initial={{ opacity: 0, x: 100 }}
							whileInView={
								isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
							}
							transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
							viewport={{ once: true, amount: 0.3 }}>
							<Image
								className={styles.mainImg}
								src={'/img/websites.webp'}
								alt='Projektowanie stron internetowych'
								width={750}
								height={650}
								sizes='
								(min-width: 576px) 540px, 
								(min-width: 430px) 400px,
								(min-width: 768px) 500px,
								(min-width: 992px) 650px,
								(min-width: 1200px) 700px,
								300px'
								priority
								draggable={false}
							/>
						</motion.div>
						<h2 className={styles.heading}>
							<span className={styles.line1}>Przenieś swoją markę</span>
							<span className={styles.line2}>Na wyższy poziom</span>
						</h2>

						<section aria-labelledby='services'>
							<h2 id='services' className='sr-only'>
								Moje usługi
							</h2>
							<p className={styles.lowerText}>
								W WebCraftSTUDIO tworzę rozwiązania dopasowane do Twojej branży
								i celów – od prostych stron firmowych po kompleksowe wdrożenia z
								SEO i wizytówką Google. Zobacz, co mogę dla Ciebie zrobić.
							</p>

							<ul className={styles.offerContainer}>
								{OFFER_CARD_LINKING.map((card, i) => (
									<OfferCard
										key={card.pageUrl}
										title={card.title}
										description={card.description}
										icon={card.icon}
										bgImg={card.bgImg}
										bgImgClass={card.bgImgClass}
										pageUrl={card.pageUrl}
									/>
								))}
							</ul>
						</section>
					</div>
				</div>
			</Wrapper>
		</section>
	);
};
