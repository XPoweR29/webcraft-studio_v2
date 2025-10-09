'use client';
import { useState } from 'react';
import styles from './CustomSelect.module.scss';

interface CustomSelectProps {
	label?: string;
	options: string[];
	value: string;
	onChange: (val: string) => void;
	className?: string;
}

export const CustomSelect = ({
	className,
	label,
	options,
	value,
	onChange,
}: CustomSelectProps) => {
	const [open, setOpen] = useState(false);

	return (
		<div className={`${styles.select} ${className}`}>
			{label && <span className={styles.label}>{label}</span>}

			<div className={styles.container}>
				<button
					className={styles.trigger}
					onClick={() => setOpen((p) => !p)}
					aria-haspopup='listbox'
					aria-expanded={open}>
					{value}
				</button>

				{open && (
					<ul className={styles.menu} role='listbox'>
						{options.map((opt) => (
							<li
								key={opt}
								className={`${styles.option} ${
									opt === value ? styles.active : ''
								}`}
								onClick={() => {
									onChange(opt);
									setOpen(false);
								}}
								role='option'
								aria-selected={opt === value}>
								{opt}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};
