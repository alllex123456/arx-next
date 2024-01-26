import React from 'react';

const CardWorkFlowItem = ({ number, title, text }) => {
  return (
    <div className="flex flex-col gap-[--flex-gap-small]">
      <hr />
      <div className="flex gap-[--flex-gap-small] ||| sm:flex-col">
        <span className="text-[13rem] text-[--gray-10] opacity-20 leading-none -mt-6">
          {number}
        </span>
        <div className="flex flex-col">
          <h5 className="uppercase mb-[2.4rem]">{title}</h5>
          <div>
            {text.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardWorkFlowItem;
