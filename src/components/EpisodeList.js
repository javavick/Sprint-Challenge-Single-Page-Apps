import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";

export default function EpisodeList() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    function getRequest() {
      axios
        .get("https://rickandmortyapi.com/api/episode/")
        .then((response) => {
          setEpisodes(response.data.results);
        })
        .catch((error) => {
          console.log(`Error: ${error}`);
        });
    }

    getRequest();
  }, []);

  return (
    <div>
      {episodes.map((index) => (
        <EpisodeCard episode={index} />
      ))}
    </div>
  );
}
