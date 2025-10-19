import React from 'react';
import styles from './PostContent.module.scss';
import Image from 'next/image';
import { Wrapper } from '../Wrapper/Wrapper';

type PostImage = {
	src: string;
	alt: string;
};

interface Props {
	heading: string;
	paragraphs: React.ReactNode;
	image?: PostImage;
}

export const PostContent = ({ heading, paragraphs, image }: Props) => {
	return (
		<section className={styles.postContent}>
			<Wrapper className={styles.wrapper}>
				<h2 className={styles.heading}>{heading}</h2>
				<div className={styles.text}>{paragraphs}</div>

				{image && (
					<div className={styles.imageWrapper}>
						<Image
							src={image.src}
							alt={image.alt}
							width={850}
							height={410}
							className={styles.image}
							loading='lazy'
							sizes='
								(min-width: 1200px) 970px,
								(min-width: 992px) 900px,
								(min-width: 768px) 660px,
								(min-width: 576px) 480px,
								100vw
							'
						/>
					</div>
				)}
			</Wrapper>
		</section>
	);
};
