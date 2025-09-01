import React from 'react';
import styles from './Blog_Section.module.scss';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import Image from 'next/image';
import { RecentBlogPosts } from '@/components/RecentBlogArticles/RecentBlogPosts';

export const Blog_Section = () => {
	return (
		<section className={styles.section}>
			<Wrapper className={styles.wrapper}>
				<Image
					src={'/img/pen_sketch.svg'}
					className={styles.sketchImg}
					alt=''
					width={720}
					height={360}
					aria-hidden={true}
					draggable={false}
				/>
				<h2 className={styles.heading}>Sprawdź co <span>nowego</span> na blogu</h2>
				<p className={styles.text}>
					Poznaj praktyczne porady, inspiracje i świeże nowości ze świata stron
					internetowych, SEO oraz promocji lokalnej firmy. Na blogu regularnie
					dzielę się sprawdzonymi wskazówkami i rozwiązaniami, które naprawdę
					pomagają rozwinąć Twój biznes online.
				</p>

				<RecentBlogPosts
					className={styles.recentBlog}
					articles={[
						{
							title:
								'Co to jest SEO i dlaczego jest ważne dla Twojej strony internetowej?',
							excerpt:
								'SEO to nie tylko modne hasło – to klucz do tego, by Twoja strona była widoczna w Google. Dowiedz się, czym jest optymalizacja SEO i jak wpływa na liczbę odwiedzin...',
								date: '27 Aug 2025',
								href: '/blog/co-to-jest-seo-i-dlaczego-jest-wazne-dla-twojej-strony-internetowej',
								image: '/img/blog/test_blogcardImg.jpg', 
								imgAlt: 'Pozycjonowanie SEO dla strony internetowej'
						},
						{
							title:
								'Co to jest SEO i dlaczego jest ważne dla Twojej strony internetowej?',
							excerpt:
								'SEO to nie tylko modne hasło – to klucz do tego, by Twoja strona była widoczna w Google. Dowiedz się, czym jest optymalizacja SEO i jak wpływa na liczbę odwiedzin...',
								date: '27 Aug 2025',
								href: '/blog/co-to-jest-seo-i-dlaczego-jest-wazne-dla-twojej',
								image: '/img/blog/test_blogcardImg.jpg', 
								imgAlt: 'Pozycjonowanie SEO dla strony internetowej'
						},
						{
							title:
								'Co to jest SEO i dlaczego jest ważne dla Twojej strony internetowej?',
							excerpt:
								'SEO to nie tylko modne hasło – to klucz do tego, by Twoja strona była widoczna w Google. Dowiedz się, czym jest optymalizacja SEO i jak wpływa na liczbę odwiedzin...',
								date: '27 Aug 2025',
								href: '/blog/co-to-jest-seo-i-dlaczego-jest-wazne-dla-twojej-strony-',
								image: '/img/blog/test_blogcardImg.jpg', 
								imgAlt: 'Pozycjonowanie SEO dla strony internetowej'
						},
					]}
				/>
			</Wrapper>
		</section>
	);
};
