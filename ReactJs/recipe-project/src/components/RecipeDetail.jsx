import React from 'react'
import { useParams } from 'react-router-dom'



const RecipeDetail = () => {
  const params = useParams();
  const parametre = params.recipeId;
  return (
    <div className='detay'>
        <img src={recipes[parametre-1].image} alt="resim" />
        <h3>{recipes[parametre-1].title}</h3>
        <p>{recipes[parametre-1].description}</p>
        <Link to="/recipe-platform/recipelist">Return All Recipes</Link>
    </div>
  )
}

export default RecipeDetail