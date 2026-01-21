import { Recent_Projects } from '@/sections/Home_Projects/Recent_Projects';
import { ProjectPage_Content } from '@/sections/ProjectPage_Content/ProjectPage_Content';
import { ProjectPage_Gallery } from '@/sections/ProjectPage_Gallery/ProjectPage_Gallery';
import { ProjectPage_Hero } from '@/sections/ProjectPage_Hero/ProjectPage_Hero';
import { ProjectContentConfig } from '@/types/projectPage.type';
import { createMetadata } from '@/utils/createMetadata';
import { notFound } from 'next/navigation';
import React from 'react';
import styles from './index.module.scss';
import { ProjectPage_Contact } from '@/sections/ProjectPage_Contact/ProjectPage_Contact';
import { getProjectBySlug } from '@/utils/getProjectData';
import { PROJECTS } from '@/config/projectsContent/_reigistry';

interface Props {
	params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
	return PROJECTS.map((p) => ({ slug: p.metadata.slug }));
}

export async function generateMetadata({ params }: Props) {
	const { slug } = await params;
	const project: ProjectContentConfig | undefined = getProjectBySlug(slug);
	if (!project) return {};
	return createMetadata(project.metadata);
}

const ProjectPage = async ({ params }: Props) => {
	const { slug } = await params;
	const PROJECT: ProjectContentConfig | undefined = getProjectBySlug(slug);
	if (!PROJECT) return notFound();
	const {
		SCHEMA,
		heroSection,
		contentSection,
		gallery,
		recentProjects,
		contactSection,
	} = PROJECT;

	const schema =
		typeof SCHEMA === 'function' ? SCHEMA({ project: PROJECT }) : SCHEMA;

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

			<ProjectPage_Contact {...contactSection} />
		</>
	);
};

export default ProjectPage;
