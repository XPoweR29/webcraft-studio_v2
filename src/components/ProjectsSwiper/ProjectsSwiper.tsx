'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay } from 'swiper/modules';
import { useBreakpoints } from '@/hooks/useBreakpoint';
import styles from './ProjectsSwiper.module.scss';

import { PROJECTS } from '@/config/projects.config';
import { ProjectCard } from '../ProjectCard/ProjectCard';

export const ProjectsSwiper = ({ className }: { className?: string }) => {
	const { breakpoint } = useBreakpoints();
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
			{PROJECTS.map((project) => (
				<SwiperSlide key={project.caseStudyLink}>
					<ProjectCard {...project} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};
