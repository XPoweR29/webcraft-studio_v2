import React from 'react';
import styles from './Contact_Content.module.scss';
import { Wrapper } from '@/components/Wrapper/Wrapper';

export const Contact_Content = () => {
	return (
		<section className={styles.section}>
			<Wrapper className={styles.wrapper}>
				<p className={styles.text}>
					Nie potrzebujesz gotowego pomysłu, żeby się odezwać. Wystarczy, że
					podzielisz się swoimi oczekiwaniami, a razem ustalimy najlepsze
					rozwiązanie. Możesz skontaktować się ze mną telefonicznie, mailowo
					albo przez poniższy formularz. Pracuję zdalnie, ale gdy zajdzie taka
					potrzeba, mogę spotkać się osobiście lub umówić wygodne spotkanie
					online.
				</p>
			</Wrapper>
		</section>
	);
};
