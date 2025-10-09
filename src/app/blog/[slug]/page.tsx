import { Wrapper } from '@/components/Wrapper/Wrapper';
import React from 'react';
import styles from './index.module.scss';
import { getAllBlogPreviews, getBlogPostBySlug } from '@/utils/getBlogData';
import { notFound } from 'next/navigation';
import { fileURLToPath } from 'url';

interface Props {
	params: {slug: string};
};
export async function generateStaticParams() {
	const posts = await getAllBlogPreviews();
	return posts.map((post) => ({ slug: post.metadata.slug }));
};

const BlogPostPage = async ({params}: Props) => {
	const post = await getBlogPostBySlug(params.slug);
	if(!post) return notFound();

	return (
		<article className={styles.post}>
			<Wrapper className={styles.wrapper}>
				<h1>{post.content.heading}</h1>
				<p style={{marginTop: '3em'}}>{post.content.text}</p>
			</Wrapper>
		</article>
	);
};

export default BlogPostPage;

//FIXME: Po dodaniu schema zaglądnij w rich resultrs czy zniknęły ostrzeżenia w artykułach na - NA PODSTRONIE GŁÓWNEJ BLOGA. 
