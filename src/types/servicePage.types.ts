import { ComponentProps } from 'react';
import { DirectQuery } from './../components/DirectQuery/DirectQuery';
import { SectionHero } from '@/sections/SectionHero/SectionHero';
import { Process_Section } from '@/components/Process_Section/Process_Section';
import { Pricing_Section } from '@/sections/Pricing_Section/Pricing_Section';
import { OtherOffer } from '@/sections/OtherOffer/OtherOffer';
import { FAQ_Section } from '@/sections/FAQ_Section/FAQ_Section';
import { Review_Section } from '@/sections/Review_Sectoin/Review_Section';


/////main interface/////
export interface ServiceContentConfig {
	heroSection: ComponentProps<typeof SectionHero>;
	processSection: ComponentProps<typeof Process_Section>;
	pricingSection: ComponentProps<typeof Pricing_Section>;
	directQuery: ComponentProps<typeof DirectQuery>;
	otherOffer: ComponentProps<typeof OtherOffer>;
	faqSection: ComponentProps<typeof FAQ_Section>;
	reviewSection: ComponentProps<typeof Review_Section>;
}
