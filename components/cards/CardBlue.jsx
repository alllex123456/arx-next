import Label from '../common/Label';
import CustomLink from '../common/CustomLink';

const CardBlue = ({ title, subtitle, text, button }) => {
  return (
    <div className="flex flex-col justify-between gap-[--flex-gap-small] p-[--card-padding] rounded-[--border-radius]  bg-[--blue-80] w-[68rem] h-[50rem] z-10 2xl:w-full 2xl:h-full">
      <div className="flex flex-col gap-6">
        <Label title={title} />
        <h5>{subtitle}</h5>
      </div>
      <div>
        {text.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>

      <CustomLink href={button.route} label={button.label} />
    </div>
  );
};

export default CardBlue;
