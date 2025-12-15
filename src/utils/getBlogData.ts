import { BLOG_POSTS } from '@/config/blogPosts/_registry';
import { BlogPostPreview, PostPageConfig } from '@/types/blog.type';

export const getAllBlogPreviews = (): BlogPostPreview[] =>
	BLOG_POSTS.map(
		({
			title,
			description,
			date,
			mainImg,
			mainImgAlt,
			metadata,
			category,
		}) => ({
			title,
			description,
			date,
			mainImg,
			mainImgAlt,
			metadata,
			category,
		})
	);

export const getBlogPostBySlug = (slug: string): PostPageConfig | undefined => {
	return BLOG_POSTS.find((post) => post.metadata.slug === slug);
};

export const getLatestPosts = (limit?: number): PostPageConfig[] => {
	return [...BLOG_POSTS]
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
		.slice(0, limit ?? BLOG_POSTS.length);
};

export const getPostsByCategory = (
	category: string,
	excludeSlug: string,
	limit?: number
): PostPageConfig[] => {
	const relatedCat = BLOG_POSTS.filter(
		(p) => p.category === category && p.metadata.slug !== excludeSlug
	);

	if (relatedCat.length < 3) {
		const otherCat = BLOG_POSTS.filter(
			(p) => p.metadata.slug !== excludeSlug && p.category !== category
		);

		const combined = [...relatedCat, ...otherCat];
		return combined.slice(0, limit ?? BLOG_POSTS.length);
	}

	return relatedCat.slice(0, limit ?? BLOG_POSTS.length);
};
