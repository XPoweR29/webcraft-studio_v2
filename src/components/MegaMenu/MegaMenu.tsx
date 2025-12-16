import React from 'react';
import styles from './MegaMenu.module.scss';
import Link from 'next/link';
import { Variants, motion } from 'framer-motion';
import { useMegaMenu } from '@/hooks/useMegaMenu';
import Image from 'next/image';
import { LINKS_MAP } from '@/config/links.config';

export const MegaMenu = () => {
	const { openMenu, closeMenu, isSubmenuOpen } = useMegaMenu();

	const menuVariants: Variants = {
		open: {
			y: 0,
			opacity: 1,
			visibility: 'visible',
			pointerEvents: 'auto',
			transition: { duration: 0.3, ease: 'easeInOut' },
		},
		closed: {
			y: -20,
			opacity: 0,
			visibility: 'hidden',
			pointerEvents: 'none',
			transition: { duration: 0.3, ease: 'easeInOut' },
		},
	};

	return (
		<motion.ul
			className={styles.megaMenu}
			onMouseEnter={openMenu}
			onMouseLeave={closeMenu}
			initial='closed'
			variants={menuVariants}
			animate={isSubmenuOpen ? 'open' : 'closed'}>
			{LINKS_MAP.find((link) => link.id === 'offer')?.children?.map(
				(sublink) => (
					<li key={sublink.href}>
						<Link href={`${sublink.href}`} className={styles.linkItem}>
							<Image
								src={sublink.icon}
								className={styles.icon}
								alt={sublink.altIcon}
								draggable={false}
							/>
							<div className={styles.description}>
								<span className={styles.title}>{sublink.label}</span>
								<span className={styles.text}>{sublink.description}</span>
							</div>
						</Link>
					</li>
				)
			)}
		</motion.ul>
	);
};
