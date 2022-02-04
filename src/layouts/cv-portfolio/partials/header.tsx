import React from "react";
import Navbar from "./navbar";

import HeaderStyles from "./header.styled";
import { NavList } from "../../../../data";
const Header = () => {
  return (
    <HeaderStyles>
      <Navbar navList={NavList} />
    </HeaderStyles>
  );
};

export default Header;
