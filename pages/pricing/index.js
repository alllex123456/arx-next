import Head from 'next/head';
import Section from '@/components/common/Section';
import Light from '@/components/common/Light';
import Hero from '@/components/Hero/Hero';
import SectionHeading from '@/components/common/SectionHeading';

import CardPricing from '@/components/cards/CardPricing';

const cards = [
  {
    title: 'Essential Web Presence',
    price: 300,
    list: [
      'Your design',
      'Responsive layout',
      '1 to 3 pages',
      'Basic SEO optimization',
      'Mobile-friendly design',
    ],
    button: { label: 'Choose', onClick: () => {} },
  },
  {
    title: 'Application',
    price: 1500,
    list: [
      'Custom UI/UX design',
      'Frontend & Backend development',
      'Database setup & management',
      'User authentication & authorization',
      'Comprehensive testing & debugging',
    ],
    button: { label: 'Choose', onClick: () => {} },
  },
  {
    title: 'Design & Development',
    price: 600,
    list: [
      'Custom design',
      'Frontend & Backend development',
      'Responsive layout',
      '1 to 3 pages',
      'Basic SEO optimization',
      'Mobile-friendly design',
    ],
    button: { label: 'Choose', onClick: () => {} },
    highlight: true,
  },
];

const WorkFlow = () => {
  return (
    <main>
      <Head>
        <title>ARX Logicwave | Web Development | Pricing</title>
      </Head>

      <Light />

      <div className="relative z-10">
        <Hero
          heading={{
            label: 'PRICING',
            title: 'Website & App costs',
            subtitle:
              'We try to accommodate all cases in a simple three-level pricing scheme. You can choose one that fits your case or contact us for a custom offer.',
          }}
        />

        <div className="mt-[10rem] ||| md:mt-0">
          <SectionHeading
            title="Pricing"
            text="Tailored solutions for every digital journey"
          />
        </div>

        <Section>
          <div className="flex gap-10 justify-center items-start ||| md:flex-col items-center">
            {cards.map((card, index) => (
              <>
                {card.highlight ? (
                  <div className="border-l border-[--gray-20] w-[5px] h-[75rem] ||| md:hidden" />
                ) : null}
                <CardPricing
                  highlight={card.highlight}
                  key={index}
                  title={card.title}
                  price={card.price}
                  list={card.list}
                  button={card.button}
                />
              </>
            ))}
          </div>
          <p className="||| md:text-[1.4rem]">
            PLEASE NOTE: Prices are indicative and shown for transparency
            purposes.
          </p>
          <div className="flex gap-[10rem] mt-20 items-center ||| md:flex-col md:gap-0 md:justify-center">
            <div className="text-center">
              <h4>You can contact us for a tailored offer</h4>
              <p>Just send us your e-mail and will get back to you shortly.</p>
            </div>
            <div className="relative grow">
              <input
                type="email"
                placeholder="john@email.com"
                className="w-[100%] p-10 rounded-[--border-radius] w-[100%] text-[--gray-100] text-4xl"
              />
              <button className="absolute top-[30%] right-4 -translate-y-[20%] flex items-center justify-center rounded-full bg-[--blue-80] text-[--blue-10] text-4xl w-[4rem] h-[4rem] pb-2 transition duration-300 hover:bg-[--blue-60] hover:text-white">
                <span className="mt-2">&rarr;</span>
              </button>
            </div>
          </div>
        </Section>
      </div>
    </main>
  );
};

export default WorkFlow;
