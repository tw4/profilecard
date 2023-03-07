import type { FC } from 'react';
import type { Links, UserCard } from '../../../../types';
import { Box } from '../../../../ui-library';
import { GetIcon } from '../../../../utils/GetIcon';
import PremiumProfileCardLinkItem from './PremiumProfileCardLinkItem';

type IProps = {
  linkList: Links[];
  userDeteil: UserCard;
};

const PremiumProfileCardLinkList: FC<IProps> = ({ linkList, userDeteil }) => {
  return (
    <>
      {linkList
        ? linkList.map(({ title, link }) => {
            if (title === '' && link === '') return null;
            const url = new URL(link);
            const domain = url.hostname.replaceAll('www.', '');
            const icon = GetIcon(domain);
            return (
              <Box
                key={link}
                css={{
                  margin: '5%',
                  '@media screen and (max-width: 400px)': {
                    width: '75%',
                  },
                }}
              >
                <PremiumProfileCardLinkItem
                  link={link}
                  Icon={icon}
                  userColor={userDeteil?.color}
                  title={
                    title === ''
                      ? domain.includes('www.')
                        ? domain.split('.')[1]
                        : domain.split('.')[0]
                      : title
                  }
                />
              </Box>
            );
          })
        : null}
    </>
  );
};

export default PremiumProfileCardLinkList;
