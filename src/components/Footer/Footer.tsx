'use client';

import React from 'react';
import styles from './Footer.module.scss';
import Link from 'next/link';
import { Wrapper } from '../Wrapper/Wrapper';
import Image from 'next/image';
import { siteConfig } from '@/config/site.config';
import { useHomeScrollTop } from '@/hooks/useHomeScrollTop';
import cookieIcon from '../../assets/icons/cookie_icon.svg';

import { linkHref } from '@/utils/linkHref.helper';
import { useCookieContext } from '@/hooks/useCookieContext';
import { OfferCTA } from '../OfferCTA/OfferCTA';
import { FooterNap } from '../FooterNap/FooterNap';

export const Footer = () => {
	const { setShowBanner } = useCookieContext();
	const currentYear = new Date().getFullYear();
	const handleScrollTop = useHomeScrollTop();

	return (
		<footer className={styles.footer}>
			<Wrapper className={styles.wrapper}>
				<OfferCTA className={styles.offerCTA} />
				<div className={`${styles.col1} ${styles.col}`}>
					<div className={styles.flexContainer}>
						<Link
							href={'/'}
							className={styles.logo}
							rel='preload'
							onClick={handleScrollTop}
							aria-label='Strona głowna'>
							<Image
								src={'/img/logo_bright.svg'}
								width={150}
								height={40}
								alt=''
								priority={true}
							/>
						</Link>
						<p className={styles.text}>
							Nowoczesne strony internetowe, SEO i Google Moja Firma – pomagam
							firmom rozwijać się online.
						</p>
					</div>

					<FooterNap />
				</div>

				<nav
					className={`${styles.quickLinks} ${styles.col}`}
					aria-labelledby='footer-nav'>
					<h3 className={styles.heading} id='footer-nav'>
						Szybkie linki
					</h3>
					<ul>
						<li>
							<Link href={linkHref('about')}>O mnie</Link>
						</li>
						<li>
							<Link href={linkHref('portfolio')}>Portfolio</Link>
						</li>
						<li>
							<Link href={linkHref('blog')}>Blog</Link>
						</li>
						<li>
							<Link href={linkHref('contact')}>Kontakt</Link>
						</li>
					</ul>
				</nav>

				<nav
					className={`${styles.services} ${styles.col}`}
					aria-labelledby='footer-services'>
					<h3 className={styles.heading} id='footer-services'>
						Usługi
					</h3>
					<ul>
						<li>
							<Link href={linkHref('websites')}>Strony www</Link>
						</li>
						<li>
							<Link href={linkHref('seo')}>SEO</Link>
						</li>
						<li>
							<Link href={linkHref('gmb')}>Google Moja Firma</Link>
						</li>
					</ul>
				</nav>

				<nav
					className={`${styles.socials} ${styles.col}`}
					aria-labelledby='footer-social'>
					<h3 id='footer-social' className={styles.heading}>
						Social media
					</h3>
					<ul>
						<li>
							<a
								href={siteConfig.externalLinks.facebook}
								target='_blank'
								rel='noopener noreferrer me'
								aria-label='WebCraft Studio na Facebooku'>
								Facebook
							</a>
						</li>
						<li>
							<a
								href={siteConfig.externalLinks.insta}
								target='_blank'
								rel='noopener noreferrer me'
								aria-label='WebCraft Studio na Instagramie'>
								Instagram
							</a>
						</li>
					</ul>
				</nav>
			</Wrapper>
			<div className={styles.lowerBar}>
				<p className={styles.copyright}>
					<span> © {currentYear} WebCraftSTUDIO</span>
					<span>Wszelkie prawa zastrzeżone.</span>
					<Link href={linkHref('policy')} className={styles.link}>
						Polityka prywatności
					</Link>
				</p>

				<button
					type='button'
					className={styles.cookieBtn}
					onClick={() => setShowBanner(true)}>
					<Image
						className={styles.icon}
						src={cookieIcon}
						alt=''
						aria-hidden={true}
						draggable={false}
					/>
				</button>
			</div>
		</footer>
	);
};
