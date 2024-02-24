import { motion } from 'framer-motion';
import Label from './Label';

const SectionHeading = ({ size, title, text, noPadding }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: 'tween', duration: 1 }}
      className={`max-w-[--width] mx-auto ${
        noPadding ? '' : 'px-10 mt-[5rem]'
      }`}
    >
      <div
        className={`relative max-w-[--width] pt-[4.8rem] pb-[2.4rem] flex flex-col gap-2 z-10 rounded-[--border-radius] ||| md:pb-4
        }`}
      >
        <Label size={size} title={title} text={text} />
        <h3 className="text-[--gray-60] max-w-[80rem] ||| md:text-[2.5rem]">
          {text}
        </h3>
      </div>
    </motion.div>
  );
};

export default SectionHeading;
