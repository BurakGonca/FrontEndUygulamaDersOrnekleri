import React from "react";
import "../assets/style/recipe.scss";
import DefaultRecipeImage from "../assets/img/default-recipe.jpg";

const Recipe = ({ recipe, recipeSil }) => {
  return (
    <div className="card">
      <div className="img">
        <img
          src={recipe.image ? recipe.image : DefaultRecipeImage}
          alt={recipe.title}
        />
      </div>

      <div className="card-body">
        <h4>{recipe.title}</h4>
        <p>
          {recipe.description.substring(
            0,
            recipe.description.substring(0, 100).lastIndexOf(" ")
          ) + "..."}
        </p>

        <div className="button-container">
          <button onClick={() => recipeSil(recipe.id)} className="delete">
            Sil
          </button>
          <button className="edit">Düzenle</button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
