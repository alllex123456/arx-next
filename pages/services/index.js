import { useRouter } from 'next/router';

import Head from 'next/head';
import Section from '@/components/common/Section';
import Light from '@/components/common/Light';
import Hero from '@/components/Hero/Hero';
import SectionHeading from '@/components/common/SectionHeading';
import CardServices from '@/components/cards/CardServices';

const Services = () => {
  const router = useRouter();

  const serviceCards = [
    {
      heading: (
        <SectionHeading
          noPadding
          title="Design"
          text="Crafted vision, elevated by design"
        />
      ),
      title: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop'],
      text: [
        'Crafted Vision: In the design realm, we bring concepts to life through a combination of artistic finesse and technological precision. ',
        'Our design team utilizes industry-leading tools such as Figma, Adobe Illustrator, and Adobe Photoshop to sculpt visual narratives that resonate with your brand identity. ',
        'From wireframes to interactive prototypes, we specialize in turning ideas into captivating design solutions that stand out in the digital landscape.',
        {
          ['Services include:']: [
            'User Interface (UI) Design',
            'User Experience (UX) Design',
            'Interactive Prototyping',
            'Branding and Visual Identity',
            'Graphic Design',
          ],
        },
      ],
      button: {
        label: 'Check pricing',
        onClick: () => router.push('/pricing'),
      },
      image: {
        src: '/images/designer-1.webp',
        alt: 'web designer working with physical blueprints',
      },
    },
    {
      heading: (
        <SectionHeading
          noPadding
          title="Development"
          text="Powerful technologies serving scalable solutions"
        />
      ),
      title: ['React', 'Next.js', 'Tailwind CSS'],
      text: [
        'Code with Precision: Our development team is dedicated to building scalable and future-ready solutions.',
        'Using the power of React with Next.js, we craft dynamic web applications that seamlessly blend innovation with functionality.',
        "Whether you're envisioning a corporate website, an e-store, or a custom web solution, our developers are equipped with the expertise to turn your ideas into a digital reality.",
        {
          ['Services include:']: [
            'Frontend Development',
            'Single Page Applications (SPA)',
            'Server-Side Rendering (SSR)',
            'Web Application Development',
            'E-commerce Solutions',
          ],
        },
      ],
      button: {
        label: 'Check pricing',
        onClick: () => router.push('/pricing'),
      },
      image: {
        src: '/images/city-1.webp',
        alt: 'web designer working with physical blueprints',
      },
    },
  ];

  return (
    <main className="">
      <Head>
        <title>ARX Logicwave | Web Development | Services</title>
      </Head>

      <Light />

      <div className="relative z-10">
        <Hero
          animationKey="hero-services"
          heading={{
            label: 'SERVICES',
            title: 'Design & Development',
            subtitle:
              'Integrated solutions that harmonize design and development. By bridging the gap between visual aesthetics and technical prowess, we create holistic digital experiences that captivate audiences and drive results.',
          }}
        />

        <div className="">
          {serviceCards.map((card, index) => (
            <Section key={index}>
              <div className="mb-10">{card.heading}</div>
              <CardServices
                title={card.title}
                text={card.text}
                button={card.button}
                image={card.image}
              />
            </Section>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Services;
