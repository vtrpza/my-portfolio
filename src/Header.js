// Header.js
import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--black);
  color: var(--aquamarine);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  border-bottom: 2px solid var(--aquamarine);
  padding: 0 20px;
  height: 60px;
`;

const Title = styled.h1`
  cursor: pointer;
  border: 2px solid var(--aquamarine);
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: var(--magnolia);
  cursor: pointer;
  transition: color 0.3s;
  border: 2px solid var(--aquamarine);
  &:hover {
    color: var(--dim-gray);
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Vitor Pouza</Title>
      <NavLinks>
        {/* <NavLink to="about" smooth={true} duration={500}>
          About
        </NavLink>
        <NavLink to="projects" smooth={true} duration={500}>
          Projects
        </NavLink>
        <NavLink to="contact" smooth={true} duration={500}>
          Contact
        </NavLink> */}
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;
