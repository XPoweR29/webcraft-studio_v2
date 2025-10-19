import { CTA_bar } from '@/components/CTA_bar/CTA_bar';
import { PostContent } from '@/components/PostContent/PostContent';
import { Blog_Section } from '@/sections/Blog_Section/Blog_Section';
import { MetadataBaseParams } from '@/utils/creataeMetadata';
import { ComponentProps } from 'react';
import { SchemaType } from './servicePage.types';

export type PostCategory = 'WWW' | 'SEO' | 'Wizytówka Google' | 'Podcast';

export type BlogPostBlock =
	| ({ type: 'content' } & ComponentProps<typeof PostContent>)
	| ({ type: 'cta' } & ComponentProps<typeof CTA_bar>);


export interface PostPageConfig {
	id?: string | number;
	category: PostCategory;
	title: string;
	description: string;
	date: string;
	author?: string;
	mainImg: string;
	mainImgAlt: string;

	metadata: MetadataBaseParams;
	SCHEMA?: SchemaType;

	content: {
		introImg: string;
		introImgAlt: string;
		intro: string;
		body: BlogPostBlock[];
		blogSection: ComponentProps<typeof Blog_Section>;
	};
}

export type BlogPostPreview = Pick<
	PostPageConfig,
	| 'title'
	| 'description'
	| 'date'
	| 'mainImg'
	| 'mainImgAlt'
	| 'metadata'
	| 'category'
>;
