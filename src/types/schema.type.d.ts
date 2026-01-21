/* eslint-disable @typescript-eslint/no-explicit-any */
import { AccordionItem } from '@/components/Accordion/Accordion';
import { MetadataBaseParams } from '@/utils/createMetadata';
import { PostPageConfig } from './blog.type';
import { ProjectContentConfig } from './projectPage.type';

type SchemaArgs = {
	meta?: MetadataBaseParams;
	faq?: AccordionItem[];
	products?: PricingCard[];
	post?: PostPageConfig;
	project?: ProjectContentConfig;
};

export type SchemaType =
	| ((meta: any, faq?: any[], products?: any[]) => any | Record<string, any>[])
	| Record<string, any>
	| Record<string, any>[];
