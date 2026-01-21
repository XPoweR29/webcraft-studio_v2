import React from 'react';
import styles from './index.module.scss';
import { getAllBlogPreviews, getBlogPostBySlug } from '@/utils/getBlogData';
import { notFound } from 'next/navigation';
import { BlogPostPage_Hero } from '@/sections/BlogPostPage_Hero/BlogPostPage_Hero';
import { PostContent } from '@/components/PostContent/PostContent';
import { PostIntro } from '@/components/PostIntro/PostIntro';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { CTA_bar } from '@/components/CTA_bar/CTA_bar';
import { Blog_Section } from '@/sections/Blog_Section/Blog_Section';
import { formatDatePL } from '@/utils/formatDatePL';
import { createMetadata } from '@/utils/createMetadata';

interface Props {
	params: Promise<{ slug: string }>;
}
export async function generateStaticParams() {
	const posts = getAllBlogPreviews();
	return posts.map((post) => ({ slug: post.metadata.slug }));
}

export async function generateMetadata({ params }: Props) {
	const { slug } = await params;
	const post = getBlogPostBySlug(slug);
	if (!post) return {};
	return createMetadata(post.metadata);
}

const BlogPostPage = async ({ params }: Props) => {
	const { slug } = await params;
	const POST = getBlogPostBySlug(slug);
	if (!POST) return notFound();

	const { SCHEMA } = POST;

	const schema = typeof SCHEMA === 'function' ? SCHEMA({ post: POST }) : SCHEMA;

	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
			/>

			<BlogPostPage_Hero
				title={POST.title}
				date={formatDatePL(POST.date)}
				bgImage={POST.mainImg}
				category={POST.category}
			/>

			<article className={styles.post}>
				<PostIntro
					intro={POST.content.intro}
					introImg={POST.content.introImg}
					introImgAlt={POST.content.introImgAlt}
				/>

				<Wrapper className={styles.bodyWrapper}>
					{POST.content.body.map((block, i) => {
						switch (block.type) {
							case 'content':
								return <PostContent key={i} {...block} />;
							case 'cta':
								return <CTA_bar key={i} className={styles.cta} {...block} />;
							default:
								return null;
						}
					})}
				</Wrapper>

				<Blog_Section
					className={styles.blogSection}
					{...POST.content.blogSection}
					currentPost={POST}
					variant='related'
				/>
			</article>
		</>
	);
};

export default BlogPostPage;
