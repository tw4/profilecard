import { Box, Button } from "../ui-library";
import type { FC } from "react";

type IProps = {
  onClik: () => void;
  content: string;
  size: number;
};

const GradientButton: FC<IProps> = ({ onClik, content, size }) => {
  return (
    <Box
      css={{
        width: "25%",
        marginTop: "5%",
        padding: "0.3%",
        background: "linear-gradient(to right, #CE4DA4, #7353E5)",
        borderRadius: "50px",
        "@media screen and (max-width: 768px)": {
          width: "90%",
        },
      }}>
      <Button
        variant="gradient"
        onClick={() => onClik()}
        size={size}
        css={{
          width: "100%",
        }}>
        {content}
      </Button>
    </Box>
  );
};

export default GradientButton;
