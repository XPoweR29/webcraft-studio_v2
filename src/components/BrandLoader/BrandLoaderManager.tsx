'use client';

import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { BrandLoader } from './BrandLoader';
import { BRAND_LOADER_DURATION } from '@/config/constants';
import { usePageVisibility } from '@/hooks/usePageVisibility';
import { useBrandLoader } from '@/hooks/useBrandLoader';

interface Props {
	showOnLoad: boolean;
}
export const BrandLoaderManager = ({ showOnLoad }: Props) => {
	const [showLoader, setShowLoader] = useState(showOnLoad);
	const isVisible = usePageVisibility();
	const { setIsLoaded } = useBrandLoader();

	useEffect(() => {
		if(!showLoader || !isVisible) {
			if(!showLoader) setIsLoaded(true);
			return;
		}
		
		const timeout = setTimeout(() => {
			setShowLoader(false);

			setTimeout(() => {
				setIsLoaded(true);
			}, 700);

			document.cookie = 'wcs_brand_loader_seen=1; path=/';
		}, BRAND_LOADER_DURATION);
		
		return () => clearTimeout(timeout);

	}, [showLoader, isVisible, setIsLoaded]);

	return (
		<AnimatePresence mode='wait'>
			{showLoader && <BrandLoader key='brand_loader'/>} 
		</AnimatePresence>
	);
};
