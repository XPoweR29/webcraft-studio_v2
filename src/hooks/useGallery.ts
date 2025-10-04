import { StaticImageData } from 'next/image';
import { useMemo } from 'react';

export const useGallery = (images: StaticImageData[]) => {
  const slides = useMemo(
		() =>
			images.map((img) => ({
				src: typeof img === 'string' ? img : img.src,
			})),
		[images]
	);

	return { slides };
};
