import ARXLogo from '@/assets/svg/ARXLogo';
import { Envelope, Phone } from '@phosphor-icons/react';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-[--blue-90]">
      <div className="max-w-[--width] mx-auto px-[--padding] grid grid-cols-2 gap-[--flex-gap-small] justify-between items-start py-[4.8rem] h-[30rem] z-10 ||| md:grid-cols-1 sm:h-[100%] ">
        <Link href="/">
          <ARXLogo className="fill-[--blue-20] w-[20rem] ||| md:w-[10rem]" />
        </Link>
        <div className="self-end justify-self-end flex gap-[10rem] ||| md:text-[1.2rem] md:justify-self-start sm:flex-col sm:gap-[4rem]">
          <div className="">
            <span>S.C. ARX LOGICWAVE S.R.L.</span>
            <address className="mb-10">Bucharest, Romania</address>
            <div className="flex flex-col">
              <span>Reg. No. J23/5461/24.08.2023</span>
              <span>Tax number: 48676512</span>
              <span>VAT number: RO48903917</span>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex gap-4 items-center">
              <Envelope />
              <div className="flex flex-col">
                <Link
                  href="mailto:office@arx-logicwave.ro"
                  className="hover:underline"
                >
                  office@arx-logicwave.ro
                </Link>
                <Link
                  href="mailto:alex@arx-logicwave.ro"
                  className="hover:underline"
                >
                  alex@arx-logicwave.ro
                </Link>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <Phone />
              <Link href="tel:+40749324651">+40-749-324-651</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
