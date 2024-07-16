import React, { useContext } from "react";
import Recipe from "./Recipe";
import DataContext from "../context/DataContext";
import SearchBar from "./SearchBar";

const RecipeList = () => {
  const { recipes } = useContext(DataContext);

  return (
    <>
    <SearchBar/>
      <div className="card-list">
        {recipes.map(
          (recipe) =>
            !recipe.isDeleted && <Recipe recipe={recipe} key={recipe.id} />
        )}
      </div>
    </>
  );
};

export default RecipeList;
