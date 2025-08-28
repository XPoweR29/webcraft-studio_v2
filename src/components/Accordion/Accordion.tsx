'use client';

import React, { useState } from 'react';
import styles from './Accordion.module.scss';
import { Icon } from '@iconify/react';

export type AccordionItem = {
	id: string;
	title: string;
	content: React.ReactNode;
};

interface Props {
	items: AccordionItem[];
	allowMultiopen?: boolean;
	className?: string;
}

export const Accordion = ({
	items,
	allowMultiopen = false,
	className,
}: Props) => {
	const [openItems, setOpenItems] = useState<string[]>([]);

	const toggleItem = (id: string) => {
		setOpenItems((prev) => {
			if (prev.includes(id)) {
				return prev.filter((itemId) => itemId !== id);
			} else {
				return allowMultiopen ? [...prev, id] : [id];
			}
		});
	};

	return (
		<div className={`${styles.accordion} ${className || ''}`}>
			{items.map(({ id, title, content }) => {
				const isOpen = openItems.includes(id);
				return (
					<div key={id} className={styles.item}>
						<button
							className={`${styles.question} ${
								isOpen ? styles['question--active'] : ''
							}`}
							onClick={() => toggleItem(id)}
							aria-expanded={isOpen}
							aria-controls={`faq-${id}`}>
							<span>{title}</span>
							<Icon
								className={`${styles.icon} ${
									isOpen ? styles['icon--isOpen'] : ''
								}`}
								icon='bxs:down-arrow'
							/>
						</button>

						<div
							className={`${styles.content} ${
								isOpen ? styles['content--open'] : ''
							}`}>
							<p>{content}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};
