import { motion } from 'framer-motion';

const Light = ({ position = 'right' }) => {
  const placement = position === 'left' ? { left: 0 } : { right: 0 };
  const brighterBackground =
    'radial-gradient(50% 50% at 50% 50%, rgba(31, 117, 204, 0.50) 0%, rgba(12, 19, 28, 0.50) 70%, transparent 100%)';
  const darkerBackground =
    'radial-gradient(50% 50% at 50% 50%, rgba(31, 117, 204, 0.20) 0%, rgba(12, 19, 28, 0.10) 70%, transparent 100%)';

  return (
    <motion.div
      style={{
        position: 'absolute',
        top: '-20%',
        ...placement,
        width: '150rem',
        height: '150rem',
        borderRadius: '50%',
        background: darkerBackground,
      }}
    ></motion.div>
  );
};

export default Light;
