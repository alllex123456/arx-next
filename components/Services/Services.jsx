import Image from 'next/image';

import SectionHeading from '../common/SectionHeading';
import CardBlue from '../cards/CardBlue';
import Light from '../common/Light';
import Section from '../common/Section';

const Services = () => {
  const cardGridClasses =
    'relative grid grid-cols-2 gap-[5px] xl:grid-cols-1 xl:gap-[2rem]';

  const resources = [
    {
      title: 'Figma Prototyping',
      subtitle: 'Designing Tomorrow with Figma',
      text: [
        'At the heart of our design process lies Figma, a powerful platform where creativity and innovation converge.',
        'Fom wireframes to interactive prototypes, our meticulous design journey ensures every detail aligns with your brand identity and turns your vision into a digital masterpiece.',
      ],
      button: {
        label: 'Discover Design',
        route: '/services',
      },
      image: '/svg/figma-logo.svg',
    },
    {
      title: 'React Development',
      subtitle: 'Elevate with React Excellence',
      text: [
        'React drives dynamic, high-performance applications.',
        'By combining innovation with clean coding practices, we ensure your project stands out in the ever-evolving digital landscape.',
        'From sleek user interfaces to robust functionality, choose React development with us for a future-proof and engaging online presence.',
      ],
      button: {
        label: 'Explore Development',
        route: '/services',
      },
      image: '/svg/react-logo.svg',
    },
  ];
  return (
    <div className="relative ">
      <Light position="left" />
      <SectionHeading
        size="large"
        title="SERVICES"
        text="Captivating design, and strategic insights that collectively propel your brand forward"
      />
      <Section>
        {resources.map((resource, index) => {
          if (index % 2 === 0) {
            return (
              <div key={index} className={cardGridClasses}>
                <CardBlue {...resource} />
                <Image
                  src={resource.image}
                  width={500}
                  height={500}
                  alt=""
                  className="absolute absolute top-0 right-0 w-[30rem]"
                />
              </div>
            );
          } else {
            return (
              <div key={index} className={cardGridClasses}>
                <div></div>
                <Image
                  src={resource.image}
                  width={500}
                  height={500}
                  alt=""
                  className="absolute left-0 bottom-0 w-[30rem]"
                />
                <CardBlue {...resource} />
              </div>
            );
          }
        })}
      </Section>
    </div>
  );
};

export default Services;
