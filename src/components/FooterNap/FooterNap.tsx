import React from 'react';
import styles from './FooterNap.module.scss';
import Image from 'next/image';
import phone_icn from '../../assets/icons/phone_icon_white.svg';
import env_icn from '../../assets/icons/envelope_icon_white.svg';
import { SITE_CONFIG } from '@/config/site.config';

interface Props {
	className?: string;
}

export const FooterNap = ({ className }: Props) => {
	return (
		<section className={`${styles.section} ${className}`}>
			<address>
				<span className='sr-only'>
					{SITE_CONFIG.siteName}
				</span>
				<ul className={styles.napContainer}>
					<li className={styles.napItem}>
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
							<span>+48 {SITE_CONFIG.contact.phone}</span>
						</a>
					</li>

					<li className={styles.napItem}>
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

							<span>{SITE_CONFIG.contact.email}</span>
						</a>
					</li>

					<li className={styles.napItem}>
						<p className={styles.addressText}>
							ul. {SITE_CONFIG.address.streetAddress}{', '}{SITE_CONFIG.address.postalCode} {SITE_CONFIG.address.city}
						</p>
					</li>
				</ul>
			</address>
		</section>
	);
};
