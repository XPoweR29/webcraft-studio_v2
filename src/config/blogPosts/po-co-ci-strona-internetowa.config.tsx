import { PostPageConfig } from '@/types/blog.type';

const SLUG = 'po-co-ci-strona-internetowa';
const TITLE = 'Tutaj masz konkretny poradnik mordeczko.';
const DESCRIPTION =
	'To nie są żarty! Dostajesz odemnie konkretne i rzetelne porady, które naprawde działają. I to za DARMO!';

export const SECOND_POST: PostPageConfig = {
	metadata: {
		title: TITLE,
		description: DESCRIPTION,
		relPath: `/blog/${SLUG}`,
		slug: SLUG,
	},

	category: 'WWW',
	title: TITLE,
	description: DESCRIPTION,
	date: '14 Sie 2025',
	img: '/img/blog/test_blogcardImg.jpg',
	imgAlt: 'Jestem twórcą bloga',

	content: {
		heading: 'Teraz nauczysz się konkretnych umiejętności',
		text: 'Przygotuj się i zapinaj pasy, ten post będzie dłuższy od Twojej kiełbasy. Dowiesz się tutaj jak robić SEO. Będziesz bogaty i kupisz MONDEO!',
	},
};
