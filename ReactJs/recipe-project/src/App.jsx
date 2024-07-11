import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import RecipeList from "./components/RecipeList";
import Forms from "./components/Forms";

function App() {
  


  const recipeEkle = (yeni) => {
    setRecipes((prev) => [...prev, yeni]);
  };
  const recipeSil = (id) => {
    setRecipes((prev) =>
      prev.filter((statedenGelen) => statedenGelen.id !== id)
    );
  };

  const [recipes, setRecipes] = useState([]);

  const recipeGetir = async ()=>{
    const url = "http://localhost:3000/fakeRecipes";
    const response = await fetch(url);
    const recipes = await response.json();
    setRecipes(recipes);
  }

  useEffect(()=>{
    recipeGetir()
  },[])

  return (
    <>
      <Header />
      <Main />
      <Forms recipeEkle={recipeEkle} recipes={recipes} />
      <RecipeList recipeSil={recipeSil} recipes={recipes} />
    </>
  );
}

export default App;
