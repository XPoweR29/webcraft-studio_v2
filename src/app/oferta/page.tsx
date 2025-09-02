import { Offer_Content } from '@/sections/Offer_Content/Offer_Content';
import { SectionHero } from '@/sections/SectionHero/SectionHero';
import React from 'react';

const Offer = () => {
	return (
		<>
			<SectionHero
				heading='Skuteczne wsparcie online'
				subline='Zwiększ widoczność swojej marki w Google'
				bgImage='/img/photos/offer_hero_image.jpg'
			/>
      <Offer_Content/>
		</>
	);
};

export default Offer;
