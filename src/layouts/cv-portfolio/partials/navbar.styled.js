import tw, { styled, css } from "twin.macro";

// ------------------- MUTUAL TO BOTH ACTIVE AND NOT ACTIVE --------------------
const CommonLink = css`
  a {
    ${tw`w-full h-full  flex items-center justify-center py-4`}

    .icon {
      ${tw`transition-all duration-300 ease-in-out`}
    }
  }
`;

// ------------------- NON ACTIVE LINKS --------------------
const LinkItem = css`
  .icon {
    filter: drop-shadow(2px 2px 1px #111);
    stroke: #fff;
    stroke-width: 1px;
  }

  &:hover,
  &:focus {
    filter: drop-shadow(4px 4px 2px #111);
    stroke: transparent;
    ${tw`text-th-primary scale-110`}
  }
`;

// ------------------- ACTIVE LINKS --------------------
const ActiveLink = css`
  /* Background insert on active item */
  ${tw`relative before:( bg-th-primary block  h-full absolute top-0 right-0 z-[-1] )`}
  &:before {
    width: calc(100% + 3px);
    filter: drop-shadow(0px 2px 2px #111);
  }

  /* Icon */
  a {
    ${tw`text-th-background `}
    .icon {
      stroke: transparent;
      }
    }
  }  
`;

// ------------------- NAVBAR --------------------
const NavbarStyles = styled.nav`
  ${tw`w-full h-full`}
  ${tw`text-xl sm:text-2xl md:text-3xl lg:text-4xl`}

  ul {
    ${tw`w-full h-full`}
    ${tw`flex flex-col justify-center items-center `}
    ${tw`text-th-background-ultra-light`}

    li {
      ${tw`w-full `}

      /* Common */
      ${CommonLink}

      /* Non active links */
      &:not(.active) {
        ${LinkItem}
      }

      /* Active links */
      &.active {
        ${ActiveLink}
      }
    }
  }
`;

export default NavbarStyles;
