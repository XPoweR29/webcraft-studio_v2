import { PostPageConfig } from '@/types/blog.type';

const SLUG = 'poprawne-pozycjonowanie-online';
const TITLE = 'Tutaj masz konkretny poradnik mordeczko.';
const DESCRIPTION =
	'To nie są żarty! Dostajesz odemnie konkretne i rzetelne porady, które naprawde działają. I to za DARMO!';

export const THIRD_POST: PostPageConfig = {
	metadata: {
		title: TITLE,
		description: DESCRIPTION,
		relPath: `/blog/${SLUG}`,
		slug: SLUG,
	},

	category: 'SEO',
	title: TITLE,
	description: DESCRIPTION,
	date: '3 Paź 2025',
	img: '/img/blog/test_blogcardImg.jpg',
	imgAlt: 'Jestem twórcą bloga',

	content: {
		heading: 'No i tutaj mamy trzeci już POST na tym super blogu',
		text: 'Przygotuj się i zapinaj pasy, ten post będzie dłuższy od Twojej kiełbasy. Dowiesz się tutaj jak robić SEO. Będziesz bogaty i kupisz MONDEO!',
	},
};
