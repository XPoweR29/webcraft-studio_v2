'use client';
import { createContext, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface MegaMenuContextType {
	isSubmenuOpen: boolean;
	openMenu: () => void;
	closeMenu: () => void;
}

export const MegaMenuContext = createContext<MegaMenuContextType | undefined>(
	undefined
);

export const MegaMenuProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [isSubmenuOpen, setIsOpenSubmenu] = useState(false);
	const pathname = usePathname();
	let hideTimeout: NodeJS.Timeout | null = null;

	const openMenu = () => {
		if (hideTimeout) clearTimeout(hideTimeout);
		setIsOpenSubmenu(true);
	};

	const closeMenu = () => {
		hideTimeout = setTimeout(() => {
			setIsOpenSubmenu(false);
		}, 300);
	};

	useEffect(() => {
		setIsOpenSubmenu(false);
		if (hideTimeout) clearTimeout(hideTimeout);
	}, [pathname]);

	return (
		<MegaMenuContext.Provider value={{ isSubmenuOpen, openMenu, closeMenu }}>
			{children}
		</MegaMenuContext.Provider>
	);
};
