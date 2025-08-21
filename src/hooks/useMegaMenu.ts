
import { MegaMenuContext } from '@/contexts/megaMenu.context';
import { useContext } from 'react';

export const useMegaMenu = () => {
	const context = useContext(MegaMenuContext);
	if (!context)
		throw new Error('useMegaMenu must be used within MegaMenuProvider');
	return context;
};
