import Head from 'next/head';
import Hero from '@/components/Hero/Hero';
import Services from '@/components/Services/Services';
import Light from '@/components/common/Light';
import WorkFlow from '@/components/WorkFlow/WorkFlow';
import About from '@/components/About/About';

export default function Home() {
  return (
    <main>
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
    </main>
  );
}
