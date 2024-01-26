import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ARXLogo from '@/assets/svg/ARXLogo';
import Navigation from '../common/Navigation';
import Link from 'next/link';
import MobileNavigation from '../common/MobileNavigation';

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <header className="relative z-20 px-[--padding] ||| md:px-0">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'tween', duration: 1 }}
        className="bg-[--blue-80] rounded-[--border-radius] flex items-center justify-between px-[--padding] py-[1rem] max-w-[--width] mx-auto shadow-xl shadow-[--blue-100]"
      >
        <Link href="/">
          <ARXLogo className="w-[10rem] fill-[--blue-20]" />
        </Link>
        {!openNav && (
          <button
            className="flex flex-col gap-4 hidden md:flex"
            onClick={() => setOpenNav(true)}
          >
            <div className="bg-[--gray-40] w-[4rem] h-[2px]"></div>
            <div className="bg-[--gray-40] w-[4rem] h-[2px]"></div>
          </button>
        )}
        <div className="flex items-center gap-[6rem] md:hidden">
          <Navigation />
        </div>
        <AnimatePresence>
          {openNav && (
            <MobileNavigation key="mobile-navigation" setOpenNav={setOpenNav} />
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
};

export default Header;
