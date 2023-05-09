import React from "react";

const RecipeCard = ({ recipe, handleAddToFavorite }) => {
  const {
    chef_id,
    cooking_method,
    image,
    ingredients,
    name,
    rating,
    recipe_id,
  } = recipe;

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl flex flex-col">
      <img className="h-48 w-full object-cover" src={image} alt={name} />
      <div className="p-6 flex-grow">
        <div className="flex items-baseline">
          <span className="inline-block bg-green-200 text-green-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
            Chef ID: {chef_id}
          </span>
          <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
            Rating: {rating}
          </div>
        </div>
        <h2 className="mt-2 font-bold text-2xl">{name}</h2>
        <p className="mt-2 text-gray-600">{cooking_method}</p>
        <h3 className="mt-4 font-semibold">Ingredients:</h3>
        <ul className="list-disc list-inside mt-2">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-600">
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={() => handleAddToFavorite(recipe_id)}>
        Add to Favorites
      </button>
    </div>
  );
};

export default RecipeCard;
