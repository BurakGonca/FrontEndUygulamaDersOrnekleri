import React from 'react'
import Recipe from './Recipe'


const RecipeList = ({recipes}) => {
  return (
    <div className='card-list'>
    
    {
      recipes.map(recipe=>
          <Recipe recipe={recipe}  key={recipe.id}/>

      )
    }
    
    </div>
  )
}

export default RecipeList