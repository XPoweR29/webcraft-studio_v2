import {
	Html,
	Head,
	Body,
	Container,
	Section,
	Text,
	Heading,
} from '@react-email/components';

interface ContactTemplateProps {
	name: string;
	email: string;
	phone: string;
	subject: string;
	message: string;
}

export const ContactTemplate = ({
	name,
	email,
	phone,
	subject,
	message,
}: ContactTemplateProps) => {
	return (
		<Html>
			<Head />
			<Body style={styles.body}>
				<Container style={styles.container}>
					{/* Header */}
					<Section style={styles.header}>
						<Heading style={styles.headerTitle}>
							Nowa wiadomość od klienta
						</Heading>
					</Section>

					{/* Content */}
					<Section style={styles.content}>
						<div style={styles.contactData}>
							<Text style={styles.paragraph}>
								<strong style={styles.label}>Imię:</strong> {name}
							</Text>
							<Text style={styles.paragraph}>
								<strong style={styles.label}>Telefon:</strong> {phone}
							</Text>
							<Text style={styles.paragraph}>
								<strong style={styles.label}>Adres e-mail:</strong> {email}
							</Text>
						</div>

						<Text style={styles.message}>{message}
						</Text>
					</Section>

					{/* Footer */}
					<Section style={styles.footer}>
						<Text style={styles.footerText1}>
							Ta wiadomość została przesłana przez formularz kontaktowy na
							Twojej stronie internetowej.
						</Text>
						<Text style={styles.footerText2}>
								Możesz odpowiedzieć bezpośrednio, używając opcji "Odpowiedz" w
								swojej skrzynce pocztowej, lub skontaktować się z nadawcą za
								pomocą danych kontaktowych zawartych w treści wiadomości.
						</Text>
					</Section>
				</Container>
			</Body>
		</Html>
	);
};

export default ContactTemplate;

const styles = {
	body: {
		fontFamily: 'Arial, sans-serif',
		lineHeight: '1.6',
		backgroundColor: '#f3f4f6',
		margin: '0',
		padding: '0',
	},
	container: {
		maxWidth: '600px',
		margin: '20px auto',
		backgroundColor: '#ffffff',
		padding: '0',
		border: '1px solid #dcdcdc',
		borderRadius: '8px',
		boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
		overflow: 'hidden',
	},
	header: {
		textAlign: 'center' as const,
		backgroundColor: '#0ea8cb',
		color: '#ffffff',
		borderRadius: '8px 8px 0 0',
	},
	headerTitle: {
		fontSize: '22px',
		margin: '0',
		padding: '15px 0',
		color: '#ffffff',
		fontWeight: 'normal',
	},
	content: {
		color: '#333333',
	},
	contactData: {
		padding: '20px',
		paddingBottom: '1em',
		borderBottom: '1px solid lightgray',
	},
	paragraph: {
		margin: '10px 0',
		color: '#555555',
		fontSize: '16px',
		fontWeight: 'bold',
	},
	label: {
		marginRight: '0.3em',
		color: '#0ea8cb',
		fontWeight: 'bold',
	},
	message: {
		margin: '10px 0',
		padding: '40px 20px',
		color: '#555555',
		fontSize: '16px',
		whiteSpace: 'pre-wrap' as const,
	},
	footer: {
		marginTop: '1em',
		textAlign: 'center' as const,
		backgroundColor: '#f1f1f1',
		color: '#666666',
		borderRadius: '0 0 8px 8px',
	},
	footerText1: {
		fontSize: '0.7em',
		padding: '0 20px',
		paddingTop: '10px',
	},
	footerText2: {
		fontSize: '0.7em',
		padding: '0 20px',
		paddingBottom: '10px',
	},
};
