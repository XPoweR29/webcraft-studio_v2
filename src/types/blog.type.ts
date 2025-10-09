export type PostCategory = 'WWW' | 'SEO' | 'Wizytówka Google' | 'Podcast';

export interface PostPageConfig {
	id?: string | number;
	category: PostCategory;
	title: string;
	description: string;
	date: string;
	author?: string;
	img: string;
	imgAlt: string;

	metadata: {
		title: string;
		description: string;
		relPath: string;
		slug: string;
	};

	content: {
		heading: string;
		text: string;
	};
}

export type BlogPostPreview = Pick<
	PostPageConfig,
	'title' | 'description' | 'date' | 'img' | 'imgAlt' | 'metadata' | 'category'
>;
