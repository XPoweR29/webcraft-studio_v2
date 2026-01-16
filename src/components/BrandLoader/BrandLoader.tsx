'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './BrandLoader.module.scss';
import { usePageVisibility } from '@/hooks/usePageVisibility';

interface Props {
	duration?: number;
}
export const BrandLoader = ({ duration = 1700 }: Props) => {
	const isVisible = usePageVisibility();

	return (
		<motion.div 
			className={styles.loaderBackground}
			exit={{opacity: 0}}
			transition={{duration: 0.2}}
			>
			{isVisible && (
				<div className={styles.loaderContainer}>
					<motion.div
						initial={{ opacity: 0, filter: 'blur(12px)', scale: 0.96 }}
						animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
						transition={{ duration: 0.3, ease: 'easeOut', delay: 0.1 }}>
						<Image
							className={styles.loaderLogo}
							src={'/img/logo_dark.svg'}
							width={250}
							height={52}
							alt=''
							priority
						/>
					</motion.div>
					<div
						className={styles.loader}
						style={{
							['--loader-duration' as string]: `${duration - 200}ms`,
						}}></div>
				</div>
			)}
		</motion.div>
	);
};

