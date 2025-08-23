import React from 'react';
import styles from './Home_Start.module.scss';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { WordFlipper } from '@/components/WordFlipper/WordFlipper';
import { AuroraBackground } from '@/components/AuroraBg/AuroraBg';
import { Icon } from '@iconify/react';
import Image from 'next/image';

import check_icon from '../../assets/icons/citcle_check_icon.svg';
import Link from 'next/link';
import { linkHref } from '@/utils/linkHref.helper';
import { OfferCard } from '@/components/OfferCard/OfferCard';
import { offerCards } from '@/assets/data/offerCards';

export const HomeStart = async () => {
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

							<ul className={styles.features}>
								<li className={styles.featureItem}>
									<Image
										src={check_icon}
										className={styles.icon}
										alt=''
										draggable={false}
										aria-hidden
									/>
									<span>Indywidualny projekt</span>
								</li>
								<li className={styles.featureItem}>
									<Image
										src={check_icon}
										className={styles.icon}
										alt=''
										draggable={false}
										aria-hidden
									/>
									<span>Widoczność w Google</span>
								</li>
								<li className={styles.featureItem}>
									<Image
										src={check_icon}
										className={styles.icon}
										alt=''
										draggable={false}
										aria-hidden
									/>
									<span>Konkurencyjna oferta</span>
								</li>
							</ul>

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
								{offerCards.map((card, i) => (
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
