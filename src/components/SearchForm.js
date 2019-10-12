import React, { useState } from "react";

export default function SearchForm(props) {
  const [search, setSearch] = useState({});

  function changeHandler(event) {
    setSearch(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    const characterSearch = props.characters.filter(
      (index) => index.name.toLowerCase() === search.toLowerCase()
    );

    console.log(characterSearch);

    if (characterSearch.length != 0) {
      props.history.push(`/characters/${characterSearch[0].id}`);
    } else {
      props.history.push(`/error`);
    }
    event.target.reset();
  }

  return (
    <section className="search-form">
      <form onSubmit={submitHandler}>
        <label>
          Search: <span></span>
          <input
            type="text"
            name="search"
            id="searchInput"
            onChange={changeHandler}
          />
          <button>Submit</button>
        </label>
      </form>
    </section>
  );
}
