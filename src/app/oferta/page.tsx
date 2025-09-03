import { DirectQuery } from '@/components/DirectQuery/DirectQuery';
import { Expectation } from '@/components/Expectation/Expectation';
import { Offer_Content } from '@/sections/Offer_Content/Offer_Content';
import { Review_Section } from '@/sections/Review_Sectoin/Review_Section';
import { SectionHero } from '@/sections/SectionHero/SectionHero';
import React from 'react';
import styles from './index.module.scss';

const Offer = () => {
	return (
		<>
			<SectionHero
				heading='Skuteczne wsparcie online'
				subline='Zwiększ widoczność swojej marki w Google'
				bgImage='/img/photos/offer_hero_image.jpg'
			/>
			<Offer_Content />

			<Expectation />

			<DirectQuery heading='A czy Twój biznes dobrze pozycjonuje się online?'>
				Masz świetny produkt lub usługę, ale Twoja obecność w sieci nie
				odzwierciedla tego, co oferujesz? Pomogę Ci to zmienić. Stworzę stronę
				www, która wyróżni Cię na tle konkurencji, zadbam o SEO, by klienci
				mogli Cię łatwo znaleźć, i zoptymalizuję Twoją wizytówkę Google Moja
				Firma, byś był zawsze o krok przed innymi. Wspólnie zbudujemy Twoją
				silną pozycję online.
			</DirectQuery>

			<Review_Section className={styles.reviewSection} heading='Dołącz do zadowolonych klientów'>
				Zadowoleni klienci to najlepszy dowód skuteczności mojej pracy. Każda
				realizacja to dla mnie szansa, by w pełni zrozumieć potrzeby Twojego
				biznesu i stworzyć rozwiązania, które realnie wspierają jego rozwój.
				Twoja opinia jest dla mnie inspiracją do dalszego doskonalenia usług.
			</Review_Section>
		</>
	);
};

export default Offer;
