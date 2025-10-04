import { LINKS_MAP } from '@/config/links.config';
import { Recent_Projects } from '@/sections/Home_Projects/Recent_Projects';
import { ProjectPage_Content } from '@/sections/ProjectPage_Content/ProjectPage_Content';
import { ProjectPage_Gallery } from '@/sections/ProjectPage_Gallery/ProjectPage_Gallery';
import { ProjectPage_Hero } from '@/sections/ProjectPage_Hero/ProjectPage_Hero';
import { ProjectContentConfig } from '@/types/projectPage.type';
import { createMetadata } from '@/utils/creataeMetadata';
import { getProjectPageContent } from '@/utils/getProjectPageContent';
import { notFound } from 'next/navigation';
import React from 'react';
import styles from './index.module.scss';
import { ProjectPage_Contact } from '@/sections/ProjectPage_Contact/ProjectPage_Contact';

interface Props {
	params: { slug: string };
}

export async function generateStaticParams() {
	const projectsPages =
		LINKS_MAP.find((link) => link.id === 'portfolio')?.children ?? [];
	return projectsPages.map((page) => ({
		slug: page.href.split('/').pop(),
	}));
}

export async function generateMetadata({ params }: Props) {
	const content: ProjectContentConfig | null = getProjectPageContent(
		params.slug
	);
	if (!content) return {};

	content.METADATA.relPath = `portfolio/${params.slug}`;

	return createMetadata({
		...content.METADATA,
		relPath: `/portfolio/${params.slug}`,
	});
}

const ProjectPage = ({ params }: Props) => {
	const content: ProjectContentConfig | null = getProjectPageContent(
		params.slug
	);
	if (!content) return notFound();
	const { SCHEMA, heroSection, contentSection, gallery, recentProjects, contactSection } = content;

	const schema = typeof SCHEMA === 'function' ? SCHEMA(content.METADATA) : SCHEMA;

	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
			/>

			<ProjectPage_Hero {...heroSection} />

			<ProjectPage_Content {...contentSection} />

			<ProjectPage_Gallery {...gallery} />

			<Recent_Projects {...recentProjects} className={styles.recentProjects} />

			<ProjectPage_Contact  {...contactSection}/>
		</>
	);
};

export default ProjectPage;



