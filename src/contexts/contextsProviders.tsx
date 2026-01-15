import React from 'react';
import { AppContextProvider } from './app.context';
import { CookieContextProvider } from './cookie.context';
import { MegaMenuProvider } from './megaMenu.context';
import { BrandLoaderProvider } from './brandLoader.context';

export const ContextsProvider = ({
	children, showOnLoad
}: {
	children: React.ReactNode;
	showOnLoad: boolean;
}) => {
	return (
		<AppContextProvider>
			<MegaMenuProvider>
				<CookieContextProvider>
					<BrandLoaderProvider showOnLoad={showOnLoad}>
					{children}
					</BrandLoaderProvider>
				</CookieContextProvider>
			</MegaMenuProvider>
		</AppContextProvider>
	);
};
