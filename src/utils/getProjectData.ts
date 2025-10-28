
import { PROJECTS } from '@/config/projectsContent/_reigistry';
import { ProjectContentConfig } from '@/types/projectPage.type';

export const getProjectsPreviews = () =>
	PROJECTS.map((project) => project.previewInfo);


export const getProjectBySlug = (slug: string): ProjectContentConfig | undefined => {
	return PROJECTS.find(
		(project) => project.metadata.slug === slug
	);
};
