import React, { useContext } from "react";
import "../assets/style/forms.scss";
import DataContext from "../context/DataContext";

const Forms = () => {
  
  const { secilenRecipe,
          title,
          description,
          image,
          setTitle,
          setDescription,
          setImage,
          handleSubmit
   } = useContext(DataContext);
   
  return (
    <form onSubmit={handleSubmit} className="recipe-form">
      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Recipe Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image Url"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        disabled={title === "" || description === ""}
        type="submit"
        value={secilenRecipe? "Edit": "Add Recipe"}
      />
    </form>
  );
};

export default Forms;
