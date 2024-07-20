
import React, { useContext } from "react";
import "../assets/style/forms.scss";
import DataContext from "../context/DataContext";
import { Link } from "react-router-dom";

const Forms = () => {
  const {
    secilenRecipe,
    title,
    description,
    image,
    setTitle,
    setDescription,
    setImage,
    handleSubmit,
  } = useContext(DataContext);

  return (
    <div className="form-container">
       <h2>{secilenRecipe ? "Edit Recipe" : "Add Recipe"}</h2>
      <form onSubmit={handleSubmit}>
 
        <div className="form-group">
          <input 
            value={title} 
            onChange={e => setTitle(e.target.value)} 
            type="text" 
            id="recipe-title" 
            placeholder='Recipe Title' 
            name="recipe-title" 
          />
        </div>
        <div className="form-group">
          <textarea 
            value={description} 
            onChange={e => setDescription(e.target.value)} 
            id="recipe-description" 
            placeholder='Recipe Description' 
            name="recipe-description" 
            rows="5"
          ></textarea>
        </div>
        <div className="form-group">
          <input 
            value={image} 
            onChange={e => setImage(e.target.value)} 
            type="url" 
            placeholder='Image URL' 
            id="image-url" 
            name="image-url" 
          />
        </div>
        <input 
          disabled={title === "" || description === ""} 
          type="submit" 
          className="form-button" 
          value={secilenRecipe ? "Edit Recipe" : "Add Recipe"}  
        />
        <Link to="/recipe-platform/recipelist">
          <button type="button" className='form-button'>
            All Recipes
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Forms;
