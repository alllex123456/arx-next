import { motion } from 'framer-motion';
import Label from './Label';

const SectionHeading = ({ size, title, text, noPadding }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: 'tween', duration: 1 }}
      className={`max-w-[--width] mx-auto rounded-[--border-radius] ${
        noPadding ? '' : 'mt-[5rem]'
      }`}
    >
      <div
        className={`relative max-w-[--width] py-[4.8rem] flex flex-col gap-2 z-10 bg-[--blue-90] px-[--padding] ${
          noPadding ? '' : 'mx-[--padding]'
        }`}
      >
        <Label size={size} title={title} text={text} />
        <h3 className="max-w-[80rem] ||| md:text-[2.5rem]">{text}</h3>
      </div>
    </motion.div>
  );
};

export default SectionHeading;
