import React from "react";

export default function EpisodeCard({ episode }) {
  return (
    <div>
      <h1>{episode.name}</h1>
      <p>{episode.air_date}</p>
      <p>{episode.episode}</p>
    </div>
  );
}
