import React from 'react';
import styles from './Home_Contact.module.scss';
import { Wrapper } from '@/components/Wrapper/Wrapper';

export const Home_Contact = () => {
	return (
		<section className={styles.wrapper}>
			<Wrapper className={styles.wrapper}>
				<h2 className={styles.heading}>
					Gotowy na sukces? Zacznijmy współpracę!
				</h2>
				<p className={styles.text}>
					Chcesz rozwijać swoją firmę i potrzebujesz wsparcia w zakresie
					tworzenia stron internetowych? Skontaktuj się ze mną, aby omówić
					szczegóły i rozpocząć współpracę. Pomogę Ci stworzyć stronę, która
					naprawdę wspiera Twój biznes.
				</p>
			</Wrapper>
		</section>
	);
};
