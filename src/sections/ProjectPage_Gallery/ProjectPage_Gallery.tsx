'use client';

import React from 'react';
import styles from './ProjectPage_Gallery.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay } from 'swiper/modules';
import { useBreakpoints } from '@/hooks/useBreakpoint';
import Image from 'next/image';

interface Props {
	photos: string[];
	commonAlt: string;
};

export const ProjectPage_Gallery = ({ photos, commonAlt }: Props) => {
	const { breakpoint } = useBreakpoints();

	return (
		<section className={styles.section}>
			<Swiper
				className={styles.swiper}
				modules={[A11y, Autoplay]}
				spaceBetween={0}
				slidesPerView={breakpoint.xxl ? 3 : breakpoint.lg ? 2 : 1}
				loop={true}
				freeMode={true}
				speed={15000}
				autoplay={{
					delay: 0,
					disableOnInteraction: false,
				}}>
				{photos.map((photo, index) => (
					<SwiperSlide key={index}>
						<Image
							className={styles.photo}
							src={photo}
							alt={commonAlt}
							loading='lazy'
							width={1200}
							height={624}
							sizes='
								(min-width: 1400px) 34vw,
								(min-width: 992px) 50vw,
								100vw
  							'
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};
