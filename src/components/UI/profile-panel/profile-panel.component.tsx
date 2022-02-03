import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ProfilePanelStyles from "./profile-panel.styled";

const ProfilePanel = () => {
  return (
    <ProfilePanelStyles>
      <h1>Caroline Roy</h1>
      <ul>
        {/* Github */}
        <li>
          <a
            href="https://github.com/CaroRoyDev"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <FaGithub />
          </a>
        </li>
        {/* Linkedin */}
        <li>
          <a
            href="https://www.linkedin.com/in/carolineroyensil/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </ProfilePanelStyles>
  );
};

export default ProfilePanel;
