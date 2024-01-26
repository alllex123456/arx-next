import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
      <Footer />
    </>
  );
}
