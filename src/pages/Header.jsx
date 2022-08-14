import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const Navigate = useNavigate();

  return (
    <Navbar>
      <NavbarInner>
        <Brand>ShoeShop</Brand>
        <Nav>
          <NavLink
            onClick={() => {
              Navigate("/");
            }}
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => {
              Navigate("/detail");
            }}
          >
            Detail
          </NavLink>
          <NavLink
            onClick={() => {
              Navigate("/event");
            }}
          >
            Event
          </NavLink>
          <NavLink
            onClick={() => {
              Navigate("/about");
            }}
          >
            About
          </NavLink>
        </Nav>
      </NavbarInner>
    </Navbar>
  );
};

const Navbar = styled.nav`
  height: 100px;
  width: 100%;
  background-color: #ddd;
`;
const NavbarInner = styled.div`
  line-height: 100px;
  display: flex;
  flex-direction: row;
  color: #333;
`;
const Brand = styled.div`
  padding-left: 20px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;

const NavLink = styled.div`
  padding-left: 20px;
  font-size: 16px;
`;

export default Header;
