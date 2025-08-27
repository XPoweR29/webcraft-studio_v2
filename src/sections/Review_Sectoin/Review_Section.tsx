import React from 'react';
import styles from './Review_Section.module.scss';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import Image from 'next/image';
import { ReviewSwiper } from '@/components/ReviewSwiper/ReviewSwiper';

interface Props {
    heading: string;
    children: React.ReactNode;
}
export const Review_Section = ({ children, heading}: Props) => {
	return (
		<section className={styles.section}>
			<Wrapper className={styles.wrapper}>
				<Image
					src={'/img/comment_sketch.svg'}
                    className={styles.sketchImg}
					alt=''
					aria-hidden={true}
					draggable={false}
                    width={350}
                    height={350}
				/>
				<h2 className={styles.heading}>{heading}</h2>
				<p className={styles.text}>{children}</p>

				<ReviewSwiper className={styles.reviewSwiper}/>
			</Wrapper>
		</section>
	);
};
