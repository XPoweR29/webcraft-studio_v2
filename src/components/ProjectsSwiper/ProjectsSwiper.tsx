'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay } from 'swiper/modules';
import { useBreakpoints } from '@/hooks/useBreakpoint';
import styles from './ProjectsSwiper.module.scss';

import { ProjectCard } from '../ProjectCard/ProjectCard';
import { usePathname } from 'next/navigation';
import { PROJECTS } from '@/config/projectsContent/_reigistry';

interface Props {
	className?: string;
	excludeSlug?: string;
}

export const ProjectsSwiper = ({ className, excludeSlug }: Props) => {
	const { breakpoint } = useBreakpoints();
	const pathname = usePathname();
	const currSlug = pathname.split('/').pop();

	const projectsToShow = excludeSlug
		? PROJECTS.filter(p=>!p.metadata.slug?.includes(currSlug!))
		: PROJECTS;

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
				<SwiperSlide key={project.metadata.slug}>
					<ProjectCard {...project.previewInfo} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};
