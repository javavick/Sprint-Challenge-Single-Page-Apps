import React from "react";
import { Route, Link } from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterSingle from "./components/CharacterSingle.js";
import CharacterList from "./components/CharacterList.js";

export default function App() {
  return (
    <main>
      <Link to="/">
        <Header />
      </Link>
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/characters" component={CharacterList} />
      <Route exact path="/characters/:id" component={CharacterSingle} />
    </main>
  );
}
