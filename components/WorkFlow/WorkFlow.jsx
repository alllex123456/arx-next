import Image from 'next/image';

import SectionHeading from '../common/SectionHeading';
import Light from '../common/Light';
import Section from '../common/Section';
import CustomLink from '../common/CustomLink';

const WorkFlow = () => {
  const resources = [
    {
      title: 'discover and plan',
      text: 'We will comprehensively discuss your expectations, goals and vision. This is just crucial.',
    },
    {
      title: 'propose and prototype',
      text: 'Establish milestones and deliver styles and prototypes, which will further get us one step closer to your goal.',
    },
    {
      title: 'develop and deploy',
      text: 'With a solidified design, the next step is to turn it into a functional and performing web application.',
    },
  ];

  return (
    <div className="relative">
      <Light />
      <SectionHeading
        size="large"
        title="WORK FLOW"
        text="From concept to code: navigating a seamless journey of innovation and precision"
      />
      <Section>
        <div className="relative grid grid-cols-2 bg-[--blue-80] overflow-hidden rounded-[--border-radius] z-10 shadow-lg shadow-[--blue-90] ||| lg:grid-cols-1">
          <Image
            src="/images/programmer-1.webp"
            alt="man working on multiple computers"
            width={500}
            height={500}
            className="w-full h-full object-cover filter brightness-75"
          />
          <div className="flex flex-col justify-between gap-[--flex-gap-large] border-l-4 border-[--blue-20] p-[--card-padding] ||| lg:border-0 md:gap-10 md:p-10">
            <h5 className="mb-10">
              From initial discussion through strategic planning, prototyping
              and development, we are here to handle it all.
            </h5>
            <div className="flex flex-col justify-center">
              {resources.map((resource, index) => (
                <div
                  key={index}
                  className="flex gap-[--flex-gap-small] mb-[6.4rem] ||| md:gap-4  md:flex-col"
                >
                  <span
                    className="text-[13rem] -mt-10 leading-none"
                    style={{ opacity: index === 0 ? '0.1' : index * 0.3 }}
                  >
                    0{index + 1}
                  </span>
                  <div className="flex flex-col gap-4">
                    <span className="uppercase font-bold text-[--gray-10]">
                      {resource.title}
                    </span>
                    <span>{resource.text}</span>
                  </div>
                </div>
              ))}
            </div>
            <CustomLink
              href="/workflow"
              label="Read more"
              customClasses="ml-auto"
            />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default WorkFlow;
