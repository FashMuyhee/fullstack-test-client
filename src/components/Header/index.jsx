import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import {
  Spacer,
  NavbarContainer,
  Header as StyledHeader,
  Button,
} from "../Styled";
import "../../App.css";

const Header = () => {
  return (
    <StyledHeader>
      <NavbarContainer>
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
          <Spacer right="5%">
            <Navbar.Brand href="#home">
              <h2>RAKOT</h2>
            </Navbar.Brand>
          </Spacer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="#" active>
                Home
              </Nav.Link>
              <Nav.Link href="#">About Us</Nav.Link>
              <Nav.Link href="#">Services</Nav.Link>
              <Nav.Link href="#">Portfolio</Nav.Link>
              <Nav.Link href="#">News</Nav.Link>
              <Nav.Link href="#">Shop</Nav.Link>
              <Nav.Link href="#">Contact Us</Nav.Link>
            </Nav>
            <Spacer left="10%">
              <Button outlined>Hire Me</Button>
            </Spacer>
          </Navbar.Collapse>
        </Navbar>
      </NavbarContainer>
    </StyledHeader>
  );
};

export default Header;
