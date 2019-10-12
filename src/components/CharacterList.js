import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import CharacterCard from "./CharacterCard.js";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    function getRequest() {
      axios
        .get("https://rickandmortyapi.com/api/character/")
        .then((response) => {
          console.log(response);
          setCharacters(response.data.results);
        })
        .catch((error) => {
          console.log(`Error: ${error}`);
        });
    }

    getRequest();
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  console.log(characters);

  const Section = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: black;
    color: white;
  `;

  return (
    <Section className="character-list">
      {characters.map((index) => (
        <CharacterCard character={index} />
      ))}
    </Section>
  );
}
