import { FC } from 'react';
import type { UserCard, Links } from '../../../types';
import { Avatar, Box, ImageIcon, Link, Text } from '../../../ui-library';
import linkedIn from '../../../assets/logos/linkedIn.png';
import discord from '../../../assets/logos/discord.png';

type IProps = {
  userDeteil: UserCard;
  linkList: Links[];
};

const PremiumProfileCard1: FC<IProps> = ({ userDeteil, linkList }) => {
  const domainControl = (domain: string) => {
    switch (domain) {
      case 'discord.gg':
        return discord;

      case 'www.linkedin.com':
        return linkedIn;
      default:
        return 'https://' + domain + '/favicon.ico';
    }
  };
  return (
    <Box
      stack="VStack"
      css={{
        marginTop: '10%',
        position: 'relative',
        height: '60vh',
        width: '40vh',
        borderRadius: '8px',
        border: 'solid #17ca83  1px',
        backgroundColor: 'White',
        boxShadow:
          'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
        '@media screen and (max-width: 768px)': {
          width: '100%',
          height: '100vh',
          marginTop: '0%',
        },
      }}
    >
      <Box
        css={{
          position: 'absolute',
          height: '15vh',
          width: '15vh',
          backgroundColor: '#abc943',
          borderRadius: '100%',
          bottom: '10%',
          left: '10%',
          filter: 'blur(50px)',
        }}
      ></Box>
      <Box
        css={{
          position: 'absolute',
          height: '15vh',
          width: '15vh',
          backgroundColor: '#17ca83',
          borderRadius: '100%',
          top: '10%',
          right: '10%',
          filter: 'blur(50px)',
        }}
      ></Box>
      <Box
        stack="VStack"
        css={{
          alignItems: 'center',
          zIndex: '1',
          overflow: 'auto',
          '&::-webkit-scrollbar': {
            width: '0.2em',
            backgroundColor: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'linear-gradient(to top, #abc943, #17ca83)',
            borderRadius: '0.2em',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'transparent',
          },
        }}
      >
        <Avatar
          variant="profileCard"
          src={userDeteil?.photoURL}
          alt={userDeteil?.username}
        />
        <Box
          css={{
            width: 'fit-content',
            margin: '5%',
            padding: '5%',
            borderRadius: '20px',
            backdropFilter: 'blur(35px)',
          }}
        >
          <Text>{userDeteil?.name}</Text>
        </Box>
        <Box
          css={{
            width: 'fit-content',
            margin: '5%',
            padding: '5%',
            borderRadius: '20px',
            backdropFilter: 'blur(35px)',
          }}
        >
          <Text>{userDeteil?.description}</Text>
        </Box>
        <Box
          stack="VStack"
          css={{
            alignItems: 'center',
            width: 'stretch',
            margin: '5%',
            padding: '5%',
            borderRadius: '20px',
            backdropFilter: 'blur(35px)',
          }}
        >
          {linkList
            ? linkList.map(({ title, link }) => {
                if (title === '' && link === '') return null;
                const url = new URL(link);
                const domain = url.hostname;
                const iconUrl = domainControl(domain);
                return (
                  <Box key={link} css={{ marginTop: '5%' }}>
                    <Link
                      linkButton="costomUser"
                      css={{
                        display: 'inline',
                        color: userDeteil?.color,
                      }}
                      href={link}
                    >
                      {domain !== '' ? (
                        <Box
                          stack="HStack"
                          css={{
                            width: 'inherit',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          }}
                        >
                          <ImageIcon
                            src={iconUrl}
                            css={{
                              height: '30px',
                              width: '30px',
                              '@media screen and (max-width: 768px)': {
                                height: '50px',
                                width: '50px',
                              },
                            }}
                            alt={link}
                          />
                          <Text css={{ fontWeight: 'bold' }}>
                            {title === ''
                              ? domain.includes('www.')
                                ? domain.split('.')[1]
                                : domain.split('.')[0]
                              : title}
                          </Text>
                        </Box>
                      ) : (
                        link
                      )}
                    </Link>
                  </Box>
                );
              })
            : null}
        </Box>
      </Box>
    </Box>
  );
};

export default PremiumProfileCard1;
