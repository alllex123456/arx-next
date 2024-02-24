import { motion } from 'framer-motion';

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
          ? 'h-[93vh] flex items-center justify-center ||| lg:h-[100%] lg:mt-[8rem]'
          : 'mt-[10rem] rounded-[--border-radius] max-w-[--width] mx-auto ||| md:mt-20'
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
          <div className="tracking-tight w-[70%] text-center md:w-[100%] md:px-4">
            <h1 className="||| md:text-[5rem]">{heading}</h1>
            <h5 className="text-[--gray-60] ||| lg:text-center sm:text-[2rem]">
              Technology and Refined Design Harmonize to Elevate Your Online
              Presence to Unprecedented Heights of Sophistication and Success
            </h5>
          </div>
        ) : (
          <motion.div
            variants={heroBackgroundTransition}
            initial="initial"
            animate="animate"
            exit="exit"
            className="h-[50vh] tracking-tight w-[70%] text-center flex flex-col items-center justify-center ||| md:h-auto"
          >
            <h1 className="text-white ||| md:text-[5rem]">{heading.title}</h1>
            <h6 className="||| md:text-[1.6rem]">{heading.subtitle}</h6>
          </motion.div>
        )}
        {/* {home && <CTA />} */}
      </div>
    </motion.div>
  );
};

export default Hero;
