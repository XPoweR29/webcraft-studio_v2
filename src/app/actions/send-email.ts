'use server';

import ContactTemplate from '@/components/emails/contact-template';
import { ContactFormData } from '@/hooks/useContactForm';
import { Resend } from 'resend';
import { SITE_CONFIG } from '@/config/site.config';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (data: ContactFormData) => {
	const { email, message, name, phone, subject } = data;
	const formattedPhone = phone ? `+48 ${phone}` : 'Nie podano';

	if (!name?.trim() || !email?.trim() || !message?.trim()) {
		return { error: `Wypełnij wszystkie wymagane pola` };
	}

	try {
		const { data: resendData, error: resendError } = await resend.emails.send({
			from: 'kontakt@webcraft-studio.pl',
			to: ['kontakt@webcraft-studio.pl'],
			subject: 'Wiadomość z formularza kontaktowego',
			text: message,
			react: ContactTemplate({
				name,
				email,
				phone: formattedPhone,
				message,
				subject: 'Wiadomość z formularza',
			}),
			replyTo: email,
		});

		if (resendError) {
			console.error(`Resend Error: ${resendError}`);
			return { error: resendError.message };
		}

		return { success: true, data: resendData };
	} catch (error) {
		console.error(`Server Action Error: ${error}`);
		return { error: `Wystąpił bład podczas wysyłania wiadomości.` };
	}
};
