import React from "react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

import NavLink from "./navlink.model";
import NavbarStyles from "./navbar.styled";

interface Props {
  navList: NavLink[];
}
const Navbar: React.FC<Props> = ({ navList }) => {
  return (
    <NavbarStyles>
      <ul>
        {navList.map((navItem) => {
          <li key={uuidv4()}>
            <Link href={navItem.path}>{navItem.iconName}</Link>
          </li>;
        })}
      </ul>
    </NavbarStyles>
  );
};

export default Navbar;
