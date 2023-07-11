import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100%;
`;

const FooterText = styled.p`
  margin-right: 10px;
`;

const FooterLink = styled.a`
  color: var(--aquamarine);
  margin-left: 20px;
  padding: 5px;
  text-decoration: none;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>&copy; 2023 My Website</FooterText>
      <FooterLink href="https://github.com/vtrpza">GitHub</FooterLink>
      <FooterLink href="https://www.linkedin.com/in/vitor-pouza-91a275163/">
        LinkedIn
      </FooterLink>
    </FooterContainer>
  );
};

export default Footer;
