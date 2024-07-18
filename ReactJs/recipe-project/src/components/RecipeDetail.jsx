import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import DataContext from "../context/DataContext";
import "../assets/style/recipedetail.scss";
import DefaultRecipeImage from "../assets/img/default-recipe.jpg";

const RecipeDetail = () => {
  const { recipes } = useContext(DataContext);
  const params = useParams();
  const parametre = params.recipeId;
  return (
    <main className="main">
      <div className="card">
        <img
          id="image"
          src={
            recipes[parametre - 1].image
              ? recipes[parametre - 1].image
              : DefaultRecipeImage
          }
          alt="resim"
        />
        <div className="card-content">
          <h2>{recipes[parametre - 1].title}</h2>
          <p>{recipes[parametre - 1].description}</p>
          <Link to="/recipe-platform/recipelist">Return All Recipes</Link>
        </div>
      </div>
    </main>
  );
};

export default RecipeDetail;
