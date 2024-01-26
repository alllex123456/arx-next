import React from 'react';
import Label from '../common/Label';
import Button from '../common/Button';

const CTA = () => {
  return (
    <div className="relative rounded-[--border-radius] border border-[--blue-20] flex flex-col gap-10 justify-center items-end p-[5rem] px-[--padding] mx-[--padding] h-[30rem] mt-[4.8rem] shadow-lg shadow-[--blue-80] lg:items-center">
      <Label title="Design & Engineering" />
      <h5 className="text-right w-[65%] ||| xl:w-[50%] lg:text-center sm:text-[2rem]">
        Technology and Refined Design Harmonize to Elevate Your Online Presence
        to Unprecedented Heights of Sophistication and Success
      </h5>
      <div className="absolute -top-[10rem] left-[5rem] bg-[--blue-40] rounded-[--border-radius] p-[--padding] text-[--gray-20] w-[35rem] h-[50rem] flex flex-col gap-[6rem] shadow-lg shadow-[--blue-80] lg:hidden">
        <div className="absolute top-[9.9rem] right-0 bg-white h-[1px] w-[30rem]" />
        <p className="text-left">We:</p>
        <ul className="list-none text-left text-[2rem] flex flex-col gap-10 ml-10">
          <li>Design</li>
          <li>Brand</li>
          <li>Develop</li>
          <li>Engineer</li>
        </ul>
        <Button
          type="white"
          label="Find out how"
          onClick={() => {}}
          className="mt-auto ml-[2.5rem]"
        />
      </div>
    </div>
  );
};

export default CTA;
