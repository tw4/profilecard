import { Box } from '../../ui-library';
import Card from '../Card';

const Features = () => {
  return (
    <Box stack="VStack" css={{ marginTop: '10%', position: 'relative' }}>
      <Box
        css={{
          position: 'absolute',
          height: '50vh',
          borderRadius: '100%',
          width: '50vh',
          backgroundColor: '#7353E5',
          left: '30%',
          filter: 'blur(100px)',
          zIndex: '0',
          '@media screen and (max-width: 768px)': {
            width: '0%',
            height: '0%',
          },
        }}
      ></Box>
      <Box
        css={{
          position: 'absolute',
          height: '50vh',
          borderRadius: '100%',
          width: '50vh',
          backgroundColor: '#CE4DA4',
          left: '40%',
          bottom: '5%',
          filter: 'blur(100px)',
          zIndex: '0',
          '@media screen and (max-width: 768px)': {
            width: '0%',
            height: '0%',
          },
        }}
      ></Box>
      <Box
        css={{
          display: 'grid',
          gridTemplateColumns: 'auto auto auto',
          zIndex: '1',
          '@media screen and (max-width: 768px)': {
            display: 'flex',
            flexDirection: 'column',
          },
        }}
      >
        <Card
          title="Personalized Profile Pages"
          content="Users can create their own profile pages, where they can share links to their social media accounts, websites, and other online profiles."
        />
        <Card
          title="Customizable Design"
          content="Users can customize the appearance of their profile pages with different colors"
        />
        <Card
          title="Sharing"
          content="Users can share their profile page with others via a unique URL or QR code"
        />
        <Card
          title="Personal and Professional Information"
          content="Users can showcase their personal and professional information like bio, education, experience, and contact details on the profile."
        />
        <Card
          title="Social Media Integration"
          content="Users can connect their social media accounts like twitter, instagram, LinkedIn, etc to the profile."
        />
        <Card
          title="Mobile-Responsive Design"
          content="Profilecard.co is designed to be mobile-responsive, ensuring that it looks good and works well on a variety of mobile devices."
        />
      </Box>
    </Box>
  );
};

export default Features;
