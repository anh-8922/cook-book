import RecipeItem from "../Components/RecipeItem";
import MainLayout from '../MainLayout';
import { Link, useParams } from "react-router-dom";
import Spinner from "../Components/Spinner";
import useFetchData from "../CustomHooks/useFetchData";
// import '../Styles/page.css';

export default function SingleRecipePage() {
  const { id } = useParams();
  const { data } = useFetchData("https://cook-book-server-one.vercel.app/recipes/list");

  if (!data) {
    return <Spinner />;
  }

  const selectedRecipe = data.find((item) => item._id === id);
  console.log("selected recipe:", selectedRecipe)
  

  if (!selectedRecipe) {
    return <div>Recipe not found</div>;
  }

  const { image, ingredients, instructions, title } = selectedRecipe;

  return (
    <MainLayout>
        <div className="single-page">
          <RecipeItem
            title={title}
            image={image}
            ingredients={ingredients}
            instructions={instructions}
          />
          <Link to="/">
            <button style={{
                          fontSize:'1.5rem', 
                          backgroundColor:'pink', 
                          marginLeft:'5rem', 
                          padding:'0.8rem',
                          borderRadius:'0.5rem'}}>Back to Home</button>
          </Link>
        </div>
    </MainLayout>
  )
}