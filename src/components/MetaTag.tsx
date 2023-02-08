import { Helmet } from "react-helmet";
import type { FC } from "react";

type IProps = {
  title: string;
  content: string;
};

const MetaTag: FC<IProps> = ({ title, content }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={content} />
    </Helmet>
  );
};

export default MetaTag;
