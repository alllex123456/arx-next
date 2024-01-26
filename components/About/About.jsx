import Section from '../common/Section';
import SectionHeading from '../common/SectionHeading';
import Light from '../common/Light';

const About = () => {
  const resources = [
    'We embrace the spirit of innovation, empowering businesses to thrive in the dynamic world of technology.',
    'As a startup, we bring agility, fresh perspectives, and a commitment to excellence that resonates in every project we undertake.',
    "Actually it's just me. I am Alex, a creative developer who decided to start his own development company.",
    "So, whenever you see 'us,' 'we,' or 'team,' remember it's just me. We're not a big corporation with endless departments — yet.",
  ];

  return (
    <div className="relative ">
      <Light position="left" />
      <SectionHeading
        size="large"
        title="ABOUT"
        text="Our journey is one of perpetual curiosity and boundless imagination."
      />
      <Section>
        <div className="relative grid grid-cols-[2fr_1fr] rounded-[--border-radius] bg-[--blue-40] overflow-hidden z-10 shadow-lg shadow-[--blue-90] ||| lg:grid-cols-1">
          <div className="text-[--gray-20] text-[2rem] p-[--card-padding] flex flex-col justify-center ||| text-[1.6rem]">
            {resources.map((resource, index) => (
              <p key={index}>{resource}</p>
            ))}
          </div>

          <video autoPlay muted loop className="w-full lg:h-fit md:h-[100%]">
            <source src="/video/building.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Section>
    </div>
  );
};

export default About;
