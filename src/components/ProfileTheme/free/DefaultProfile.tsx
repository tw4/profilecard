import { Box, Avatar, Text, Link, ImageIcon } from '../../../ui-library';
import { Links, UserCard } from '../../../types';
import type { FC } from 'react';

type IProps = {
  userDeteil: UserCard;
  linkList: Links[];
};

const DefaultProfile: FC<IProps> = ({ linkList, userDeteil }) => {
  return (
    <>
      <Box
        stack="VStack"
        css={{
          position: 'relative',
          height: '60vh',
          width: '40vh',
          marginTop: '10%',
          backgroundColor: 'white',
          alignItems: 'center',
          borderRadius: '25px',
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 30px 90px;',
          textAlign: 'center',
          wordBreak: 'break-word',
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
            top: '10%',
          }}
        >
          <Avatar
            variant="profileCard"
            src={userDeteil?.photoURL}
            css={{ borderColor: userDeteil?.color }}
          />
        </Box>
        <Box
          css={{
            height: '20%',
            width: '100%',
            borderTopLeftRadius: '25px',
            borderTopRightRadius: '25px',
            backgroundColor: userDeteil?.color,
            '@media screen and (max-width: 768px)': {
              borderRadius: '0%',
            },
          }}
        ></Box>
        <Box
          css={{
            height: '20vh',
            width: '100%',
            paddingLeft: '1.5%',
            paddingRight: '1.5%',
            position: 'absolute',
            top: '15%',
          }}
        >
          <Text css={{ marginTop: '30%', fontWeight: 'bold' }}>
            {userDeteil?.name}
          </Text>
          <Text
            size="5"
            css={{
              marginTop: '5%',
            }}
          >
            {userDeteil?.description}
          </Text>
          <Box
            stack="HStack"
            css={{
              height: '20vh',
              alignItems: 'end',
              position: 'absolute',
              justifyContent: 'space-around',
              '@media screen and (max-width: 768px)': {
                flexDirection: 'row',
                height: '30vh',
              },
            }}
          >
            {linkList
              ? linkList.map(({ title, link }) => {
                  if (title === '' && link === '') return null;
                  const url = new URL(link);
                  const domain = url.hostname;
                  const iconUrl =
                    domain === 'discord.gg'
                      ? 'https://cdn-icons-png.flaticon.com/512/3670/3670157.png'
                      : 'https://' + domain + '/favicon.ico';
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
                          <ImageIcon
                            src={iconUrl}
                            css={{ height: '25px', width: '25px' }}
                            alt={link}
                          />
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
    </>
  );
};

export default DefaultProfile;
