import { ADONA } from '@/config/projectsContent/adona.config';
import { BESKIDY } from '@/config/projectsContent/beskidy.config';
import { TEST } from '@/config/projectsContent/test.config';
import { ProjectContentConfig } from '@/types/projectPage.type';

const portfolioProject: ProjectContentConfig[] = [ADONA, TEST, BESKIDY];

export const RECENT_PROJECTS: PortfolioItem[] = portfolioProject.map(
	(p) => p.previewInfo
);
