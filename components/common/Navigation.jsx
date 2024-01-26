import Link from 'next/link';

import { navigationLinks } from '@/assets/contents/navigation-links';

const Navigation = () => {
  return (
    <nav>
      <ul className="list-none flex gap-[4rem] justify-evenly">
        {navigationLinks.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className="uppercase hover:text-white transition"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
