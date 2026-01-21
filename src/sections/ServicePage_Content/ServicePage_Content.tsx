import React from 'react';
import styles from './ServicePage_Content.module.scss';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { ServiceParagraph } from '@/components/ServiceParagraph/ServiceParagraph';

type ServiceParagraphType = {
	heading: React.ReactNode;
	children: string;
	image: string;
	imgAlt: string;
	reverse?: boolean;
};

interface Props {
	paragraphs: ServiceParagraphType[];
}
export const ServicePage_Content = ({ paragraphs: [p1, p2] }: Props) => {

	return (
		<section className={styles.section}>
			<Wrapper className={styles.wrapper}>
				<ServiceParagraph
					heading={p1.heading}
					image={p1.image}
					imgAlt={p1.imgAlt}>
					{p1.children}
				</ServiceParagraph>

				<ServiceParagraph
					reverse={true}
					heading={p2.heading}
					image={p2.image}
					imgAlt={p2.imgAlt}>
					{p2.children}
				</ServiceParagraph>
			</Wrapper>
		</section>
	);
};
