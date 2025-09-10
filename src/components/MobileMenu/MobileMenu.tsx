'use client';

import React, { useEffect } from 'react';
import styles from './MobileMenu.module.scss';
import Link from 'next/link';
import { useAppContext } from '@/hooks/useAppContext';
import { LINKS_MAP } from '@/config/links.config';

export const MobileMenu = () => {
	const { setMobileMenuShown } = useAppContext();

	useEffect(() => {
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = '';
		};
	}, []);

	const handleClick = () => {
		setTimeout(() => {
			setMobileMenuShown(false);
		}, 10);
	};
	return (
		<nav>
			<ul className={styles.mobileMenu}>
				{LINKS_MAP
					.filter((link) => !link.hidden)
					.map((link, i) => (
						<li key={link.id}>
							<Link
								href={link.href}
								className={styles.link}
								style={{ animationDelay: `${i * 0.15}s` }}
								onClick={handleClick}>
								{link.label}
							</Link>
						</li>
					))}
			</ul>
		</nav>
	);
};
