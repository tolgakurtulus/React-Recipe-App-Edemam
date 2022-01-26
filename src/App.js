import React, { useEffect, useState } from "react";
import Recipe from "./component/Recipe/Recipe.jsx";
import "./App.scss";

const App = () => {
  const APP_ID = "dbbd7f6f";
  const APP_KEY = "278118ad594740551b401fff3b389f13";

  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("meat");

  useEffect(() => {
    getRecipe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const getRecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipe(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    console.log("search", search);
    if(search.length > 0) {
      e.preventDefault();
      setQuery(search);
      setSearch("");
    } else {
      // alert("Please Enter Something In Search")
    }
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="c-search-form">
        <input
          className="c-search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="c-search-button" type="submit">
          Search
        </button>
      </form>
      <div className="c-row">
        {recipe.map((recipe, index) => (
          <Recipe
            key={index}
            title={recipe.recipe.label}
            calorie={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
