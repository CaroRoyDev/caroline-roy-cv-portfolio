// styles/GlobalStyles.js
import { Global, css } from "@emotion/react";
import tw, { theme, GlobalStyles as BaseStyles } from "twin.macro";

const customStyles = css`
  body {
    ${tw`antialiased h-screen`}

    &>div {
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
