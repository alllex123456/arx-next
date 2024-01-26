import React from 'react';

const InputField = ({ label = 'Label', type = 'text' }) => {
  return (
    <div className="w-[30rem] mx-auto flex flex-col gap-[1rem]">
      <label className="text-[--gray-100] font-bold">{label}</label>
      <input
        type={type}
        className="border-1 border-[--gray-60] rounded-[--border-radius] px-2 py-4 outline-none"
      ></input>
    </div>
  );
};

export default InputField;
