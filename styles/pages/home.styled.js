import tw, { styled, css } from "twin.macro";

const HomeStyles = styled.div`
  ${tw`w-full min-h-full`}
`;

export const Tags = styled.ul`
  ${tw`flex flex-wrap text-th-foreground-primary`}

  li {
    ${tw`px-4`}

    &:first-child {
      ${tw`pl-0`}
    }

    &:last-child {
      ${tw`pr-0`}
    }

    & + li {
      ${tw`relative after:(absolute top-1/2 left-0 content-['/'] translate-x-[-50%] translate-y-[-50%])`}
    }
  }
`;

export const Presentation = styled.div`
  ${tw` my-8`}
  p + p {
    ${tw`mt-5`}
  }
`;
export default HomeStyles;
