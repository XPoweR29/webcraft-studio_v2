import { SectionHero } from '@/sections/SectionHero/SectionHero';
import React from 'react';
import { SITE_CONFIG } from '@/config/site.config';
import { createMetadata } from '@/utils/createMetadata';
import { Blog_Content } from '@/sections/Blog_Content/Blog_Content';
import { BlogList } from '@/components/BlogList/BlogList';
import { BLOG_POSTS } from '@/config/blogPosts/_registry';
import { image } from 'framer-motion/client';
import { linkHref } from '@/utils/linkHref.helper';

export const metadata = createMetadata({
	title: 'Blog WebCraftSTUDIO | Tworzenie Stron Internetowych i Pozycjonowanie',
	description:
		'Porady i artykuły o tworzeniu stron internetowych, SEO oraz Google Moja Firma — praktyczna wiedza od WebCraftSTUDIO.',
	relPath: '/blog',
});

const schema = {
	'@context': 'https://schema.org',
	'@graph': [
		{
			'@type': 'CollectionPage',
			'@id': `${SITE_CONFIG.baseUrl}${metadata.relPath}/#collection`,
			url: `${SITE_CONFIG.baseUrl}${metadata.relPath}`,
			name: metadata.title,
			description: metadata.description,
			inLanguage: 'pl-PL',
			isPartOf: {
				'@type': 'WebSite',
				'@id': `${SITE_CONFIG.baseUrl}/#website`,
			},
			mainEntity: {
				'@type': 'Blog',
				'@id': `${SITE_CONFIG.baseUrl}${metadata.relPath}/#blog`,
			},
			publisher: {
				'@type': 'Organization',
				'@id': `${SITE_CONFIG.baseUrl}/#organization`,
			},
		},
		{
			'@type': 'Blog',
			'@id': `${SITE_CONFIG.baseUrl}${metadata.relPath}/#blog`,
			url: `${SITE_CONFIG.baseUrl}${metadata.relPath}`,
			name: metadata.title,
			description: metadata.description,
			inLanguage: 'pl-PL',
			publisher: {
				'@type': 'Organization',
				'@id': `${SITE_CONFIG.baseUrl}/#organization`,
			},
			isPartOf: {
				'@type': 'WebSite',
				'@id': `${SITE_CONFIG.baseUrl}/#website`,
			},
			mainEntityOfPage: {
				'@type': 'CollectionPage',
				'@id': `${SITE_CONFIG.baseUrl}${metadata.relPath}/#collection`,
			},
			hasPart: BLOG_POSTS.map((post) => ({
				'@type': 'BlogPosting',
				'@id': `${SITE_CONFIG.baseUrl}${post.metadata.relPath}#post`,
				headline: post.metadata.title,
				image: `${SITE_CONFIG.baseUrl}${post.mainImg}`,
				author: {
					'@type': 'Person',
					name: 'Paweł',
					url: `${SITE_CONFIG.baseUrl}${linkHref('about')}`,
				},
			})),
		},
		{
			'@type': 'BreadcrumbList',
			'@id': `${SITE_CONFIG.baseUrl}${metadata.relPath}/#breadcrumbs`,
			itemListElement: [
				{
					'@type': 'ListItem',
					position: 1,
					name: 'Strona główna',
					item: SITE_CONFIG.baseUrl,
				},
				{
					'@type': 'ListItem',
					position: 2,
					name: 'Blog',
					item: `${SITE_CONFIG.baseUrl}${metadata.relPath}`,
				},
			],
		},
	],
};

const Blog = () => {
	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
			/>

			<SectionHero
				heading='Blog WebCraftSTUDIO'
				subline='Prostym językiem o skutecznej widoczności online'
				bgImage='/img/photos/blog_hero_image.webp'
			/>

			<Blog_Content />

			<BlogList />
		</>
	);
};

export default Blog;
