import { Wrapper } from '@/components/Wrapper/Wrapper';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const schema = {
	'@context': 'https://schema.org',
	'@type': 'WebPage',
	name: '404 - Strona nie znaleziona',
	description: 'Przepraszamy, ale nie mogliśmy znaleźć strony, której szukasz.',
	inLanguage: 'pl-PL',
};

const NotFound = () => {
	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
			/>

			<div className='notFoundPage'>
				<Wrapper className='wrapper'>
					<h1 className='heading'>
						Wygląda na to, że ta strona nie istnieje...
					</h1>
					<Image
						src={'/img/not-found-image.svg'}
						width={400}
						height={200}
						className='image'
						alt=''
						aria-hidden={true}
						draggable={false}
					/>
					<p className='text'>
						Link, który Cię tu sprowadził, prawdopodobnie wygasł lub zawiera
						literówkę. Spróbujmy jeszcze raz od początku.
					</p>
					<Link href='/'>⬅ Wróć do strony głównej</Link>
				</Wrapper>
			</div>
		</>
	);
};

export default NotFound;
