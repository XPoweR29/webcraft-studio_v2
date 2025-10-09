import { PostPageConfig } from '@/types/blog.type';

const SLUG = 'poznajdize-pana-marcina';
const TITLE = 'Fraszka o Panu z Franciszkańskiej';
const DESCRIPTION =
	'Dokłądnie tego to będzie doryczyło';

export const KIJAS: PostPageConfig = {
	metadata: {
		title: TITLE,
		description: DESCRIPTION,
		relPath: `/blog/${SLUG}`,
		slug: SLUG,
	},

	category: 'Podcast',
	title: TITLE,
	description: DESCRIPTION,
	date: '8 Paź 2021',
	img: '/img/blog/test_blogcardImg.jpg',
	imgAlt: 'Jestem twórcą bloga',

	content: {
		heading: 'Poznajdzie Marcina - Pana z Franciszkańskiej',
		text: 'Mieszka na Pewli jeden gagatek, co lubi się tasować do cudzych matek. Zboczeniec z niego jest niesłychany, nie jeden raz przystawiał się do czyjejś mamy. Leniem jest strasznym ale i szczerym, ten chuj zorbi wszystko by iść na L4!',
	},
};
