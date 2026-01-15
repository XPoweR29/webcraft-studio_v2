import { BrandLoaderContext } from '@/contexts/brandLoader.context';
import React, { useContext } from 'react'

export const useBrandLoader = ():BrandLoaderContextType => {
	const context = useContext(BrandLoaderContext);

	if(!context) {
		throw new Error('useBrandLoader must be used within a ContextProvider');
	
	}
	return context;

};
