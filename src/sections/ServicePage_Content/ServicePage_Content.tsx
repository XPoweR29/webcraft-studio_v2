import React from 'react';
import styles from './ServicePage_Content.module.scss';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { ServiceParagraph } from '@/components/ServiceParagraph/ServiceParagraph';

export const ServicePage_Content = () => {
	return (
		<section className={styles.section}>
			<Wrapper className={styles.wrapper}>
				<ServiceParagraph
					heading={
						<>
							Strony internetowe, które <span>przyciągają</span> klientów i
							budują zaufanie
						</>
					}
					image='/img/devices.webp'
					imgAlt='Profesjonalne strony internetowe'>
					W WebCraftSTUDIO specjalizuję się w projektowaniu stron internetowych
					tworzonych od podstaw – bez gotowych szablonów. Każda strona
					internetowa powstaje z myślą o Twojej branży, użytkownikach oraz
					widoczności w Google. Oferuję tworzenie stron WWW, które łączą
					atrakcyjny wygląd, intuicyjną nawigację i pełną optymalizację SEO.
					Dzięki temu Twój projekt strony internetowej nie tylko dobrze się
					prezentuje, ale przede wszystkim skutecznie pozyskuje nowych klientów.
					Niezależnie od tego, czy potrzebujesz prostej strony wizytówki, czy
					rozbudowanego serwisu, przygotuję rozwiązanie dopasowane do Twoich
					celów biznesowych.
				</ServiceParagraph>

				<ServiceParagraph
					reverse={true}
					heading={
						<>
							Dlaczego warto <span>zainwestować</span> w profesjonalną stronę
							WWW?
						</>
					}
					image='/img/codding_laptop.webp'
					imgAlt='Profesjonalne strony internetowe'>
					Profesjonalna strona internetowa to nie tylko estetyka, ale przede
					wszystkim funkcjonalność i realne wsparcie dla Twojego biznesu.
					Nowoczesny projekt WWW działa jak skuteczne narzędzie sprzedaży i
					marketingu – generuje leady, ułatwia kontakt z klientami i
					automatyzuje wiele procesów. Dzięki optymalizacji technicznej i
					responsywności Twoja witryna będzie działać szybko i poprawnie na
					każdym urządzeniu, co ma bezpośredni wpływ na pozycjonowanie w Google
					i satysfakcję użytkowników. To inwestycja, która przekłada się na
					większą widoczność, lepszą konwersję i stały rozwój firmy w
					internecie.
				</ServiceParagraph>
			</Wrapper>
		</section>
	);
};
