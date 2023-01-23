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
      <Box stack="VStack" css={{ textAlign: "left" }}>
        <Text>Title</Text>
        <Input onChange={titleOnChange} value={title} name={titleName} />
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
        />
      </Box>
    </Box>
  );
};

export default LinkInput;
