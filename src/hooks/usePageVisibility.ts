import { useEffect, useState } from 'react';

export const usePageVisibility = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (document.visibilityState === 'visible') {
			setIsVisible(true);
			return;
		}

		const handleVisibilityChange = () => {
			if (document.visibilityState === 'visible') {
				setIsVisible(true);
				document.removeEventListener(
					'visibilitychange',
					handleVisibilityChange
				);
			}
		};

		document.addEventListener('visibilitychange', handleVisibilityChange);
		return () =>
			document.removeEventListener('visibilitychange', handleVisibilityChange);
	}, []);

	return isVisible;
};
