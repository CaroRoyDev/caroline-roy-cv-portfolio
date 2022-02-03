import tw, { styled, css } from "twin.macro";

const VerticalSpace = css`
  ${tw`my-0 md:my-10`}
`;

const Header = css`
  ${VerticalSpace}
  ${tw`bg-green-600 w-[60px] md:w-[100px]  sticky`}
`;

const Aside = css`
  ${tw`hidden md:block p-2 w-[400px]`}
`;

const Main = css`
  ${VerticalSpace}
  ${tw`p-3 mr-0 md:min-w-[500px]  bg-th-primary flex-grow overflow-y-scroll`}
`;

const PortfolioWrapper = styled.div`
  ${tw`flex items-stretch h-[97%] lg:mx-auto lg:container py-0 md:py-4`}

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
