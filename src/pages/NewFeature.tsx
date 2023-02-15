import Layout from '../components/layout/Layout';
import { Box, Text, Button } from '../ui-library';
import { useNavigate } from 'react-router-dom';

const NewFeature = () => {
  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate('/');
  };
  return (
    <Layout>
      <Box
        stack="VStack"
        css={{
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text as="h1" color="reinbow" size="1">
          New Feature Coming Soon
        </Text>
        <Button
          onClick={() => goToHomePage()}
          size="3"
          css={{ width: '60%', marginTop: '10%' }}
        >
          Got to Home Page
        </Button>
      </Box>
    </Layout>
  );
};

export default NewFeature;
