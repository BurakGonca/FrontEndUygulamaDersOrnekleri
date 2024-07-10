import React, { useState } from 'react';
import '../assets/style/forms.scss';

const Forms = ({ addRecipe }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description && imageURL) {
      addRecipe({ title, description, imageURL });
      setTitle('');
      setDescription('');
      setImageURL('');
    }
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
        placeholder="Image URL"
        value={imageURL}
        onChange={(e) => setImageURL(e.target.value)}
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default Forms;
