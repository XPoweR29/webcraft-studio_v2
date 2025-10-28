import React from 'react';
import styles from './Blog_Section.module.scss';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import Image from 'next/image';
import { RecentBlogPosts } from '@/components/RecentBlogArticles/RecentBlogPosts';
import { PostPageConfig } from '@/types/blog.type';
import { getLatestPosts, getPostsByCategory } from '@/utils/getBlogData';

interface Props {
	heading: string | React.ReactNode;
	text: string;
	className?: string;
	variant: 'latest' | 'related';
	currentPost?: PostPageConfig;
};

export const Blog_Section = ({ heading, text, className, variant, currentPost }: Props) => {
	let POSTS: PostPageConfig[];

	if(variant === 'latest') {
		POSTS = getLatestPosts();
	} else {
		POSTS = getPostsByCategory(currentPost?.category!, currentPost?.metadata.slug!);
	};

	const NO_SCHEMA_POSTS  = POSTS.map(({ SCHEMA, ...rest }) => rest);

	return (
		<section className={`${styles.section} ${className??""}`}>
			<Wrapper className={styles.wrapper}>
				<Image
					src={'/img/pen_sketch.svg'}
					className={styles.sketchImg}
					alt=''
					width={720}
					height={360}
					aria-hidden={true}
					draggable={false}
				/>
				<h2 className={styles.heading}>{heading}</h2>
				<p className={styles.text}>{text}</p>

				<RecentBlogPosts
					className={styles.recentBlog}
					articles={NO_SCHEMA_POSTS}
				/>
			</Wrapper>
		</section>
	);
};
