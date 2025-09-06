import React from 'react';
import styles from './PricingCard.module.scss';
import Image from 'next/image';
import checkIcon from '../../assets/icons/check_icon.svg';
import infoIcon from '../../assets/icons/info_icon.svg';
import Link from 'next/link';
import { linkHref } from '@/utils/linkHref.helper';

export const PricingCard = ({
	name,
	description,
	icon,
	price,
	features,
	dark,
	info,
	pricePrefix,
}: PricingCard) => {
	return (
		<article className={`${styles.card} ${dark ? styles['card--dark'] : ''}`}>
			<header>
				<Image
					src={icon}
					className={styles.icon}
					alt=''
					aria-hidden={false}
					width={50}
					height={50}
				/>
				<div className={styles.content}>
					<h3 className={styles.title}>{name}</h3>
					<p className={styles.description}>{description}</p>
				</div>
			</header>

			<div className={styles.priceBox}>
				<div className={`${styles.info} ${!info?styles['info--disable']:''}`}>
					<Image src={infoIcon} alt='' aria-hidden={false} />
					<span>{info}</span>
				</div>
				<p className={styles.price}>
					<span className={styles.prefix}>{pricePrefix}</span>
					{price}
					<span>zł</span>
				</p>
				<span className={styles.taxInfo}>Podana cena jest ceną netto*</span>
			</div>

			<ul className={styles.featuresList}>
				{features.map((feat, i) => (
					<li className={styles.featureItem} key={`${name}_${i}`}>
						<Image
							src={checkIcon}
							className={styles.icon}
							alt=''
							aria-hidden={true}
						/>
						<p>{feat}</p>
					</li>
				))}
			</ul>

			<Link href={linkHref('contact')} className={styles.button}>
				Wybeiram
			</Link>
		</article>
	);
};
