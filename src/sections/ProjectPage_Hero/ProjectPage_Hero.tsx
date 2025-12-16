'use client';

import React from 'react';
import styles from './ProjectPage_Hero.module.scss';
import Image from 'next/image';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import linkIcon from '../../assets/icons/link_icon.svg';
import codeIcon from '../../assets/icons/code_icon.svg';
import { ProjectInfoItem } from '@/components/ProjectInfoItem/ProjectInfoItem';

interface Props {
	heading: string;
	subline: string;
	bgImage: string;
	className?: string;
	techStack: string;
	externalUrl: string;
}

export const ProjectPage_Hero = ({
	heading,
	bgImage,
	subline,
	techStack,
	externalUrl,
	className,
}: Props) => {
	return (
		<header className={styles.hero} aria-labelledby='page-hero-title'>
			<div className={styles.background}>
				<Image
					src={bgImage}
					alt=''
					aria-hidden={true}
					draggable={false}
					fill
					priority
					fetchPriority='high'
					sizes='100vw'
					style={{ objectFit: 'cover' }}
				/>
			</div>
			<Wrapper className={`${styles.wrapper} ${className ?? ''}`}>
				<h1 className={styles.heading} id='page-hero-title' role='text'>
					<span className={styles.mainline}>{heading}</span>
					<span className={styles.subline}>{subline}</span>
				</h1>

				<div className={styles.info}>
					<a
						href={externalUrl}
						target='_blank'
						rel='noopener noreferrer nofollow'
						aria-label='Otwórz stronę projektu w nowej karcie'
						className={styles.externalLink}>
						<ProjectInfoItem icon={linkIcon} info={externalUrl} />
					</a>
					<ProjectInfoItem icon={codeIcon} info={techStack} />
				</div>
			</Wrapper>
		</header>
	);
};
