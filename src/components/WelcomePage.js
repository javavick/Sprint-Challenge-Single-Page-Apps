import React from "react";
import styled from "styled-components";

const Header = styled.header`
  text-align: center;
  background-color: black;
  color: white;
  padding-top: 20px;
`;

const Img = styled.img`
  width: 60vw;
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
      </Header>
    </section>
  );
}
