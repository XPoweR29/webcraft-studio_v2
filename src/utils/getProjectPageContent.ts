import { LINKS_MAP } from '@/config/links.config';
import { ADONA } from '@/config/projectsContent/adona.config';
import { ProjectContentConfig } from '@/types/projectPage.type';

export const PROJECTS_CONTENT_MAP: Record<string, ProjectContentConfig> = {
	adona: ADONA,
};

export const getProjectPageContent = (slug: string) => {
	const portfolioChildren =
		LINKS_MAP.find((link) => link.id === 'portfolio')?.children ?? [];
	const matchedChild = portfolioChildren.find(
		(child) => child.href.split('/').pop() === slug
	);

	if (!matchedChild) return null;
	return PROJECTS_CONTENT_MAP[matchedChild.id];
};
