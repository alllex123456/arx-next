import { motion } from 'framer-motion';

import Head from 'next/head';
import Hero from '@/components/Hero/Hero';
import Services from '@/components/Services/Services';
import Light from '@/components/common/Light';
import WorkFlow from '@/components/WorkFlow/WorkFlow';
import About from '@/components/About/About';

import { pageTransition } from '@/variants/pages';

export default function Home() {
  return (
    <motion.main
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>ARX Logicwave | Web Development | Home</title>
      </Head>

      <Light />

      <div className="relative z-10">
        <Hero
          heading="Innovation Meets Elegance in Web Development"
          home={true}
        />

        <Services />

        <WorkFlow />

        <About />
      </div>
    </motion.main>
  );
}
