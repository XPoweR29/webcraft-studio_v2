'use client';

import React, { useEffect, useState } from 'react';
import styles from './BlogList.module.scss';
import { getAllBlogPreviews } from '@/utils/getBlogData';
import { BlogCard } from '../BlogCard/BlogCard';
import { Wrapper } from '../Wrapper/Wrapper';
import { CustomSelect } from '../CustomSelect/CustomSelect';
import { Pagination } from '../Pagiantion/Pagination';
import { formatDatePL } from '@/utils/formatDatePL';

const POSTS_PER_PAGE = 6;
export const BlogList = () => {
	const POSTS = getAllBlogPreviews();
	const [activeCategory, setActiveCategory] = useState('Wszystkie');
	const [currentPage, setCurrentPage] = useState(1);
	const CATEGORIES = ['Wszystkie', 'SEO', 'WWW', 'Wizytówka Google', 'Podcast'];

	const filteredPosts =
		activeCategory === 'Wszystkie'
			? POSTS
			: POSTS.filter((p) => p.category === activeCategory);

	const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
	const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
	const endIndex = startIndex + POSTS_PER_PAGE;
	const visiblePosts = filteredPosts.slice(startIndex, endIndex);

	const handlePagination = (page: number) => {
		if (page >= 1 && page <= totalPages) {
			setCurrentPage(page);
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	};
	
	useEffect(() => {
		setCurrentPage(1);
	}, [activeCategory]);

	return (
		<section className={styles.section}>
			<Wrapper className={styles.wrapper}>
				<CustomSelect
					className={styles.filter}
					label='Filtruj:'
					options={CATEGORIES}
					value={activeCategory}
					onChange={setActiveCategory}
				/>

				<div className={styles.cardsContainer}>
					{visiblePosts.map((p, i) => (
						<div key={i} className={styles.postCard}>
							<BlogCard
								href={p.metadata.relPath!}
								mainImg={p.mainImg}
								mainImgAlt={p.mainImgAlt}
								title={p.title}
								description={p.description}
								date={p.date}
								category={p.category}
							/>
						</div>
					))}
				</div>

				<Pagination  
					currentPage={currentPage}
					totalPages={totalPages}
					onPageChange={handlePagination}
				/>

			</Wrapper>
		</section>
	);
};
