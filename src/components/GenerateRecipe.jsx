import { useState } from "react";
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function GenerateRecipe({ ingredients, setRecipeGenerated }) {
  const [recipe, setRecipe] = useState(null);

  async function handleRecipe() {
    if (ingredients.length < 4) {
      toast.error("You need at least 4 ingredients to generate a recipe.");
      return;
    }

    const APP_ID = import.meta.env.VITE_APP_ID;
    const API_KEY = import.meta.env.VITE_API_KEY;
    const USER_ID = import.meta.env.VITE_USER_ID;    

    const url = `https://api.edamam.com/search?q=${ingredients.join(",")}&app_id=${APP_ID}&app_key=${API_KEY}&to=1`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Edamam-Account-User": USER_ID,
        },
      });

      if (!response.ok) {
        throw new Error(
          `API Error: ${response.status} - ${response.statusText}`
        );
      }

      const data = await response.json();

      if (data.hits && data.hits.length > 0) {
        setRecipe(data.hits[0].recipe);
        setRecipeGenerated(true);
      } else {
        toast.error("No recipes found. Try using more common ingredients.");
        setRecipe(null);
      }
    } catch (error) {
      toast.error("Oops! We couldn't get your recipe. Give it another shot!");
      setRecipe(null);
    }
  }

  return (
    <>
      <button type="button" className="btn-primary" onClick={handleRecipe}>Generate Recipe</button>

      <div className="generate-recipe-container">
        <ToastContainer />

        {recipe && (
          <div className="recipe-card-container">
            <h2>{recipe.label}</h2>
            <img src={recipe.image} alt={recipe.label} className="recipe-card-image"/>

            <h3>Ingredients:</h3>
            <ul>
              {recipe.ingredientLines.map((ing, index) => (
                <li key={index}>{ing}</li>
              ))}
            </ul>

            <h3>More details:</h3>
            <a href={recipe.url} target="_blank" rel="noopener noreferrer" className="recipe-link">View full recipe</a>
          </div>
        )}
      </div>
    </>
  );
}