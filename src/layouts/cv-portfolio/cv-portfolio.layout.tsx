import React from "react";
import Header from "./partials/header";
import PortfolioWrapper from "./cv-portfolio.styled";

const CVPortfolioLayout: React.FC = ({ children }) => {
  return (
    <PortfolioWrapper>
      <Header />
      <aside>aside</aside>
      <main>{children}</main>
    </PortfolioWrapper>
  );
};

export default CVPortfolioLayout;
