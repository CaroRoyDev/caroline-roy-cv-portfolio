// styles/GlobalStyles.js
import { Global, css } from "@emotion/react";
import tw, { theme, GlobalStyles as BaseStyles } from "twin.macro";

const customStyles = css`
  body {
    ${tw`antialiased h-screen p-0 m-0 `}
    font-family: "Roboto", sans-serif;

    & > div {
      ${tw`h-full`}
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    * {
      box-sizing: border-box;
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
