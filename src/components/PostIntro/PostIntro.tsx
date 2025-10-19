import React from 'react';
import { Wrapper } from '../Wrapper/Wrapper';
import styles from './PostIntro.module.scss';
import Image from 'next/image';

interface Props {
	intro: string;
	introImg: string;
	introImgAlt: string;
};

export const PostIntro = ({ introImg, introImgAlt, intro }: Props) => {
	return (
		<section className={styles.section}>
			<Wrapper className={styles.wrapper}>
				<div className={styles.postImgWrapper}>
					<Image
						className={styles.postImg}
						src={introImg}
						alt={introImgAlt}
						width={1200}
						height={800}
						loading='lazy'
						sizes='
    						(min-width: 1400px) 1290px,
    						(min-width: 1200px) 1110px,
    						(min-width: 992px) 960px,
    						(min-width: 768px) 690px,
    						(min-width: 576px) 510px,
    						100vw
  						'
					/>
				</div>

				<p className={styles.intro}>
					{intro}
				</p>
			</Wrapper>
		</section>
	);
};
