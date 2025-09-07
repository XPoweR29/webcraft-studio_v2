import { ProfitsCTAPProps } from '@/components/ProfitsCTA/ProfitsCTA';

export const CTA_PROFITS: Record<string, ProfitsCTAPProps> = {
	'strony-www': {
		heading: 'Co zyskujesz dzięki współpracy ze mną?',
		text: 'Tworzę strony, które nie tylko dobrze wyglądają, ale realnie wspierają Twój biznes. Jasne zasady, szybka realizacja i pełne skupienie na Twoich celach.',
		children: [
			{
				title: 'Skrojone pod Twój biznes',
				description:
					'Każdy projekt tworzę od podstaw, tak aby idealnie pasował do Twojej branży i klientów.',
			},
			{
				title: 'Wyniki, nie obietnice',
				description:
					'Projektuję z myślą o efektach – większa widoczność, lepszy odbiór marki i więcej zapytań od klientów.',
			},
			{
				title: 'Przejrzysty proces',
				description:
					'Od początku wiesz, co robimy – konkretny plan działań i zero zbędnego chaosu.',
			},
			{
				title: 'Stałe wsparcie',
				description:
					'Po wdrożeniu pomagam, doradzam i dbam, aby strona działała bez zarzutu.',
			},
		],
	},
	'optymalizacja-seo': {
		heading: 'SEO, które dowozi zapytania',
		text: 'Strategia, content i linkowanie – widoczność tam, gdzie szukają klienci.',
		children: [
			{
				title: 'Analiza i plan',
				description: 'Słowa kluczowe, audyt techniczny, roadmap.',
			},
			{
				title: 'Content, który rankuje',
				description: 'Treści o wysokiej trafności i jakości.',
			},
			{
				title: 'Linki i analityka',
				description: 'Stabilny wzrost i monitorowanie wyników.',
			},
		],
	},
	'google-moja-firma': {
		heading: 'Wizytówka Google, która przyciąga lokalnie',
		text: 'Optymalizacja profilu, aktualności i spójne NAP.',
		children: [
			{
				title: 'Pełny profil',
				description: 'Usługi, oferta, zdjęcia, produkty.',
			},
			{
				title: 'Opinie i aktywność',
				description: 'Posty, Q&A, praca z recenzjami.',
			},
			{
				title: 'Lokalne SEO',
				description: 'Cytowania NAP i widoczność w mapach.',
			},
		],
	},
};
