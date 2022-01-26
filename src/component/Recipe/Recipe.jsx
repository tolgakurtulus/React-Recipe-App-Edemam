import React from "react";
import "./Recipe.scss";

const Recipe = ({ title, calorie, image, ingredients }) => {
  return (
    <div className="c-card">
      <h2 className="c-card__headtitle">{title}</h2>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>Calorie : {calorie}</p>
      <img className="c-card__image" src={image} alt="" />
    </div>
  );
};

export default Recipe;
