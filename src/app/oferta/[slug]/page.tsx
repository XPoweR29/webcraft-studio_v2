import React from 'react';
import { DirectQuery } from '@/components/DirectQuery/DirectQuery';
import { Expectation } from '@/components/Expectation/Expectation';
import { Process_Section } from '@/components/Process_Section/Process_Section';
import { OtherOffer } from '@/sections/OtherOffer/OtherOffer';
import { Pricing_Section } from '@/sections/Pricing_Section/Pricing_Section';
import { SectionHero } from '@/sections/SectionHero/SectionHero';
import { ServicePage_Content } from '@/sections/ServicePage_Content/ServicePage_Content';
import { FAQ_Section } from '@/sections/FAQ_Section/FAQ_Section';
import { Review_Section } from '@/sections/Review_Sectoin/Review_Section';
import styles from './index.module.scss';
import { ServiceContentConfig } from '@/types/servicePage.types';
import { notFound } from 'next/navigation';
import { getServicePageContent } from '@/utils/getServicePageContent';
import { LINKS_MAP } from '@/config/links.config';
import { createMetadata } from '@/utils/creataeMetadata';

interface Props {
	params: { slug: string };
}
export async function generateStaticParams() {
	const offerPages =
		LINKS_MAP.find((link) => link.id === 'offer')?.children ?? [];
	return offerPages.map((page) => ({
		slug: page.href.split('/').pop(),
	}));
}
export async function generateMetadata({ params }: Props) {
	const content: ServiceContentConfig | null = getServicePageContent(
		params.slug
	);
	if (!content) return {};

	content.METADATA.relPath = `oferta/${params.slug}`;

	return createMetadata({
		...content.METADATA,
		relPath: `/oferta/${params.slug}`,
	});
}

const ServicePage = async ({ params }: Props) => {
	const content: ServiceContentConfig | null = getServicePageContent(
		params.slug
	);
	if (!content) return notFound();
	const {
		SCHEMA,
		heroSection,
		processSection,
		pricingSection,
		directQuery,
		otherOffer,
		faqSection,
		reviewSection,
	} = content;

	const schema =
		typeof SCHEMA === 'function' ? SCHEMA(content.METADATA, content.faqSection.items, content.pricingSection.packages) : SCHEMA;

	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
			/>

			<SectionHero {...heroSection} />
			<ServicePage_Content />

			<Process_Section {...processSection} />

			<Pricing_Section {...pricingSection} />

			<Expectation />

			<DirectQuery {...directQuery} alignLeft />

			<OtherOffer {...otherOffer} />

			<FAQ_Section {...faqSection} />

			<Review_Section {...reviewSection} className={styles.reviewSection} />
		</>
	);
};

export default ServicePage;
