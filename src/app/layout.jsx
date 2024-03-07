import './globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { roboto, montserrat } from '@/styles/font';
import Header from '../components/Header/Header';

export const metadata = {
	title: 'My Movie App',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
	return (
		<html lang='fr'>
			<body className={`${roboto.variable} ${montserrat.variable}`}>
				<Header />
				<main>{children}</main>
			</body>
		</html>
	);
}
