import { SITE_CONFIG } from '@/config/site.config';
import { Metadata } from 'next';

type MetadataBaseParams = {
	title: string;
	description: string;
	slug?: string;
	image?: {
		url: string;
		width?: number;
		height?: number;
		alt?: string;
	};
};

export const createMetadata = (
	base: MetadataBaseParams,
	overrides?: Partial<Metadata>
): Metadata => {
	const { title, description, slug = '/' } = base;

	const fullUrl = `${SITE_CONFIG.baseUrl}/${slug.replace(/^\/+/, '')}`;

	const defaultMetadata: Metadata = {
		title,
		description,
		openGraph: {
			title,
			description,
			url: fullUrl,
			siteName: SITE_CONFIG.siteName,
			locale: 'pl_PL',
			type: 'website',
			images: [
				{
					url: `${SITE_CONFIG.baseUrl}/og_img.jpg`,
					width: 1200,
					height: 630,
					alt: SITE_CONFIG.siteName,
				},
			],
		},
		alternates: {
			canonical: fullUrl,
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
		robots: overrides?.robots,
	};
};
