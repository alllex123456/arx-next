import React from 'react';
import Button from '../common/Button';

const CardPricing = ({ title, price, list, button, highlight }) => {
  return (
    <div
      className={`flex flex-col gap-[--flex-gap-large] p-[3.6rem] w-[30rem] rounded-[--border-radius] ${
        highlight ? 'text-[--gray-20]' : 'text-[--gray-100]'
      }`}
      style={{
        background: highlight
          ? 'var(--blue-80)'
          : 'linear-gradient(180deg, rgba(52, 48, 210, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%), #F1F3F5',
      }}
    >
      <h5
        className={`${
          highlight ? 'text-white' : 'text-[--blue-100]'
        } text-center uppercase`}
      >
        {title}
      </h5>
      <div
        className={`${
          highlight ? 'bg-[--blue-20]' : 'bg-[--blue-60]'
        } text-white p-[8px] rounded-[--border-radius] flex justify-center items-center gap-6`}
      >
        <span className="text-[1.2rem]">starting</span>
        <span className="text-[4rem]">${price}</span>
      </div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <Button
        type="blue"
        label={button.label}
        onClick={button.onClick}
        className="mx-auto"
      />
    </div>
  );
};

export default CardPricing;
