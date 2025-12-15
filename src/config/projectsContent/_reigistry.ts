import { ADONA } from './adona.config';
import { DZIALKI_W_BESKIDZIE } from './dzialki_w_beskidzie.config';
import { KWATERY_U_ZOSI } from './kwatery_u_zosi.pl.config';

export const PROJECTS = [
	ADONA,
	DZIALKI_W_BESKIDZIE,
	KWATERY_U_ZOSI,
] as const;

export type ProjectId = (typeof PROJECTS)[number]['id'];
