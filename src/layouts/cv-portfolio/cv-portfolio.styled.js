import tw, { styled, css } from "twin.macro";

const VerticalSpace = css`
  ${tw`my-0 md:my-10`}
`;

const ContentColors = css`
  ${tw`bg-th-background text-th-foreground`}
`;

const Header = css`
  ${VerticalSpace}
  ${ContentColors}
  ${tw` w-[60px] md:w-[100px]  sticky`}
`;

const Aside = css`
  ${tw`hidden md:block p-2 w-[400px]`}
`;

const Main = css`
  ${VerticalSpace}
  ${ContentColors}
  ${tw`p-3 mr-0 md:min-w-[500px]   flex-grow overflow-y-scroll`}
`;

const PortfolioWrapper = styled.div`
  ${tw`flex items-stretch h-[97%] lg:(mx-auto container) py-0 md:py-4`}

  header {
    ${Header}
  }
  aside {
    ${Aside}
  }

  main {
    ${Main}
  }
`;

export default PortfolioWrapper;
