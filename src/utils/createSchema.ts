import { SITE_CONFIG } from '@/config/site.config';

export type SchemaBaseParams = {
	title: string;
	description: string;
	relPath?: string;
	image?: {
		url: string;
		width?: number;
		height?: number;
	};
};

export const createSchema = (
	base: SchemaBaseParams,
	overrides?: Record<string, unknown>
) => {
	const { title, description, relPath, image } = base;

	const fullUrl = relPath
		? `${SITE_CONFIG.baseUrl}/${relPath.replace(/^\/+/, '')}`
		: SITE_CONFIG.baseUrl;

	const defaultImage = {
		url: `${SITE_CONFIG.baseUrl}/og_img.jpg`,
		width: 1200,
		height: 630,
	};

	const schema = {
		'@context': 'https://schema.org',
		'@type': 'Website',
		'@id': `${fullUrl}#main`,
		url: fullUrl,
		name: title ?? SITE_CONFIG.siteName,
		description,
		logo: {
			'@type': 'ImageObject',
			url: `${SITE_CONFIG.baseUrl}/logo.jpg`,
			width: 600,
			height: 600,
		},
		image: {
			'@type': 'ImageObject',
			...(image ?? defaultImage),
		},
		telephone: SITE_CONFIG.contact.phoneHref,
		email: SITE_CONFIG.contact.email,
		address: {
			'@type': 'PostalAddress',
			addressLocality: SITE_CONFIG.address.city,
			postalCode: SITE_CONFIG.address.postalCode,
			addressCountry: 'PL',
		},
		sameAs: Object.values(SITE_CONFIG.externalLinks).filter(Boolean),
	};

	return {
		...schema,
		...overrides,
	};
};
