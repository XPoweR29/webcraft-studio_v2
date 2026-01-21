import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/config/site.config';
import { LINKS_MAP } from '@/config/links.config';
import { PROJECTS } from '@/config/projectsContent/_reigistry';
import { BLOG_POSTS } from '@/config/blogPosts/_registry';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const baseUrl = SITE_CONFIG.baseUrl;

	const routes = LINKS_MAP.flatMap((link) => {
		const mainPath = link.href === '/' ? '' : link.href;
		const subPaths =
			'children' in link ? link.children?.map((child) => child.href) || [] : [];
		return [mainPath, ...subPaths];
	});

	const staticRoutes: MetadataRoute.Sitemap = routes.map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date(),
		changeFrequency: 'monthly',
		priority: route === '' ? 1 : 0.8,
	}));

	const projectRoutes: MetadataRoute.Sitemap = Object.values(PROJECTS).map(
		(project) => ({
			url: `${baseUrl}${project.metadata.relPath}`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.7,
		})
	);

	const blogPostRoutes: MetadataRoute.Sitemap = Object.values(BLOG_POSTS).map(
		(post) => ({
			url: `${baseUrl}${post.metadata.relPath}`,
			lastModified: new Date(post.date),
			changeFrequency: 'monthly',
			priority: 0.7,
		})
	);

	return [...staticRoutes, ...projectRoutes, ...blogPostRoutes];
}
