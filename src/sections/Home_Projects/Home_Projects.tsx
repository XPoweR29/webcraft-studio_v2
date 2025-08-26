import React from 'react';
import styles from './Home_Projects.module.scss';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { ProjectsSwiper } from '@/components/ProjectsSwiper/ProjectsSwiper';

export const Home_Projects = () => {
	return (
		<section className={styles.section} aria-labelledby='home_recent_project'>
			<Wrapper>
				<h2 className={styles.heading} id='home_recent_project'>
					Zobacz moje ostatnie realizacje
				</h2>
				<p className={styles.text}>
					Każdy projekt tworzę samodzielnie. Bez schematów, bez korporacyjnego
					podejścia. Dzięki temu masz bezpośredni kontakt z osobą odpowiedzialną
					za cały proces i pewność, że nic nie zostanie potraktowane „taśmowo”.
					Stawiam na indywidualne podejście, realne zaangażowanie i efekt, który
					naprawdę działa – wizualnie i biznesowo.
				</p>

				<ProjectsSwiper className={styles.recentProjects}/>
			</Wrapper>
		</section>
	);
};
