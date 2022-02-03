import React from "react";
import Header from "./partials/header";
import Aside from "../../components/UI/aside.component";
import ProfilePanel from "../../components/UI/profile-panel/profile-panel.component";
import PortfolioWrapper from "./cv-portfolio.styled";

const CVPortfolioLayout: React.FC = ({ children }) => {
  const img =
    "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
  return (
    <PortfolioWrapper>
      <Header />
      <Aside imageURL={img}>
        <ProfilePanel />
      </Aside>
      <main>{children}</main>
    </PortfolioWrapper>
  );
};

export default CVPortfolioLayout;
