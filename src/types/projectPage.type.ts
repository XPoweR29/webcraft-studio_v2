import { ComponentProps } from 'react';
import { MetadataBaseParams } from '@/utils/creataeMetadata';
import { ProjectPage_Gallery } from '@/sections/ProjectPage_Gallery/ProjectPage_Gallery';
import { ProjectPage_Content } from '@/sections/ProjectPage_Content/ProjectPage_Content';
import { ProjectPage_Hero } from '@/sections/ProjectPage_Hero/ProjectPage_Hero';
import { Recent_Projects } from '@/sections/Home_Projects/Recent_Projects';
import { ProjectPage_Contact } from '@/sections/ProjectPage_Contact/ProjectPage_Contact';
import { SchemaType } from './schema.type';


/////main interface/////
export interface ProjectContentConfig {
	metadata: MetadataBaseParams;
	SCHEMA?: SchemaType;
	externalLink: string;
	mckpImage: string;
	mckpImageAlt: string;

	heroSection: ComponentProps<typeof ProjectPage_Hero>;
	contentSection: ComponentProps<typeof ProjectPage_Content>;
	gallery: ComponentProps<typeof ProjectPage_Gallery>;
	previewInfo: PortfolioItem;
	recentProjects: ComponentProps<typeof Recent_Projects>;
	contactSection: ComponentProps<typeof ProjectPage_Contact>;
}
