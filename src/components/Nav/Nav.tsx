'use client';
import styles from './Nav.module.scss';
import Link from 'next/link';
import { LINKS_MAP } from '@/config/links.config';
import { useHomeScrollTop } from '@/hooks/useHomeScrollTop';
import { useMegaMenu } from '../../hooks/useMegaMenu';
import { MegaMenu } from '../MegaMenu/MegaMenu';

export const Nav = () => {
	const handleScrollTop = useHomeScrollTop();
	const { openMenu, closeMenu } = useMegaMenu();

	return (
		<nav>
			<ul className={styles.linkbar}>
				{LINKS_MAP
					.filter((link) => !link.hidden)
					.map((link) => (
						<li key={link.id} className={styles.menuItem}>
							<Link
								href={link.href}
								className={`${styles.link} ${
									link.id === 'contact' ? styles.button : ''
								}`}
								onClick={link.id === 'home' ? handleScrollTop : undefined}
								onMouseEnter={link.id === 'offer' ? openMenu : undefined}
								onMouseLeave={link.id === 'offer' ? closeMenu : undefined}>
								<span>{link.label}</span>
							</Link>

							{link.label === 'Oferta' && <MegaMenu />}
						</li>
					))}
			</ul>
		</nav>
	);
};
