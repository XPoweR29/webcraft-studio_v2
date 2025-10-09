import { BLOG_POSTS } from '@/config/blogPosts/_reigistry';
import { BlogPostPreview, PostPageConfig } from '@/types/blog.type';

export const getAllBlogPreviews = (): BlogPostPreview[] =>
	BLOG_POSTS.map(({ title, description, date, img, imgAlt, metadata, category }) => ({
		title,
		description,
		date,
		img,
		imgAlt,
		metadata,
		category,
	}));

export const getBlogPostBySlug = (slug: string): PostPageConfig | undefined => {
	return BLOG_POSTS.find((post) => post.metadata.slug === slug);
};
