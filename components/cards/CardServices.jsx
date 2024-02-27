import Image from 'next/image';

import Button from '../common/Button';

const CardServices = ({ title, text, button, image }) => {
  return (
    <div className="bg-[--blue-20] rounded-[--border-radius] overflow-hidden grid grid-cols-[1fr_2fr] gap-[--flex-gap-small] max-w-[--width] ||| xl:grid-cols-2 lg:grid-cols-1">
      <div className="py-[--padding] pl-[4.8rem] flex flex-col gap-[--flex-gap-large] ||| lg:pl-[--padding] lg:px-[--padding]">
        <h5 className="flex flex-col text-[--blue-90]">
          {title.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </h5>
        <div className="text-[--gray-10]">
          {text.map((item, index) => {
            if (typeof item !== 'string') {
              return (
                <div key={index}>
                  <p className="block font-bold mb-[8px] mt-10">
                    {Object.keys(item)[0]}
                  </p>
                  <ul className="list-disc flex flex-col gap-2 ml-[2.4rem]">
                    {Object.values(item)
                      .flat()
                      .map((value, subindex) => (
                        <li key={subindex}>{value}</li>
                      ))}
                  </ul>
                </div>
              );
            }

            return <p key={index}>{item}</p>;
          })}
        </div>
        <Button type="white" label={button.label} onClick={button.onClick} />
      </div>
      <div className="relative h-full ||| lg:h-[30rem]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default CardServices;
