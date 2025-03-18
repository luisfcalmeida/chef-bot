import { toast, ToastContainer, Bounce} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function GenerateRecipe( {ingredients} ) {

    function handleRecipe() {
        if (ingredients.length < 4) {
            toast.error('You need at least 4 ingredients to generate a recipe.', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        } else {
            console.log("Ingredientes: ", ingredients.length)
        }
    }

    return (
        <>
            <button type="button" className="btn-primary" onClick={handleRecipe}>Generate Recipe</button>
            <ToastContainer />
        </>
    )
}