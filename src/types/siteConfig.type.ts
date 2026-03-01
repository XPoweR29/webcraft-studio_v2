export interface ContactInfo {
	phone: string;
	phoneHref: string;
	email: string;
}

export interface Address {
	streetAddress: string | null;
	city: string;
	postalCode: string;
	countryCode: string;
	map: string;
	latitude?: number;
	longitude?: number;
}

export interface ExternalLinks {
	facebook: string;
	insta: string;
	googleMaps: string;
	googleMyBusiness: string;
	googleCidLink: string;
	googleReviewDirectLink: string;
	localoSite: string;
}

export interface SiteConfig {
	baseUrl: string;
	siteName: string;
	contact: ContactInfo;
	address: Address;
	externalLinks: ExternalLinks;
}
