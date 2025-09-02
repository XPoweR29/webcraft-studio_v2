import { Process_Section } from '@/components/Process_Section/Process_Section';
import { useBreakpoints } from '@/hooks/useBreakpoint';
import { About_Content } from '@/sections/About_Content/About_Content';
import { Home_Contact } from '@/sections/Home_Contact/Home_Contact';
import { SectionHero } from '@/sections/SectionHero/SectionHero';
import { linkHref } from '@/utils/linkHref.helper';
import React from 'react';

const About = () => {
	return (
		<>
			<SectionHero
				heading='Kilka słów o mnie'
				subline='I o tym, co robię w WebCraftSTUDIO'
				bgImage='/img/photos/about_hero_image.webp'
			/>
			<About_Content />
			<Process_Section
				heading='Co zyskujesz dzięki współpracy ze mną?'
				bgImage='/img/handshake_sketch.svg'
				btnLabel='skontaktuj się'
				redirectTo={linkHref('contact')}
				steps={[
					{
						title: 'Indywidualne podejście',
						text: 'Każdy projekt tworzę od zera, dopasowując go do Twojej branży, klientów i celów biznesowych.',
					},
					{
						title: 'Jasny plan działania',
						text: 'Od początku wiesz, co się dzieje – przygotowuję harmonogram i konkretne kroki, bez zbędnego chaosu.',
					},
					{
						title: 'Pełna przejrzystość',
						text: 'Regularnie informuję Cię o postępach, zapewniam możliwość wnoszenia uwag i pełnego wglądu w cały proces realizacji.',
					},
					{
						title: 'Wsparcie i spokojna głowa',
						text: 'Po oddaniu strony pomagam Ci w jej obsłudze i doradzam, jak najlepiej ją wykorzystać.',
					},
				]}>
				Każdy projekt to nie tylko efekt końcowy w postaci strony, ale też
				sposób, w jaki razem do niego dochodzimy. Współpraca ze mną oznacza
				jasne zasady, pełne zaangażowanie i stronę, która działa na Twoją
				korzyść.
			</Process_Section>
			<Home_Contact/>
		</>
	);
};

export default About;
