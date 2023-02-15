import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Box, Button, Text } from '../ui-library';

const NotFound = () => {
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
        <Text
          as="h1"
          color="reinbow"
          css={{
            fontSize: '20rem',
            '@media screen and (max-width: 768px)': {
              fontSize: '5rem',
            },
          }}
        >
          404
        </Text>
        <Text color="reinbow" size="1">
          Page not found
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

export default NotFound;
