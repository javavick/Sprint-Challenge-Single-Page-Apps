import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterSingle from "./components/CharacterSingle.js";
import CharacterList from "./components/CharacterList.js";
import SearchForm from "./components/SearchForm.js";
import ErrorPage from "./components/ErrorPage.js";

export default function App() {
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

  return (
    <main>
      <Link to="/">
        <Header />
      </Link>
      <Route exact path="/" component={WelcomePage} />
      <Route
        exact
        path="/characters"
        render={(props) => <SearchForm {...props} characters={characters} />}
      />
      <Route
        exact
        path="/characters"
        render={(props) => <CharacterList characters={characters} />}
      />
      <Route exact path="/characters/:id" component={CharacterSingle} />
      <Route path="/error" component={ErrorPage} />
    </main>
  );
}
