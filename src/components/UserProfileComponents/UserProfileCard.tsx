import { FC, useEffect, useState } from 'react';
import type { UserCard, Links } from '../../types';
import { Avatar, Badge, Box, Button, ImageIcon, Text } from '../../ui-library';
import { keyframes } from '@stitches/react';
import QRCode from 'qrcode';
import { ImDownload, ImShare, ImCopy } from 'react-icons/im';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import PremiumProfileCardLinkList from './UserProfileCardList';
import { UserStatus } from '../../enum';

type IProps = {
  userDeteil: UserCard;
  linkList: Links[];
  userLinkCount: number;
};

const UserProfileCard: FC<IProps> = ({
  userDeteil,
  linkList,
  userLinkCount,
}) => {
  const [qr, setQr] = useState<string>('');
  const [url, setUrl] = useState<string>(
    'https://www.profilecard.co/' + userDeteil?.username
  );
  const [modal, setModal] = useState<boolean>(false);

  useEffect(() => {
    generateQRCode();
  }, []);

  const modalControl = () => {
    if (modal === false) {
      setModal(true);
    } else {
      setModal(false);
    }
  };

  const generateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 800,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#EEEEEEFF',
        },
      },
      (err, url) => {
        if (err) return console.error(err);
        setQr(url);
      }
    );
  };

  const downloadQRCode = () => {
    const link = document.createElement('a');
    link.download = 'qrcode.png';
    link.href = qr;
    link.click();
  };

  // animation
  const sectionOne = keyframes({
    from: { opacity: '0' },
    to: { opacity: '1' },
  });

  return (
    <Box
      stack="VStack"
      css={{
        position: 'relative',
      }}
    >
      <Box
        css={{
          position: 'absolute',
          height: '150px',
          width: '100%',
          top: '0',
          background: userDeteil?.color,
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          animation: `${sectionOne} 0.5s ease-in-out`,
        }}
      ></Box>
      {modal ? (
        <Box
          css={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            zIndex: '2',
          }}
        >
          <Box
            onClick={() => modalControl()}
            css={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              opacity: '0.5',
              backgroundColor: userDeteil?.color,
              zIndex: '3',
            }}
          ></Box>
          <Box
            onClick={() => modalControl()}
            css={{
              position: 'absolute',
              left: '0',
              top: '25%',
              right: '0',
              zIndex: '4',
            }}
          >
            <ImageIcon
              onClick={() => modalControl()}
              height="300px"
              src={qr}
              css={{ cursor: 'pointer' }}
            />
            <Box>
              <CopyToClipboard
                text={'https://www.profilecard.co/' + userDeteil?.username}
                onCopy={() => alert('copied')}
              >
                <ImCopy
                  color={userDeteil?.color}
                  size={50}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '100%',
                    padding: '0.5%',
                    cursor: 'pointer',
                    zIndex: '5',
                  }}
                />
              </CopyToClipboard>
              <ImDownload
                onClick={() => downloadQRCode()}
                color={userDeteil?.color}
                size={50}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '100%',
                  padding: '0.5%',
                  cursor: 'pointer',
                  zIndex: '5',
                }}
              />
            </Box>
          </Box>
        </Box>
      ) : null}
      <Box
        stack="VStack"
        css={{
          zIndex: '1',
          paddingLeft: '5%',
          paddingRight: '5%',
          animation: `${sectionOne} 0.5s ease-in-out`,
        }}
      >
        <Box
          stack="HStack"
          css={{
            marginTop: '125px',
          }}
        >
          <Avatar variant="profileCard" src={userDeteil?.photoURL} />
          <Box stack="VStack" css={{ textAlign: 'start', marginTop: '30px' }}>
            <Box
              stack="HStack"
              css={{
                alignItems: 'center',
                '@media screen and (max-width: 768px)': {
                  flexDirection: 'row',
                },
              }}
            >
              <Text
                as={'h2'}
                color="light"
                size={2}
                css={{
                  marginLeft: '2%',
                  whiteSpace: 'break-spaces',
                  wordBreak: 'break-word',
                }}
              >
                {userDeteil?.name}
              </Text>
              {userDeteil?.status ?? '' != '' ? (
                userDeteil.status != UserStatus.Standard ? (
                  <Badge
                    status={
                      userDeteil?.status === UserStatus.Staff
                        ? 'staff'
                        : 'standard'
                    }
                    css={{
                      marginLeft: '2.5%',
                    }}
                  >
                    {userDeteil?.status.toUpperCase()}
                  </Badge>
                ) : null
              ) : null}
            </Box>
            <Text as={'h2'} color="light" size={5} css={{ marginLeft: '2%' }}>
              @{userDeteil?.username}
            </Text>
          </Box>
          <Box css={{ width: '100%', textAlign: 'end' }}>
            <Button
              onClick={() => modalControl()}
              variant="blue"
              size={4}
              css={{
                width: '20%',
                marginTop: '50px',
                '@media screen and (max-width: 768px)': {
                  width: '100%',
                },
              }}
            >
              Share <ImShare size={15} style={{ cursor: 'pointer' }} />
            </Button>
            <Button
              disabled={userDeteil?.publicEmail === '' ? true : false}
              onClick={() =>
                (window.location.href = `mailto:${userDeteil?.publicEmail}`)
              }
              variant={userDeteil?.publicEmail === '' ? 'disable' : 'blue'}
              size={userDeteil?.publicEmail === '' ? 5 : 4}
              css={{
                width: '20%',
                marginTop: '50px',
                marginLeft: '2.5%',
                '@media screen and (max-width: 768px)': {
                  width: '100%',
                  marginLeft: '0',
                  marginTop: '10px',
                },
              }}
            >
              {userDeteil?.publicEmail === ''
                ? 'Email not available'
                : 'Send Email'}
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        css={{
          marginTop: '2.5%',
          backgroundColor: 'rgb(43, 45, 49)',
          margin: '2% 5% 2% 5%',
          borderRadius: '10px',
          animation: `${sectionOne} 1s ease-in-out`,
        }}
      >
        <Box
          stack="VStack"
          css={{
            marginTop: '2.5%',
            marginBottom: '2.5%',
            alignItems: 'center',
            animation: `${sectionOne} 1s ease-in-out`,
          }}
        >
          <Text
            color="light"
            css={{
              width: '50%',
              '@media screen and (max-width: 768px)': {
                width: '90%',
              },
            }}
          >
            {userDeteil?.description}
          </Text>
        </Box>
      </Box>
      <Box
        css={{
          height: '20px',
          marginTop: '2.5%',
          margin: '2% 5% 2% 5%',
          borderRadius: '8px',
          backgroundColor: userDeteil?.color,
          animation: `${sectionOne} 1s ease-in-out`,
        }}
      ></Box>
      <Box
        css={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          backgroundColor: 'rgb(43, 45, 49)',
          margin: '2% 5% 2% 5%',
          borderRadius: '8px',
          '@media (max-width: 768px)': {
            gridTemplateColumns: '1fr',
          },
          animation: `${sectionOne} 1.2s ease-in-out`,
        }}
      >
        <PremiumProfileCardLinkList
          linkList={linkList}
          userDeteil={userDeteil}
          userLinkCount={userLinkCount}
        />
      </Box>
    </Box>
  );
};

export default UserProfileCard;
