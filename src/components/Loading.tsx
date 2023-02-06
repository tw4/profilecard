import { Spinner, Box } from "../ui-library";

const Loading = () => {
  return (
    <Box
      stack="VStack"
      css={{
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Spinner />
    </Box>
  );
};

export default Loading;
