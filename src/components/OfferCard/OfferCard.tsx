import Image from 'next/image';
import React from 'react';
import styles from './OfferCard.module.scss';
import Link from 'next/link';
import { offerCardType } from '@/assets/data/offerCards';


export const OfferCard = ({ icon, title, description, pageUrl, bgImg, bgImgClass }: offerCardType) => {
	return (
		<li className={styles.offerCard}>
			<Link href={pageUrl}>
				<Image
					src={icon}
					className={styles.icon}
					alt=''
					aria-hidden
					draggable={false}
				/>
				<h3>{title}</h3>
				<p>{description}</p>
				<Image
					src={bgImg}
					width={150}
					height={150}
					className={`${styles.bgImg} ${bgImgClass?styles[bgImgClass]:''}`}
					alt=''
					aria-hidden
					draggable={false}
				/>
			</Link>
		</li>
	);
};
