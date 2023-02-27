import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NextSeo } from 'next-seo';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { MainLayout } from '../core/layouts/MainLayout';
import { PopupProvider } from '../core/contexts/PopupContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import 'swiper/css';
import 'swiper/css/bundle';
// import 'bootstrap/dist/css/bootstrap.css';
export default function App({ Component, pageProps }: AppProps) {
	const queryClient = new QueryClient();
	return (
		<>
			<NextSeo
				title={'Hi Jobs'}
				description={'description go here'}
				openGraph={{
					images: [
						{
							url: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg',
							width: 1000,
							height: 700,
							alt: 'Hi Jobs',
						},
						{
							url: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg',
							width: 1000,
							height: 700,
							alt: 'Hi Jobs',
						},
					],
				}}
			/>
			<QueryClientProvider client={queryClient}>
				<PopupProvider>
					<MainLayout>
						<Header />
						<Component {...pageProps} />
						<Footer />
					</MainLayout>
				</PopupProvider>
			</QueryClientProvider>
		</>
	);
}
