import { Montserrat } from 'next/font/google';
import '../sass/globals.scss';
import { Header } from '@/components/Header/Header';
import { Toaster } from 'react-hot-toast';
import { createMetadata } from '@/utils/creataeMetadata';
import { Footer } from '@/components/Footer/Footer';
import { CookieConsentBanner } from '@/components/CookieConsentBanner/CookieConsentBanner';
import { GAScriptLoader } from '@/system/GAScriptLoader';
import { ContextsProvider } from '@/contexts/contextsProviders';

const mainFont = Montserrat({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '700', '800', '900'],
});

export const metadata = createMetadata({
	title: 'Tworzenie stron internetowych i SEO | WebCraftSTUDIO',
	description:
		'Projektowanie stron WWW i pozycjonowanie w Google. Nowoczesne strony internetowe dla firm oraz lokalne SEO, które zwiększa Twoją widoczność w sieci.',
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='pl'>
			<body className={mainFont.className}>
				<ContextsProvider>
					<Header />
					<main>{children}</main>
					<Footer />
					<Toaster />
					<CookieConsentBanner />
					<GAScriptLoader />
				</ContextsProvider>
			</body>
		</html>
	);
}
