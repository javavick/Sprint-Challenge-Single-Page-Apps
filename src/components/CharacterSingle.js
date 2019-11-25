import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard.js";

export default function CharacterSingle(props) {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const id = props.match.params.id;

    function getRequest() {
      axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => {
          setCharacter(response.data);
        })
        .catch((error) => {
          console.log(`Error: ${error}`);
        });
    }

    getRequest();
  }, [props.match.params.id]);

  if (!character) {
    return <div>Loading character information...</div>;
  }

  return <CharacterCard character={character} />;
}
