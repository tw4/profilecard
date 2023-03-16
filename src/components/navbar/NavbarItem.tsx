import { Link } from '../ui-library';
import type { FC } from 'react';

type IProps = {
  href: string;
  content: string;
};

const NavbarItem: FC<IProps> = ({ href, content }) => {
  return (
    <Link href={href} color="light">
      {content}
    </Link>
  );
};

export default NavbarItem;
