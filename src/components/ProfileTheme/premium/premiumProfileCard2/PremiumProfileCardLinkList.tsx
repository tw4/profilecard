import type { FC } from 'react';
import type { Links, UserCard } from '../../../../types';
import linkedIn from '../../../../assets/logos/linkedIn.png';
import discord from '../../../../assets/logos/discord.png';
import { Box } from '../../../../ui-library';
import PremiumProfileCardLinkItem from './PremiumProfileCardLinkItem';

type IProps = {
  linkList: Links[];
  userDeteil: UserCard;
};

const PremiumProfileCardLinkList: FC<IProps> = ({ linkList, userDeteil }) => {
  const domainControl = (domain: string) => {
    switch (domain) {
      case 'discord.gg':
        return discord;
      case 'www.linkedin.com':
        return linkedIn;
      case 'linkedin.com':
        return linkedIn;
      default:
        return 'https://' + domain + '/favicon.ico';
    }
  };

  return (
    <>
      {linkList
        ? linkList.map(({ title, link }) => {
            if (title === '' && link === '') return null;
            const url = new URL(link);
            const domain = url.hostname;
            const iconUrl = domainControl(domain);
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
                  iconUrl={iconUrl}
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
