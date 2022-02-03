import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { v4 as uuidv4 } from "uuid";
import * as Fa from "react-icons/fa";

import NavLink from "./navlink.model";
import NavbarStyles from "./navbar.styled";

const FaIcon: React.FC<{ icon: string }> = ({ icon }) => {
  return Fa[icon]
    ? React.createElement(Fa[icon], {
        className: "icon",
        "aria-hidden": "true",
      })
    : null;
};

interface NavbarProps {
  navList: NavLink[];
}

const Navbar: React.FC<NavbarProps> = ({ navList }) => {
  const router = useRouter();
  return (
    <NavbarStyles>
      <ul>
        {navList.map((navItem) => (
          <li
            key={navItem.name}
            className={`${router.pathname === navItem.path ? "active" : ""}`}
          >
            <Link href={navItem.path} passHref>
              <a aria-label={navItem.name}>
                <FaIcon icon={navItem.iconName} />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </NavbarStyles>
  );
};

export default Navbar;
