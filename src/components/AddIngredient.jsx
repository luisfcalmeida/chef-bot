import { useState, useRef } from 'react';
import GenerateRecipe from './GenerateRecipe';

export default function AddIngredient() {

    const [ ingredients , setIngredients ] = useState([]);
    const inputRef = useRef();

    function handleIngredient(e) {
        e.preventDefault();

        if (inputRef.current.value.trim() != "") {
            setIngredients([...ingredients, inputRef.current.value.trim()]);
        }

        inputRef.current.value = "";
    }

    function clearIngredients() {
        setTimeout(() => {
            setIngredients([])
        }, 300)
    }

    return (
        <>
            <section className="add-ingredient-container">
                <form className="add-ingredient-form">
                    <label htmlFor="ingredient" className="add-ingredient-label">What ingredient?</label>
                    <input type="text" placeholder="Tuna" name="ingredient" id="ingredient" autoComplete="off" className="add-ingredient-input" ref={inputRef}/>
                    <button type="submit" className="btn-primary" onClick={handleIngredient}>Add to List</button>
                </form>
            </section>

            {ingredients.length > 0 && (
                <section className="ingredients-list">
                    <h2 className="list-headline">Ingredient List</h2>
                    <ul className="ingredients-ul">
                        {ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>

                    <div className="btn-container">
                        <GenerateRecipe ingredients={ingredients} />
                        <button type="button" className="btn-secondary" onClick={clearIngredients}>Clear List</button>
                    </div>
                </section>
            )}
        </>
    )
}