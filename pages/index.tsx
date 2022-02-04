import type { NextPage } from "next";
import HomeStyles, { Tags, Presentation } from "./../styles/pages/home.styled";

import { HomePageTags, HomePagePresentation } from "./../data";

const Home: NextPage = () => {
  return (
    <HomeStyles>
      <h1>Qui suis-je</h1>
      <Tags>
        {HomePageTags.map((tag) => (
          <li>{tag}</li>
        ))}
      </Tags>
      <Presentation
        dangerouslySetInnerHTML={{ __html: HomePagePresentation }}
      />
    </HomeStyles>
  );
};

export default Home;
