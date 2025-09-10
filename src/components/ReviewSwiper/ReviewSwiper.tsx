'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay } from 'swiper/modules';
import { useBreakpoints } from '@/hooks/useBreakpoint';
import { REVIEWS } from '@/config/reviews.config';
import starsImg from '../../assets/icons/stars.svg';

import styles from './ReviewSwiper.module.scss';
import Image from 'next/image';
import { QuoteIcon } from '../QuoteIcon/QuoteIcon';

export const ReviewSwiper = ({ className }: { className?: string }) => {
	const { breakpoint } = useBreakpoints();
	return (
		<Swiper
			className={`${styles.swiper} ${className}`}
			modules={[A11y, Autoplay]}
			spaceBetween={30}
			slidesPerView={breakpoint.xxl ? 3 : breakpoint.lg ? 2 : 1}
			autoplay={{
				delay: 5000,
			}}
			loop={true}>
			{REVIEWS.map(({ author, comment }, index) => (
				<SwiperSlide key={index}>
					<div
						className={`${styles.reviewCard} reviewCard ${
							index % 2 ? styles['reviewCard--odd'] : ''
						}`}>
						<div className={styles.nick}>
							<p className={styles.author}>{author}</p>
							<Image
								src={starsImg}
								className={styles.starsImg}
								alt=''
								draggable={false}
								aria-hidden={true}
							/>
						</div>

						<p className={styles.comment}>{comment}</p>

						<QuoteIcon
							className={`${styles.quoteIcon} ${styles['quoteIcon--top']}`}
							color={index%2?'white':'#263849'}
						/>
						<QuoteIcon
							className={`${styles.quoteIcon} ${styles['quoteIcon--bottom']}`}
							color={index%2?'white':'#263849'}
						/>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};
