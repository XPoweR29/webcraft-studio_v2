import React from 'react';
import styles from './Pagination.module.scss';

interface Props {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

export const Pagination = ({
	currentPage,
	totalPages,
	onPageChange,
}: Props) => {
	if (totalPages <= 1) return null;

	const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

	return (
		<nav className={styles.pagination}>
			<button
				onClick={() => onPageChange(currentPage - 1)}
				disabled={currentPage === 1}
				className={`${styles.pageButton} ${styles.arrow}`}
				aria-label='Poprzednia strona'>
				‹
			</button>

			{pages.map((page) => (
				<button
					key={page}
					onClick={() => onPageChange(page)}
					className={`${styles.pageButton} ${
						currentPage === page ? styles.active : ''
					}`}>
					{page}
				</button>
			))}

			<button
				onClick={() => onPageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
				className={`${styles.pageButton} ${styles.arrow}`}
				aria-label='Następna strona'>
				›
			</button>
		</nav>
	);
};
