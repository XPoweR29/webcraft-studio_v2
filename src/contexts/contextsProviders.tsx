import React from 'react';
import { AppContextProvider } from './app.context';
import { CookieContextProvider } from './cookie.context';
import { MegaMenuProvider } from './megaMenu.context';

export const ContextsProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<AppContextProvider>
			<MegaMenuProvider>
				<CookieContextProvider>
                    {children}
                    </CookieContextProvider>
			</MegaMenuProvider>
		</AppContextProvider>
	);
};
