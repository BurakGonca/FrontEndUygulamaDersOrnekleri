import React from 'react'
import Recipe from './Recipe'


const RecipeList = ({recipes, recipeSil}) => {
  return (
    <div className='card-list'>
    
    {
      recipes.map(recipe=>
          <Recipe recipe={recipe} recipeSil={recipeSil}  key={recipe.id}/>

      )
    }
    
    </div>
  )
}

export default RecipeList