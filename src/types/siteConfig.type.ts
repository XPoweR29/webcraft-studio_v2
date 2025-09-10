export interface ContactInfo {
	phone: string;
	phoneHref: string;
	email: string;
}

export interface Address {
	street: string | null;
	city: string;
	postalCode: string;
	countryCode: string;
	map: string;
}

export interface ExternalLinks {
	facebook: string;
	insta: string;
	googleMaps: string;
	googleMyBusiness: string;
	localoSite: string;
}

export interface SiteConfig {
	baseUrl: string;
	siteName: string;
	contact: ContactInfo;
	address: Address;
	externalLinks: ExternalLinks;
}
