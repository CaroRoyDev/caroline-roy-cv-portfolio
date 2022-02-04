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
  ${tw` min-w-[60px] md:min-w-[100px]  sticky`}
`;

const Aside = css`
  ${tw`hidden md:block p-2 min-w-[400px]`}
`;

const Main = css`
  ${VerticalSpace}
  ${ContentColors}
  ${tw` sm:p-10 md:p-8 lg:p-12 mr-0 md:min-w-[500px]   flex-grow overflow-y-scroll`}

  h1 {
    ${tw`lg:text-5xl font-semibold mb-6`}
  }
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
