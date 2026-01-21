'use client';
import {
	createContext,
	useState,
	useEffect,
	useRef,
	useCallback,
	useMemo,
} from 'react';
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
	const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

	const openMenu = useCallback(() => {
		if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
		setIsOpenSubmenu(true);
	}, []);

	const closeMenu = useCallback(() => {
		hideTimeoutRef.current = setTimeout(() => {
			setIsOpenSubmenu(false);
		}, 300);
	}, []);

	useEffect(() => {
		setIsOpenSubmenu(false);
		if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
	}, [pathname]);

	const contextValue = useMemo(
		() => ({ isSubmenuOpen, openMenu, closeMenu }),
		[isSubmenuOpen, openMenu, closeMenu]
	);

	return (
		<MegaMenuContext.Provider value={contextValue}>
			{children}
		</MegaMenuContext.Provider>
	);
};
