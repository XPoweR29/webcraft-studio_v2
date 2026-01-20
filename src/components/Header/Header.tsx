'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.scss';

import { useHeaderBehavior } from '@/hooks/useHeaderBehavior';
import { useAppContext } from '@/hooks/useAppContext';
import { BurgerBtn } from '../BurgerBtn/BurgerBtn';
import { Nav } from '../Nav/Nav';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import { Wrapper } from '../Wrapper/Wrapper';

import { useHomeScrollTop } from '@/hooks/useHomeScrollTop';

export const Header = () => {
	const { mobileMenuShown, setMobileMenuShown } = useAppContext();
	const { showNav } = useHeaderBehavior({ scrollHide: true });

	const handleScrollTop = useHomeScrollTop();

	return (
			<header
				className={`${styles.header} ${
					mobileMenuShown ? styles['activeMobileMenu'] : ''
				} ${!showNav ? styles['header--hidden'] : ''}`}>
				<Wrapper>
					<div className={styles.navbar_container}>
						<Link
							href={'/'}
							className={styles.logo}
							onClick={handleScrollTop}
							aria-label='WebCraft STUDIO'
							rel='preload'>
							<Image src={'/img/logo_dark.svg'} width={250} height={52} alt='' priority />
						</Link>

							<Nav className={styles.desktopNav}/>
							<BurgerBtn
								className={styles.burgerBtn}
								mobileMenuShown={mobileMenuShown}
								toggleMenu={setMobileMenuShown}
							/>

						{mobileMenuShown && <MobileMenu />}
					</div>
				</Wrapper>
			</header>
	);
};
