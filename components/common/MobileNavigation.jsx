import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { X } from '@phosphor-icons/react';
import Link from 'next/link';

import { navigationLinks } from '@/assets/contents/navigation-links';
import ARXLogo from '@/assets/svg/ARXLogo';

const MobileNavigation = ({ setOpenNav }) => {
  const pathname = usePathname();

  const linkStyles = (href) =>
    `text-[2rem] uppercase hover:text-white transition ${
      pathname === href ? 'bg-[--blue-20] text-[--gray-20] p-4 block' : 'p-4'
    }`;

  return (
    <motion.nav
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}
      transition={{ type: 'tween' }}
      className="fixed top-0 left-0 w-screen h-screen z-20 bg-[--gray-40] text-[--blue-80]"
    >
      <div className="flex justify-between mx-[2rem] mt-[2rem]">
        <ARXLogo className=" w-[12rem] fill-[--blue-40]" />
        <button className="text-[3rem]" onClick={() => setOpenNav(false)}>
          <X />
        </button>
      </div>
      <ul className="list-none flex flex-col justify-center gap-[4rem] mt-[20vh]">
        <li>
          <Link
            href="/"
            className={linkStyles('/')}
            onClick={() => setOpenNav(false)}
          >
            HOME
          </Link>
        </li>
        {navigationLinks.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className={linkStyles(link.href)}
              onClick={() => setOpenNav(false)}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default MobileNavigation;
