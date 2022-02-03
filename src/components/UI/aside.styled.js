import tw, { styled, css } from "twin.macro";

const AsideStyles = styled.aside`
  ${tw`relative `}

  &::before {
    ${tw`content-[''] w-full h-full absolute top-0 left-0 z-[-1] bg-cover`}
    background-image: url("${(props) => props.imageURL}");
  }
`;

export default AsideStyles;
