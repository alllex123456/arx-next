import { ArrowRight } from '@phosphor-icons/react';

const Button = ({ type = 'blue', label = 'Label', onClick, className }) => {
  const typeClass =
    type === 'white'
      ? 'bg-white text-[--gray-100] shadow-inherit pt-[6px] pb-[1rem] hover:shadow-xl'
      : type === 'blue'
      ? 'bg-[--blue-20] text-white shadow-inherit hover:shadow-xl pt-[6px] pb-[1rem]'
      : type === 'secondary'
      ? 'bg-transparent !justify-evenly w-[16rem] px-0 pt-0 pb-[4px] border-2 text-[--blue-20] border-[--blue-20] hover:border-[--blue-10] hover:text-[--blue-10]'
      : '';

  return (
    <button
      className={`group flex justify-center items-center font-bold rounded-[--border-radius] px-[3rem] transition duration-300 ${typeClass} ${className}`}
      onClick={onClick}
    >
      {type === 'secondary' ? (
        <span className="flex justify-center items-center gap-6 mt-[1px]">
          {label}
          <ArrowRight
            className="text-[--blue-20] pt-1 transform transition-transform origin-left group-hover:scale-x-150 group-hover:text-[--blue-10]"
            weight="bold"
          />
        </span>
      ) : (
        <span className="mt-[1px]">{label}</span>
      )}
    </button>
  );
};

export default Button;
