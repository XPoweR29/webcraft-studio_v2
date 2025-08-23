import { StaticImageData } from "next/image";
import { linkHref } from "@/utils/linkHref.helper";
import www_icon from '../../assets/icons/sites_icon.svg';
import seo_icon from '../../assets/icons/seo_icon.svg';
import gmb_icon from '../../assets/icons/gmb_icon.svg';

export type offerCardType = {
	icon: string | StaticImageData;
	title: string;
	description: string;
	pageUrl: string;
	bgImg: string | StaticImageData;
	bgImgClass?: string;
};

export const offerCards: offerCardType[] = [
	{
		title: 'Tworzenie stron WWW',
		icon: www_icon,
		pageUrl: linkHref('websites'),
		bgImg: '/img/web_sketch.svg',
		description:
			'Zdobądź stronę internetową dopasowaną do Twojej branży, która wyróżnia się designem i skutecznie przyciąga klientów.',
		bgImgClass: 'bgImg--www',
	},
	{
		title: 'Optymalizacja SEO',
		icon: seo_icon,
		pageUrl: linkHref('seo'),
		bgImg: '/img/growthArrow_sketch.svg',
		description:
			'Popraw pozycję swojej strony w Google i dotrzyj do osób, które szukają właśnie Twoich usług.',
		bgImgClass: 'bgImg--seo',
	},
	{
		title: 'Witytówka Google',
		icon: gmb_icon,
		pageUrl: linkHref('gmb'),
		bgImg: '/img/location_sketch.svg',
		description:
			'Przyciągnij lokalnych klientów dzięki profilowi, który budzi zaufanie i zapewnia lepszą widoczność w mapach Google.',
		bgImgClass: 'bgImg--gmb'
	},
];
