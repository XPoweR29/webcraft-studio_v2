import { Wrapper } from '@/components/Wrapper/Wrapper';
import React from 'react';
import styles from './Pricing_Section.module.scss';
import Image from 'next/image';
import { PricingCard } from '@/components/PricingCard/PricingCard';
import basicIcon from '../../assets/icons/lighting_icon.svg';
import standardIcon from '../../assets/icons/rocket_icon.svg';
import proIcon from '../../assets/icons/crown_icon.svg';

interface Props {
	heading: React.ReactNode;
	text: string;
	sketchImg: string;
}

const PACKAGES: PricingCard[] = [
	{
		name: 'BASIC',
		description:
			'Zyskaj szybki start online dzięki prostej stronie internetowej.',
		icon: basicIcon,
		price: 1599,
		features: [
			'Do 3 podstron',
			'Indywidualny projekt graficzny',
			'Dostosowana do różnych rozdzielczości',
			'Formularz kontaktowy',
			'Implementacja mapy Google',
			'Integracja z social media',
			'Certyfikat SSL',
			'Pomoc przy zakupie domeny',
			'Integracja z Google Search Console',
		],
	},
	{
		name: 'STANDARD',
		description: 'Rozwiń biznes z rozbudowaną stroną WWW.',
		icon: standardIcon,
		pricePrefix: 'od',
		price: 2399,
		features: [
			'Wszystko z pakietu BASIC',
			'Do 7 podstron',
			'Rozbudowane sekcje ofertowe',
			'System CMS',
			'Linkowanie wewnętrzne',
			'Dane strukturalne schema.org',
			'Integracja z Google Analytics',
		],
		dark: true,
	},
	{
		name: 'PRO',
		description: 'Buduj markę online z pełną widocznością w Google.',
		icon: proIcon,
		pricePrefix: 'od',
		price: 3999,
		features: [
			'Wszystko z pakietu STANDARD',
			'Do 12 podstron',
			'Pełna optymalizacja SEO',
			'Analiza 20 fraz kluczowych',
			'Przygotowanie treści pod wybrane frazy',
			'Publikacja w 10 katalogach firmowych',
			'Sekcja blogowa',
			'Dodatkowe rozszerzenia i integracje',
		],
	},
];

export const Pricing_Section = ({ heading, text, sketchImg }: Props) => {
	return (
		<section className={styles.section}>
			<Wrapper className={styles.wrapper}>
				<Image
					src={sketchImg}
					className={styles.sketchImg}
					alt=''
					aria-hidden={true}
					draggable={false}
					width={480}
					height={350}
				/>
				<h2 className={styles.heading}>{heading}</h2>
				<p className={styles.text}>{text}</p>

				<ul className={styles.packages}>
					{PACKAGES.map((pck) => (
						<li key={pck.name}>
							<PricingCard {...pck} />
						</li>
					))}
				</ul>
			</Wrapper>
		</section>
	);
};
