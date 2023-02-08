import { Box, Text, Link } from "../ui-library";

const Footer = () => {
  return (
    <Box
      stack="HStack"
      css={{
        padding: "1%",
        justifyContent: "center",
        "@media screen and (max-width: 768px)": {
          flexDirection: "row",
          marginTop: "5%",
        },
      }}>
      <Text color="light">contact :</Text>
      <Link color="light" href="http://www.discord.profilecard.co/">
        Discord
      </Link>
    </Box>
  );
};

export default Footer;
