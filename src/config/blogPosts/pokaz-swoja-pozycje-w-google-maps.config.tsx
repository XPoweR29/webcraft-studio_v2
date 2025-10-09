import { PostPageConfig } from '@/types/blog.type';

const SLUG = 'pokaz-swoja-pozycje-w-google-maps';
const TITLE = 'Google Moja Fima - pokaż się skutecznie w Google Maps';
const DESCRIPTION =
	'Dokłądnie tego to będzie doryczyło';

export const GMB_POST: PostPageConfig = {
	metadata: {
		title: TITLE,
		description: DESCRIPTION,
		relPath: `/blog/${SLUG}`,
		slug: SLUG,
	},

	category: 'Wizytówka Google',
	title: TITLE,
	description: DESCRIPTION,
	date: '2 Wrz 1992',
	img: '/img/blog/test_blogcardImg.jpg',
	imgAlt: 'Jestem twórcą bloga',

	content: {
		heading: 'Wizytówka Google Moja Firma jako podstawa Twojej widocznośći w sieci.',
		text: 'Lorem ipsum dolor sit amet. Na tym blogu będę siał zamęt. I tak to widze jako pierwszy content i fajnie bedzie leżeć pod kocem. Teraz Ci powiem jak być widocznym, co będzie widoczne w dochodzie rocznym. Bo wiem że dlatego, wędzi cię pięta bo nie możesz trafić do swojego klienta.',
	},
};
