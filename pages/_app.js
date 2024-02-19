import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Lenis from '@studio-freight/lenis';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

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
