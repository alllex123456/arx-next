import { motion } from 'framer-motion';

const Section = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: 'tween', duration: 0.5 }}
      className="max-w-[--width] mx-auto py-[--section-padding] px-10 xl:py-14"
    >
      {children}
    </motion.div>
  );
};

export default Section;
