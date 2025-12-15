import { AccordionItem } from '@/components/Accordion/Accordion';
import { MetadataBaseParams } from '@/utils/createMetadata';
import { PostPageConfig } from './blog.type';
import { ProjectContentConfig } from './projectPage.type';

type SchemaArgs = {
	met?: MetadataBaseParams;
	faq?: AccordionItem[];
	products?: PricingCard[];
	post?: PostPageConfig;
	project?: ProjectContentConfig;
};

export type SchemaType =
	| ((args: SchemaArgs) => Record<string, any> | Record<string, any>[])
	| Record<string, any>
	| Record<string, any>[];
