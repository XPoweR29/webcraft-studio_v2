'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay } from 'swiper/modules';
import { useBreakpoints } from '@/hooks/useBreakpoint';
import styles from './ProjectsSwiper.module.scss';

import 'swiper/css';
import { PROJECTS } from '@/assets/data/projects';
import { ProjectCard } from '../ProjectCard/ProjectCard';

export const ProjectsSwiper = ({ className }: { className?: string }) => {
	const { breakpoint } = useBreakpoints();
	return (
		<Swiper
			className={`${styles.swiper} ${className}`}
			modules={[A11y, Autoplay]}
			spaceBetween={breakpoint.xxl?50:30}
			slidesPerView={breakpoint.xl ? 3 : breakpoint.md ? 2 : 1}
			autoplay={{
				delay: 5000,
			}}
			loop={true}>
			{PROJECTS.map(({mockupImg, imgAlt, url, title, excerpt}, index) => (
				<SwiperSlide key={index}>
					<ProjectCard
						mockupImg={mockupImg}
						imgAlt={imgAlt}
						url={url}
						title={title}
						excerpt={excerpt}
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
};
