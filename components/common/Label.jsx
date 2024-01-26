const Label = ({ size = 'small', title }) => {
  return (
    <div
      className={`font-[--font-body] flex items-center justify-center rounded-[--border-radius] bg-[--blue-80] w-fit text-white border border-[--gray-100] ${
        size === 'large'
          ? 'py-[6px] px-[2rem] text-[1.4rem] ||| md:text-[10px]'
          : 'py-[4px] px-[1.4rem] text-[1.2rem] font-bold ||| md:text-[8px]'
      }`}
    >
      {title}
    </div>
  );
};

export default Label;
