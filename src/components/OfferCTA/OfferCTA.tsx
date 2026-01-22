'use client';

import styles from './OfferCTA.module.scss';
import Link from 'next/link';
import { linkHref } from '@/utils/linkHref.helper';
import Image from 'next/image';
import sitesIcon from '../../assets/icons/sites_accent_icon.svg';
import seoIcon from '../../assets/icons/seo_accent_icon.svg';
import gmbIcon from '../../assets/icons/gmb_accent_icon.svg';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useBreakpoints } from '@/hooks/useBreakpoint';

export const OfferCTA = ({ className }: { className?: string }) => {
	const { breakpoint } = useBreakpoints();
	return (
		<section className={`${styles.cta} ${className}`}>
			<Image
				className={styles.sketchImg}
				src={'/img/progress_Sketch.svg'}
				alt=''
				aria-hidden={true}
				draggable={false}
				width={480}
				height={460}
			/>

			<div className={styles.contentContainer}>
				<h3 className={styles.title}>Zacznij budować swoją obecność w sieci</h3>
				<p className={styles.text}>
					Od projektu graficznego, przez kodowanie, po SEO i Google Moja Firma –
					pomogę Ci zdobyć klientów online.
				</p>

				{breakpoint.md && (
					<Link href={linkHref('offer')} className={styles.button}>
						Zobacz ofertę{' '}
						<Icon icon='solar:arrow-right-broken' className={styles.icon} />
					</Link>
				)}
			</div>

			<ul className={styles.list}>
				<li className={styles.item}>
					<div className={styles.heading}>
						<Image
							className={styles.icon}
							src={sitesIcon}
							alt=''
							aria-hidden={true}
							draggable={false}
						/>
						<h4>Strony internetowe</h4>
					</div>
					<p className={styles.description}>
						Indywidualne projekty w oparciu o Twój biznes. Bez gotowych
						szablonów, nowoczesne i responsywne.
					</p>
				</li>

				<li className={styles.item}>
					<div className={styles.heading}>
						<Image
							className={styles.icon}
							src={seoIcon}
							alt=''
							aria-hidden={true}
							draggable={false}
						/>
						<h4>SEO</h4>
					</div>
					<p className={styles.description}>
						Optymalizacja, która zwiększa widoczność w Google i pomaga dotrzeć
						do klientów szukających Twoich usług.
					</p>
				</li>

				<li className={styles.item}>
					<div className={styles.heading}>
						<Image
							className={styles.icon}
							src={gmbIcon}
							alt=''
							aria-hidden={true}
							draggable={false}
						/>
						<h4>Google Moja Firma</h4>
					</div>
					<p className={styles.description}>
						Dopracowana wizytówka Google, która przyciąga klientów z Twojej
						okolicy.
					</p>
				</li>
			</ul>

			{!breakpoint.md && (
				<Link href={linkHref('offer')} className={styles.button}>
					Zobacz ofertę{' '}
					<Icon icon='solar:arrow-right-broken' className={styles.icon} />
				</Link>
			)}
		</section>
	);
};
