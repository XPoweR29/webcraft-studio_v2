import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/config/site.config';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: [],
		},
		sitemap: `${SITE_CONFIG.baseUrl}/sitemap.xml`,
	};
}
