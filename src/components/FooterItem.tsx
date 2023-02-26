import { Link } from '../ui-library';
import type { FC } from 'react';

type IProps = {
  title: string;
  href: string;
};

const FooterItem: FC<IProps> = ({ title, href }) => {
  return (
    <Link
      href={href}
      color="light"
      css={{
        width: 'fit-content',
        marginTop: '2.5%',
        '@media screen and (max-width: 768px)': {
          width: '100%',
          marginBottom: '2.5%',
        },
      }}
    >
      {title}
    </Link>
  );
};

export default FooterItem;
