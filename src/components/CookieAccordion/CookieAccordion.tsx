import React, { useState } from 'react';
import styles from './CookieAccordion.module.scss';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Switch } from '../Switch/Switch';
import { useCookieContext } from '@/hooks/useCookieContext';
import { defaultConsent } from '@/contexts/cookie.context';

interface Props {
	items: Consent[];
	allowMultiopen?: boolean;
}

export const CookieAccordion = ({ items, allowMultiopen }: Props) => {
	const { editedConsent, setEditedConsent } = useCookieContext();
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

	const handleSwitch = (id: keyof CookieConsentSettings, value: boolean) => {
		if (!editedConsent) return;
		setEditedConsent((prev) => ({
			...prev!,
			[id]: value,
		}));
	};

	return (
		<div className={styles.accordion}>
			{items.map(({ id, title, content }) => (
				<div key={id} className={styles.item}>
					<button
						className={`${styles.header} ${
							openItems.includes(id) ? styles.active : ''
						}`}
						onClick={() => toggleItem(id)}>
						<Icon className={styles.icon} icon='ri:arrow-down-s-line' />
						{title}
						<Switch
							onChange={(value)=>handleSwitch(id, value)}
							className={styles.switch}
							disabled={id === 'necessary'}
							checked={id==='necessary'?true:editedConsent?.[id] ?? false}
						/>
					</button>

					{openItems.includes(id) && (
						<div className={styles.content}>{content}</div>
					)}
				</div>
			))}
		</div>
	);
};
