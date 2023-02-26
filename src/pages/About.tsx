import Footer from '../components/Footer';
import Layout from '../components/layout/Layout';
import Navbar from '../components/Navbar';
import { Box, Link, Text } from '../ui-library';
import logo from '../assets/logos/profilecardrgb.svg';

const About = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <Box stack="VStack">
          <Box
            stack="VStack"
            css={{ position: 'relative', marginTop: '5%', marginBottom: '5%' }}
          >
            <Box
              stack="VStack"
              css={{
                position: 'absolute',
                height: '100%',
                background:
                  'linear-gradient(90deg, rgba(138, 121, 255, 0.8) 0%, rgba(206, 77, 164, 0.8) 100%)',
                filter: 'blur(30px)',
              }}
            ></Box>
            <Box
              stack="VStack"
              css={{
                zIndex: '1',
                backgroundColor: '#1D1A27',
                padding: '5%',
                borderRadius: '10px',
                alignItems: 'center',
              }}
            >
              <Text
                as="h1"
                color="reinbow"
                size={1}
                css={{ width: 'fit-content' }}
              >
                About
              </Text>
              <Box stack="VStack">
                <Box stack="VStack" css={{ alignItems: 'center' }}>
                  <Box
                    css={{
                      width: '50%',
                      textAlign: 'justify',
                      fontSize: '16px',
                      lineHeight: '1.5',
                      '@media screen and (max-width: 768px)': {
                        width: '100%',
                      },
                    }}
                  >
                    <Text
                      as="h2"
                      color="reinbow"
                      size="2"
                      css={{ width: 'fit-content', textAlign: 'start' }}
                    >
                      Introduction and Inspiration
                    </Text>
                    <Text color="light">
                      <Link href="https://mertsabinov.com/" color="light">
                        Mert Sabinov,
                      </Link>{' '}
                      is the founder and developer of ProfileCard.co, and the
                      idea behind the platform is based on the belief that
                      everyone needs a simple business card-like profile for
                      introductions in job interviews or when meeting new
                      people.
                    </Text>
                    <Text
                      as="h2"
                      color="reinbow"
                      size="2"
                      css={{ width: 'fit-content', textAlign: 'start' }}
                    >
                      Vision and Mission
                    </Text>
                    <Text color="light" css={{ marginTop: '1%' }}>
                      The platform's vision is to create a tool that enables
                      everyone to easily create their own personal profiles and
                      share the information they want. The mission is to help
                      people communicate more easily and find jobs in the
                      digital world. ProfileCard.co is designed to help people
                      expand their professional networks, find jobs, or
                      introduce themselves better during the hiring process.
                    </Text>
                    <Text
                      as="h2"
                      color="reinbow"
                      size="2"
                      css={{ width: 'fit-content', textAlign: 'start' }}
                    >
                      Team Expertise
                    </Text>
                    <Text color="light" css={{ marginTop: '1%' }}>
                      The ProfileCard.co team, along with me, constantly work to
                      improve our application and add new features to ensure the
                      satisfaction of our users. Each member of our team is an
                      expert not only in technical skills but also in customer
                      service and user experience.
                    </Text>
                    <Text color="light" css={{ marginTop: '1%' }}>
                      The ProfileCard.co team, including Mert Sabinov, is
                      dedicated to improving the application and adding new
                      features to ensure user satisfaction. Each team member is
                      an expert not only in technical skills but also in
                      customer service and user experience.
                    </Text>
                    <Text
                      as="h2"
                      color="reinbow"
                      size="2"
                      css={{ width: 'fit-content', textAlign: 'start' }}
                    >
                      Principles
                    </Text>
                    <Text color="light" css={{ marginTop: '1%' }}>
                      Honesty, transparency, and reliability are the guiding
                      principles of ProfileCard.co. The platform strives to
                      provide an honest service and the highest quality user
                      experience possible. Customer communication is a priority,
                      and feedback and suggestions are always welcome.
                    </Text>
                    <Text
                      as="h2"
                      color="reinbow"
                      size="2"
                      css={{ width: 'fit-content', textAlign: 'start' }}
                    >
                      Successes
                    </Text>
                    <Text color="light" css={{ marginTop: '1%' }}>
                      ProfileCard.co's successes include rapid growth, positive
                      feedback from customers, and users from various sectors
                      willing to work with the platform.
                    </Text>
                    <Text
                      as="h2"
                      color="reinbow"
                      size="2"
                      css={{ width: 'fit-content', textAlign: 'start' }}
                    >
                      Future Goals
                    </Text>
                    <Text color="light" css={{ marginTop: '1%' }}>
                      The platform's future goals are to continue improving and
                      adding features for users. User feedback is taken into
                      account to make the application even easier to use.
                    </Text>
                    <Text
                      as="h2"
                      color="reinbow"
                      size="2"
                      css={{ width: 'fit-content', textAlign: 'start' }}
                    >
                      Conclusion
                    </Text>
                    <Text color="light" css={{ marginTop: '1%' }}>
                      Users are encouraged to reach out with any questions or
                      feedback, and the platform's contact information can be
                      found on the website.
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Layout>
      <Footer />
    </>
  );
};

export default About;
