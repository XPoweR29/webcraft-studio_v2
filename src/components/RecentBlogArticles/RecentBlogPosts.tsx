'use client';

import React from 'react';
import styles from './RecenntBlogPosts.module.scss';
import { BlogCard } from '../BlogCard/BlogCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay } from 'swiper/modules';
import { useBreakpoints } from '@/hooks/useBreakpoint';
import { PostPageConfig } from '@/types/blog.type';

interface Props {
	articles: PostPageConfig[];
	className?: string;
}

export const RecentBlogPosts = ({ className, articles }: Props) => {
	const { breakpoint } = useBreakpoints();
	return (
		<Swiper
			className={`${styles.swiper} ${className}`}
			modules={[A11y, Autoplay]}
			spaceBetween={30}
			slidesPerView={breakpoint.xl ? 3 : breakpoint.lg ? 2 : 1}
			autoplay={{
				delay: 5000,
			}}
			loop={true}>
			{articles.map((post, i) => (
				<SwiperSlide key={`${post.metadata.slug}${i}`}>
					<BlogCard {...post} href={post.metadata.relPath!}/>
				</SwiperSlide>
			))}
		</Swiper>
	);
};
