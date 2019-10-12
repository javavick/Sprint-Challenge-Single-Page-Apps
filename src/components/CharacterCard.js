import React from "react";

export default function CharacterCard({ character }) {
  return (
    <div>
      <img src={character.image} />
      <h1>{character.name}</h1>
      <h2>{character.origin.name}</h2>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Status: {character.status}</p>
    </div>
  );
}
