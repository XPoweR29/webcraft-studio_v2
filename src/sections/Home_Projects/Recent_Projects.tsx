import React from 'react';
import styles from './Recent_Projects.module.scss';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { ProjectsSwiper } from '@/components/ProjectsSwiper/ProjectsSwiper';

interface Props {
	heading: React.ReactNode | string;
	text: string;
	excludeProjectSlug?: string;
	className?: string;
}
export const Recent_Projects = ({heading, text, excludeProjectSlug, className}: Props) => {
	return (
		<section className={`${styles.section} ${className}`} aria-labelledby='home_recent_project'>
			<Wrapper>
				<h2 className={styles.heading} id='home_recent_project'>
					{heading}
				</h2>
				<p className={styles.text}>
					{text}
				</p>

				<ProjectsSwiper className={styles.recentProjects} excludeSlug={excludeProjectSlug}/>
			</Wrapper>
		</section>
	);
};
