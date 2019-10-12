import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Div = styled.div`
  width: 30%;
  text-align: center;
  background-color: dimgray;
  margin-top: 10px;
  margin-bottom: 10px;
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
      <Link to={`/characters/${character.id}`} key={character.id}>
        <Img src={character.image} alt={character.name} />
        <H1>{character.name}</H1>
        {/* <h2>{character.origin.name}</h2> */}
        <p>Species: {character.species}</p>
        <p>Gender: {character.gender}</p>
        <p>Status: {character.status}</p>
      </Link>
    </Div>
  );
}
