import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";

export default function LocationsList() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    function getRequest() {
      axios
        .get("https://rickandmortyapi.com/api/location/")
        .then((response) => {
          setLocations(response.data.results);
        })
        .catch((error) => {
          console.log(`Error: ${error}`);
        });
    }

    getRequest();
  }, []);

  return (
    <div>
      {locations.map((index) => (
        <LocationCard location={index} />
      ))}
    </div>
  );
}
