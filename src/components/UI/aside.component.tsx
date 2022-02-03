import React from "react";
import AsideStyles from "./aside.styled";
type AsideProps = {
  imageURL: string;
  children: React.ReactNode;
};

const Aside: React.FC<AsideProps> = (props) => {
  const { children, imageURL } = props;
  return <AsideStyles {...props}>{children}</AsideStyles>;
};

export default Aside;
