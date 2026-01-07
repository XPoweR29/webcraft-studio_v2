import Image from 'next/image';
import React from 'react';
import styles from './BrandLoader.module.scss';

export const BrandLoader = () => {
	return (
		<div className={styles.loaderBackground}>
			<div className={styles.loaderContainer}>
				<Image
					className={styles.loaderLogo}
					src={'/img/logo_dark.svg'}
					width={250}
					height={52}
					alt=''
					priority
				/>
				<div className={styles.loader}></div>
			</div>
		</div>
	);
}
