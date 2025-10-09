import { PostPageConfig } from '@/types/blog.type';

const SLUG = 'wprowadzenie-do-moich-postow';
const TITLE = 'Jak zostałem blogowcem. Historia prawdziwa.';
const DESCRIPTION =
	'No i witam serdecznie i zapraszam do przeczytania moich wypocin na przeróżne tematy.';

export const FIRST_POST: PostPageConfig = {
	metadata: {
		title: TITLE,
		description: DESCRIPTION,
		relPath: `/blog/${SLUG}`,
		slug: SLUG,
	},

	category: 'Podcast',
	title: TITLE,
	description: DESCRIPTION,
	date: '6 Sie 2025',
	img: '/img/blog/test_blogcardImg.jpg',
	imgAlt: 'Jestem twórcą bloga',

	content: {
		heading: 'Jak zostałem pisarzem - pierwszy wpis na nowym blogu.',
		text: 'Lorem ipsum dolor sit amet. Na tym blogu będę siał zamęt. I tak to widze jako pierwszy content i fajnie bedzie leżeć pod kocem.',
	},
};
