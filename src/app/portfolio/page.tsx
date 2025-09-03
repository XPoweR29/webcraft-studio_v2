import { Blog_Section } from '@/sections/Blog_Section/Blog_Section';
import { Portfolio_Content } from '@/sections/Portfolio_Content/Portfolio_Content';
import { SectionHero } from '@/sections/SectionHero/SectionHero';
import React from 'react';
import styles from './index.module.scss';

const Portfolio = () => {
	return (
		<>
			<SectionHero
				heading='Skuteczne strony internetowe'
				subline='Projekty, które wyróżniają się w sieci'
				bgImage='/img/photos/portfolio_hero_image.webp'
			/>

			<Portfolio_Content />
			<Blog_Section  className={styles.blogSection}/>
		</>
	);
};

export default Portfolio;
