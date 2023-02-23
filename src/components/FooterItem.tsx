import { Link } from '../ui-library';
import type { FC } from 'react';

type IProps = {
  title: string;
  href: string;
};

const FooterItem: FC<IProps> = ({ title, href }) => {
  return (
    <Link href={href} color="light" css={{ marginTop: '2.5%' }}>
      {title}
    </Link>
  );
};

export default FooterItem;
