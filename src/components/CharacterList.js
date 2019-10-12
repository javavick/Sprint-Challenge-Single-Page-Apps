import React, { useEffect, useState } from "react";
import axios from "axios";

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

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
