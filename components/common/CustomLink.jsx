import Link from 'next/link';

const CustomLink = ({ label, href, customClasses }) => {
  return (
    <Link
      className={`text-[--blue-20] flex gap-2 hover:text-[--blue-10] ${customClasses}`}
      href={href}
    >
      <span>{label}</span>
      <span>&rarr;</span>
    </Link>
  );
};

export default CustomLink;
