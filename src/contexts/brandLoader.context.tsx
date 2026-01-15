'use client';

import React, { createContext, useContext, useState } from 'react';

export const BrandLoaderContext = createContext<BrandLoaderContextType | undefined>(undefined);

interface Props {
	children: React.ReactNode;
	showOnLoad: boolean;
}

export const BrandLoaderProvider = ({ children, showOnLoad }: Props) => {
	const [isLoaded, setIsLoaded] = useState(!showOnLoad);

	return (
		<BrandLoaderContext.Provider value={{ isLoaded, setIsLoaded }}>
			{children}
		</BrandLoaderContext.Provider>
	);
};
