type NavLink = {
	id: string;
	label: string;
	href: string;
	children?: readonly NavLink[];
	hidden: boolean;
	icon?: string;
	altIcon?: string;
	description?: string;
};
