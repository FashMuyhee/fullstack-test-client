import styled from "styled-components";

const size = {
  xs: "250px",
  sm: "768px",
  lg: "1200px",
};
const device = {
  xs: `(min-width: ${size.xs})`,
  sm: `(min-width: ${size.sm})`,
  lg: `(min-width: ${size.lg})`,
};

const Spacer = styled.div`
  margin-left: ${(props) => props.left};
  margin-right: ${(props) => props.right};
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and ${device.xs} and (max-width: ${size.sm}) {
    margin-left: 0%;
  }
`;

const NavbarContainer = styled.div`
  width: 73%;
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
  background-color: white;

  @media only screen and ${device.xs} and (max-width: ${size.sm}) {
    width: 90%;
  }
`;

const Header = styled.header`
  background-color: white;
`;

const Button = styled.button`
  max-width: 160px;
  min-width: 130px;
  height: 50px;
  color: ${(props) => (props.outlined ? "#4d62dd" : "white")};
  background-color: ${(props) => (props.outlined ? "#fff" : "#4d62dd")};
  border: 1px solid #4d62dd;
  border-radius: 5px;
  padding: 0.25em 1em;
  &:hover {
    background-color: ${(props) => (props.outlined ? "#4d62dd" : "white")};
    color: ${(props) => (props.outlined ? "#fff" : "#4d62dd")};
  }
`;

export { Spacer, NavbarContainer, Header, Button };
