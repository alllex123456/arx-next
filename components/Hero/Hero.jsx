import { motion } from 'framer-motion';

import CTA from './CTA';
import Label from '../common/Label';
import { heroBackgroundTransition } from '@/variants/pages';

const Hero = ({ heading, home, animationKey }) => {
  return (
    <motion.div
      key={animationKey}
      variants={heroBackgroundTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`relative ${
        home
          ? 'h-screen flex items-center justify-center ||| lg:h-[100%] lg:mt-[8rem]'
          : 'bg-[--blue-40] mt-[10rem] rounded-[--border-radius] max-w-[--width] mx-auto ||| md:mt-10'
      }`}
    >
      {home && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: 'url(/images/hero-background.webp)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: home ? 'center' : 'top',
          }}
        />
      )}
      <div
        className={`max-w-[--width] mx-[--padding] mx-auto z-10  ${
          home ? 'flex flex-col items-center gap-[10vh]' : 'flex justify-center'
        }`}
      >
        {home ? (
          <h1 className="tracking-tight w-[70%] text-center ||| md:text-[5rem]">
            {heading}
          </h1>
        ) : (
          <motion.div
            variants={heroBackgroundTransition}
            initial="initial"
            animate="animate"
            exit="exit"
            className="py-[20rem] w-[70%] z-10 ||| md:py-10 md:w-full px-10"
          >
            <Label size="large" title={heading.label} />
            <h1 className="text-white ||| md:text-[5rem]">{heading.title}</h1>
            <h6 className="||| md:text-[1.6rem]">{heading.subtitle}</h6>
          </motion.div>
        )}
        {home && <CTA />}
      </div>
    </motion.div>
  );
};

export default Hero;
