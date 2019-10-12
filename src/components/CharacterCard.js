import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 30%;
  text-align: center;
  background-color: dimgray;
  margin-bottom: 20px;
  padding-top: 20px;
`;

const Img = styled.img`
  width: 250px;
`;

const H1 = styled.h1`
  font-size: 30px;
`;

export default function CharacterCard({ character }) {
  return (
    <Div>
      <Img src={character.image} alt={character.name} />
      <H1>{character.name}</H1>
      <h2>{character.origin.name}</h2>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Status: {character.status}</p>
    </Div>
  );
}
