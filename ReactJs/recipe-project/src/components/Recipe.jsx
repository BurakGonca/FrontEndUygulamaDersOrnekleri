import React, { useContext } from "react";
import "../assets/style/recipe.scss";
import DefaultRecipeImage from "../assets/img/default-recipe.jpg";
import DataContext from "../context/DataContext";

const Recipe = ({ recipe  }) => {
  const {recipeSil, recipeDuzenle, search} = useContext(DataContext);
  return (
    (recipe.title.toLowerCase().startsWith(search.toLowerCase())) &&
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
          {recipe.description.substring(0, recipe.description.substring(0, 30).lastIndexOf(" ")) + "..."}
        </p>
        

        <div className="button-container">
          <button onClick={() => recipeSil(recipe.id)} className="delete">
            Delete
          </button>
          <button onClick={() => recipeDuzenle(recipe.id)} className="edit">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
