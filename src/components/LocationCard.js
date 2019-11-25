import React from "react";

export default function LocationCard({ location }) {
  return (
    <div>
      <h1>{location.name}</h1>
      <p>{location.type}</p>
    </div>
  );
}
