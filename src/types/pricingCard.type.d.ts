interface PricingCard {
	name: string;
	description: string;
	icon: string | StaticImageData;
	price: number;
	features: string[];
	dark?: boolean;
	info?: string;
	pricePrefix?: string;
}
