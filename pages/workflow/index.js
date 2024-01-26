import Head from 'next/head';
import Section from '@/components/common/Section';
import Light from '@/components/common/Light';
import Hero from '@/components/Hero/Hero';
import SectionHeading from '@/components/common/SectionHeading';

import CardWorkFlowItem from '@/components/cards/CardWorkFlowItem';

const content = [
  {
    heading: (
      <SectionHeading
        noPadding
        title="Meet & Greet"
        text="Online or in person"
      />
    ),
    cards: [
      {
        title: 'ONLINE TALK OR IN PERSON',
        text: [
          "It's always best to have a kick-off meeting. This way we can avoid misunderstandings and your goals will get perfectly aligned with our skills.",
          'We will talk about the kind of project you need, be it a blog, a presentation website or company-specific software. Or maybe a combination thereof.',
          'We will also go into branding-related matters, such as colors, tone, typography and so on.',
        ],
      },
      {
        title: 'WE MAKE PROPOSALS',
        text: [
          'We will come back with a branding proposal: color, typography and tone.',
          'How would you like your website to sound? What kind of feeling would you want visitors to experience when they visit your web page?',
          "That's branding.",
        ],
      },
      {
        title: 'START DESIGNING',
        text: [
          'Upon having your acceptance on our branding proposal, we will start making the prototypes. That is, the blueprint of your future online presence.',
          'We will regularly submit for your review such blueprints and adapt and adjust accordingly.',
        ],
      },
      {
        title: 'DEVELOPMENT',
        text: [
          'After establishing a definitive design, we will start coding it into a functional solution.',
          'The development step will finish with deploying the final product. We can and will take care of hosting matters if you wish.',
        ],
      },
    ],
  },
  {
    heading: (
      <SectionHeading
        noPadding
        title="What's next"
        text="Code and design revisions, whenever you need"
      />
    ),
    subtitle:
      'Our commitment extends beyond the initial launch, offering you the choice to engage with us on terms that suit your needs.',
    cards: [
      {
        title: 'Support contract',
        text: [
          'For clients seeking ongoing support and collaboration, we offer tailored contracts that provide peace of mind.',
          'This option allows you to tap into our expertise for code and design revisions, ensuring your digital solution remains optimized and up-to-date.',
        ],
      },
      {
        title: 'No contract',
        text: [
          "Prefer a more hands-off approach? No problem. While we're always here to help, we respect your autonomy. ",
          'If you choose not to enter into a support contract, we provide one-off services with the necessary resources and guidance to maintain and update your project independently.',
        ],
      },
    ],
  },
];

const WorkFlow = () => {
  return (
    <main>
      <Head>
        <title>ARX Logicwave | Web Development | Work Flow</title>
      </Head>

      <Light />

      <div className="relative z-10">
        <Hero
          heading={{
            label: 'WORK FLOW',
            title: 'How do we work',
            subtitle:
              'This is a collaborative process. We will not impress you with big words and we will not waste time and resources.',
          }}
        />

        {content.map((item, mainIndex) => (
          <Section key={mainIndex}>
            {item.heading}
            {mainIndex === 1 && (
              <h4 className="max-w-[60rem]  mx-auto text-center py-[5rem]">
                {item.subtitle}
              </h4>
            )}
            <div
              className={`${
                mainIndex === 0
                  ? 'flex flex-col gap-[5rem] mt-[10rem] ||| md:mt-[2.5rem]'
                  : 'flex items-center bg-[--gray-20] p-[--padding] rounded-[--border-radius] ||| md:flex-col'
              }`}
            >
              {item.cards.map((card, secondaryIndex) => {
                if (mainIndex === 0) {
                  return (
                    <div
                      key={secondaryIndex}
                      className="max-w-[60rem] mx-auto mb-10"
                    >
                      <CardWorkFlowItem
                        number={`0${secondaryIndex + 1}`}
                        title={card.title}
                        text={card.text}
                      />
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={secondaryIndex}
                      className={`text-[--gray-100] p-[5rem] basis-[50%] ${
                        secondaryIndex === 0
                          ? 'border-r border-[--gray-60] md:border-r-0 border-b'
                          : ''
                      }`}
                    >
                      <h6 className="text-black mb-10">{card.title}</h6>
                      {card.text.map((p, index) => (
                        <p key={index}>{p}</p>
                      ))}
                    </div>
                  );
                }
              })}
            </div>
          </Section>
        ))}
      </div>
    </main>
  );
};

export default WorkFlow;
