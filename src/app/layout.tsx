import { Montserrat } from 'next/font/google';
import '../sass/globals.scss';
import { Header } from '@/components/Header/Header';
import { Toaster } from 'react-hot-toast';
import { createMetadata } from '@/utils/createMetadata';
import { Footer } from '@/components/Footer/Footer';
import { CookieConsentBanner } from '@/components/CookieConsentBanner/CookieConsentBanner';
import { GAScriptLoader } from '@/system/GAScriptLoader';
import { ContextsProvider } from '@/contexts/contextsProviders';
import { cookies } from 'next/headers';
import { BrandLoaderManager } from '@/components/BrandLoader/BrandLoaderManager';
import { BRAND_LOADER_DURATION } from '@/config/constants';

const mainFont = Montserrat({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '700', '800', '900'],
});

export const metadata = createMetadata({
	title: 'Tworzenie stron internetowych i SEO | WebCraftSTUDIO',
	description:
		'Projektowanie stron WWW i pozycjonowanie w Google. Nowoczesne strony internetowe dla firm oraz lokalne SEO, które zwiększa Twoją widoczność w sieci.',
});

export default async function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

	const cookieStore = await cookies();
	const showBrandLoader = !cookieStore.has('wcs_brand_loader_seen');

	const COOKIE_BANNER_EXTRA_DELAY = 1000;
	const cookieBannerDelay = showBrandLoader ? BRAND_LOADER_DURATION + COOKIE_BANNER_EXTRA_DELAY : 500;



	return (
		<html lang='pl'>
			<body className={mainFont.className}>
				<ContextsProvider showOnLoad={showBrandLoader}>
					<BrandLoaderManager showOnLoad={showBrandLoader}/> 
					<Header />
					<main>{children}</main>
					<Footer />
					<Toaster />
					<CookieConsentBanner initialDelayMs={cookieBannerDelay}/>
					<GAScriptLoader />
				</ContextsProvider>
			</body>
		</html>
	);
};