import tw, { styled } from "twin.macro";
import { BaseTransition } from "./../../../../styles/PartialStyles";

const ProfilePanelStyles = styled.div`
  ${tw`flex flex-col justify-end items-center h-full w-full px-5 py-20 text-th-foreground`}

  h1 {
    ${tw`mb-5 font-bold text-5xl `}
  }
  ul {
    ${tw`flex flex-wrap justify-center items-center gap-5 text-2xl `}

    li {
      ${BaseTransition}
      ${tw` hocus:(scale-110 text-th-primary)`}
    }
  }
`;
export default ProfilePanelStyles;
