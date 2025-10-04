import Image, { StaticImageData } from 'next/image';
import React from 'react';
import styles from './ProjectInfoItem.module.scss';


interface Props {
	icon: string | StaticImageData;
	info: string;
};

export const ProjectInfoItem = ({icon, info}: Props) => {
	return (
		<div className={styles.info_item}>
			<Image className={styles.icon} src={icon} alt='' aria-hidden={true} draggable={false} />
			<span>{info}</span>
		</div>
	);
};
