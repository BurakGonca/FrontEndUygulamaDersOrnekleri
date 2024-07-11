import React, { useState } from "react";
import "../assets/style/forms.scss";

const Forms = ({ recipeEkle, recipes }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    recipeEkle({
      id: (Number(recipes[recipes.length - 1].id) + 1).toString(),
      title: title,
      description: description,
      image: image,
    });

    setTitle("");
    setDescription("");
    setImage("");
  };

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
        value="Add Recipe"
      />
    </form>
  );
};

export default Forms;
