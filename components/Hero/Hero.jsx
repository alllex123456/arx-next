import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { heroBackgroundTransition } from '@/variants/pages';

const Hero = ({ heading, home, animationKey }) => {
  return (
    <>
      {!home && (
        <motion.div
          key={animationKey}
          variants={heroBackgroundTransition}
          initial="initial"
          animate="animate"
          exit="exit"
          className="h-[50vh] w-full dark:bg-transparent bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center"
        >
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,transparent)]"></div>
          <div className="text-center max-w-[--width] relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 px-10">
            <h1 className="text-white ||| md:text-[5rem]">{heading.title}</h1>
            <h6 className="||| md:text-[1.6rem]">{heading.subtitle}</h6>
          </div>
        </motion.div>
      )}

      <motion.div
        key={animationKey}
        variants={heroBackgroundTransition}
        initial="initial"
        animate="animate"
        exit="exit"
        className={`relative ${
          home
            ? 'h-[93vh] flex items-center justify-center ||| lg:h-[100%] lg:mt-[8rem]'
            : 'rounded-[--border-radius] max-w-[--width] mx-auto ||| md:mt-20'
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
            home
              ? 'flex flex-col items-center gap-[10vh]'
              : 'flex justify-center'
          }`}
        >
          {home && (
            <div className="tracking-tight w-[70%] text-center md:w-[100%] md:px-4">
              <h1 className="||| md:text-[5rem]">{heading}</h1>
              <h5 className="text-[--gray-60] ||| lg:text-center sm:text-[2rem]">
                Technology and Refined Design Harmonize to Elevate Your Online
                Presence to Unprecedented Heights of Sophistication and Success
              </h5>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
