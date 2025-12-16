'use client';

import Image from 'next/image';
import React from 'react';

export default function Loading() {
	return (
		<div className='loaderBackground'>
			<div className='loaderContainer'>
				<Image
					className='loaderLogo'
					src={'/img/logo_dark.svg'}
					width={250}
					height={52}
					alt=''
					priority
				/>
				<div className='loader'></div>
			</div>
		</div>
	);
}
