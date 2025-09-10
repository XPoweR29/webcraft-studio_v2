import { LINKS_MAP } from '@/config/links.config';
import { GMB_CONTENT } from '@/config/offerContent/gmb.config';
import { SEO_CONTENT } from '@/config/offerContent/seo.config';
import { WWW_CONTENT } from '@/config/offerContent/www.config';
import { ServiceContentConfig } from '@/types/servicePage.types';

export const SERVICE_CONTENT_MAP: Record<string, ServiceContentConfig> = {
	websites: WWW_CONTENT,
	seo: SEO_CONTENT,
	gmb: GMB_CONTENT,
};

export const getServicePageContent = (slug: string) => {
	const offerChildren =
		LINKS_MAP.find((link) => link.id === 'offer')?.children ?? [];
	const matchedChild = offerChildren.find(
		(child) => child.href.split('/').pop() === slug
	);

	if (!matchedChild) return null;
	return SERVICE_CONTENT_MAP[matchedChild.id];
};
