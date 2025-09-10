import { ContactNap } from '@/components/ContactNap/ContactNap';
import { SITE_CONFIG } from '@/config/site.config';
import { ContactStart } from '@/sections/ContactStart/ContactStart';
import { createMetadata } from '@/utils/metadata';
import React from 'react';

const SLUG = 'contact';

const schema = {
	'@context': 'https://schema.org',
	'@type': 'ContactPage',
	'@id': `${SITE_CONFIG.baseUrl}/${SLUG}/#contact`,
	url: `${SITE_CONFIG.baseUrl}/${SLUG}`,
	name: 'Contact | Frontend Starter for Developers',
	description:
		'Get in touch with us — whether you have questions, feedback, or want to contribute to this frontend boilerplate.',
	isPartOf: {
		'@type': 'WebSite',
		'@id': `${SITE_CONFIG.baseUrl}/#main`,
	},
	mainEntityOfPage: {
		'@type': 'WebPage',
		'@id': `${SITE_CONFIG.baseUrl}/${SLUG}`,
	},
	potentialAction: [
		{
			'@type': 'SendAction',
			name: 'Send a message',
			target: {
				'@type': 'EntryPoint',
				urlTemplate: `${SITE_CONFIG.baseUrl}/${SLUG}#formularz`,
				actionPlatform: [
					'https://schema.org/DesktopWebPlatform',
					'https://schema.org/MobileWebPlatform',
				],
			},
		}
	],
};

export const metadata = createMetadata({
	slug: SLUG,
	title: 'Contact | Frontend Starter Boilerplate for Developers',
	description:
		'Want to ask something or contribute to this frontend starter project? Get in touch via the form or call us directly.',
});

const Contact = () => {
	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
			/>

			<ContactStart />
			<ContactNap />
		</>
	);
};

export default Contact;
