'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay } from 'swiper/modules';
import { useBreakpoints } from '@/hooks/useBreakpoint';
import styles from './ProjectsSwiper.module.scss';

import { ProjectCard } from '../ProjectCard/ProjectCard';
import { RECENT_PROJECTS } from '@/utils/getProjectsInfo';

interface Props {
	className?: string;
	excludeSlug?: string;
}

export const ProjectsSwiper = ({ className, excludeSlug }: Props) => {
	const { breakpoint } = useBreakpoints();

	const projectsToShow = excludeSlug
		? RECENT_PROJECTS.filter(p=>p.caseStudyLink !== excludeSlug)
		: RECENT_PROJECTS;

	return (
		<Swiper
			className={`${styles.swiper} ${className}`}
			modules={[A11y, Autoplay]}
			spaceBetween={breakpoint.lg ? 70 : 30}
			slidesPerView={breakpoint.lg ? 2 : 1}
			autoplay={{
				delay: 5000,
			}}
			loop={true}>
			{projectsToShow.map((project) => (
				<SwiperSlide key={project.caseStudyLink}>
					<ProjectCard {...project} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};
