import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.header`
  text-align: center;
  background-color: black;
  color: white;
  padding-top: 20px;
  height: 500px;
`;

const Img = styled.img`
  width: 60vw;
`;

const Span = styled.span`
  background-color: white;
  padding: 10px;
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <Header>
        <h1>Welcome to the ultimate fan site!</h1>
        <Img
          className="main-img"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg"
          alt="Rick and Morty Logo"
        />
        <br />
        <Link to="/characters">
          <Span>Click Here for a List of Characters</Span>
        </Link>
        <br />
        <br />
        <br />
        <Link to="/locations">
          <Span>Click Here for a List of Locations</Span>
        </Link>
        <br />
        <br />
        <br />
        <Link to="/episodes">
          <Span>Click Here for a List of Episodes</Span>
        </Link>
      </Header>
    </section>
  );
}
