import type { FC } from 'react';
import type { Links, UserCard } from '../../types';
import { Box } from '../../ui-library';
import { GetIcon } from '../../utils/GetIcon';
import PremiumProfileCardLinkItem from './UserProfileCardListItem';

type IProps = {
  linkList: Links[];
  userDeteil: UserCard;
  userLinkCount: number;
};

const UserProfileCardList: FC<IProps> = ({
  linkList,
  userDeteil,
  userLinkCount,
}) => {
  return (
    <>
      {linkList
        ? linkList.map(({ title, link }, index) => {
            if (index <= userLinkCount) {
              if (title === '' && link === '') return null;
              const url = new URL(link);
              const domain = url.hostname.replaceAll('www.', '');
              const icon = GetIcon(domain);
              return (
                <Box
                  key={link}
                  css={{
                    margin: '5%',
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
            }
          })
        : null}
    </>
  );
};

export default UserProfileCardList;
