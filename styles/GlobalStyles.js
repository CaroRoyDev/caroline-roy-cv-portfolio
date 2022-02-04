// styles/GlobalStyles.js
import { Global, css } from "@emotion/react";
import tw, { theme, GlobalStyles as BaseStyles } from "twin.macro";

const customStyles = css`
  * {
    box-sizing: border-box;
  }
  body {
    ${tw`antialiased h-screen relative`}
    font-family: "Roboto", sans-serif;

    &:before {
      ${tw`content-[''] absolute top-0 left-0 w-full h-full bg-gradient-to-r from-th-background-dark via-th-primary to-th-primary  z-[-1]`}
    }

    & > div {
      ${tw`h-full`}
    }
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
);

export default GlobalStyles;
