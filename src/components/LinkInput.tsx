import { Box, Text, Input } from "../ui-library";
import type { FC } from "react";

type IProps = {
  titleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  linkOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  titleName: string;
  title: string;
  link: string;
  linkName: string;
};

const LinkInput: FC<IProps> = ({
  linkOnChange,
  titleName,
  linkName,
  titleOnChange,
  link,
  title,
}) => {
  return (
    <Box stack="HStack">
      <Box
        stack="VStack"
        css={{
          textAlign: "left",
          marginRight: "2%",
          "@media screen and (max-width: 768px)": {
            marginRight: "0%",
          },
        }}>
        <Text>Title</Text>
        <Input
          onChange={titleOnChange}
          value={title}
          name={titleName}
          css={{ padding: "5%" }}
        />
        <Text css={{ textAlign: "right", marginTop: "2%" }}>
          {title.length + "/20"}
        </Text>
      </Box>
      <Box stack="VStack" css={{ textAlign: "left" }}>
        <Text>Link</Text>
        <Input
          onChange={linkOnChange}
          value={link}
          type="url"
          name={linkName}
          css={{ padding: "5%" }}
        />
      </Box>
    </Box>
  );
};

export default LinkInput;
