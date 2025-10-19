import { SITE_CONFIG } from '@/config/site.config';
import { Metadata } from 'next';

export type MetadataBaseParams = {
	title: string;
	description: string;
	relPath?: string;
	slug?: string;
	image?: {
		url: string;
		width?: number;
		height?: number;
		alt?: string;
	};
};

export type ExtendetMetadata = Metadata & {relPath?: string}

export const createMetadata = (base: MetadataBaseParams, overrides?: Partial<Metadata>): ExtendetMetadata => {
	const { title, description, relPath } = base;

	const fullUrl = relPath
		? `${SITE_CONFIG.baseUrl}/${relPath.replace(/^\/+/, '')}`
		: SITE_CONFIG.baseUrl;

	const defaultImage = {
		url: `${SITE_CONFIG.baseUrl}/og_img.jpg`,
		width: 1200,
		height: 600,
		alt: `${SITE_CONFIG.siteName}`
	};
	const images = base.image ? [{...defaultImage, ...base.image}] : [defaultImage];

	const defaultMetadata: Metadata = {
		title: title ?? SITE_CONFIG.siteName,
		description,
		openGraph: {
			title,
			description,
			url: fullUrl,
			siteName: SITE_CONFIG.siteName,
			locale: 'pl_PL',
			type: 'website',
			images,
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: images.map(i=>i.url),
		},
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				'max-snippet': -1,
				'max-image-preview': 'large',
				'max-video-preview': -1,
			},
		},
		alternates: {
			canonical: fullUrl,
			languages: {
				'pl-PL': fullUrl,
				'en-US': `${SITE_CONFIG.baseUrl}/en/${relPath}`,
			},
		},
	};

	return {
		...defaultMetadata,
		...overrides,
		openGraph: {
			...defaultMetadata.openGraph,
			...overrides?.openGraph,
		},
		alternates: {
			...defaultMetadata.alternates,
			...overrides?.alternates,
		},
		robots: overrides?.robots ?? defaultMetadata.robots,
		relPath,
	};
};
