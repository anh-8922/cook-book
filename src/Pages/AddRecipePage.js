import { useState } from "react";
import noimage from "../Assets/noimage.png";
import axios from "axios";
import MainLayout from '../MainLayout';
import { useNavigate } from "react-router-dom";
import '../Styles/Page.css';

export default function AddNewRecipes ( ) {

  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState('');
  const [instructions, setInstructions] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState({
    url: noimage,
    file: null,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);


  const handleImageChange = (e) => {
    console.log("the file is", e.currentTarget.files[0]);
    
  if (!e.currentTarget.files[0]) return;
    
  if (e.currentTarget.files[0].size > 100000000) {
          alert("This file is bigger than 1000kB");
          return;
        }
    setImage({
            url: URL.createObjectURL(e.currentTarget.files[0]),
            file: e.currentTarget.files[0],
        });
      };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, newIngredient]);
    setNewIngredient('');
  };


    const handleSubmit = async (e) => {
      e.preventDefault()
      const formData = new FormData();
      formData.append("title", title);
      formData.append("category", category);
      ingredients.forEach((ingredient, index) => {
        formData.append(`ingredients[${index}]`, ingredient);
      });
      formData.append("instructions", instructions);
      if (image.file) {
        formData.append("image", image.file);
        
      }
      

      for (let pair of formData.entries()) {
        console.log(pair[0] + ": " + pair[1]);
      }
    
      try {
        const response = await axios.post('/recipes/add', formData,);
        setFormSubmitted(true);
        console.log("Response:", response);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    

    return(
        <MainLayout>
        
          <div className='AddNewRecipe'>
            {!formSubmitted ? (
              <form className="addForm" onSubmit={handleSubmit}>
                <label>Add your recipe title:</label>
                <input
                  type="text"
                  id="title"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <label>Add your Ingredients:</label>
                <div>
                  <input 
                    type="text"
                    id='ingredient'
                    value={newIngredient}
                    onChange={(e) => setNewIngredient(e.target.value)}
                    placeholder="Enter an ingredient"
                  />
                  <button type="button" onClick={handleAddIngredient}>Add Ingredient</button>
                </div>
                <ul>
                  {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
                <label>Add your Instructions:</label>
                <textarea
                  type="text"
                  id="instructions"
                  placeholder="Instructions"
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                />
                <label>Category: </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Select a category</option>
                  <option value="Breakfast">Breakfast</option>
                  <option value="Lunch">Lunch</option>
                  <option value="dinner">Dinner</option>
            
                </select>
                <div className="uploadImage">
                    <label>Add an image:</label>
                    <div id="uploadInput">
                      <input
                        type="file"
                        accept="image/png, image/jpeg"
                        name="image"
                        onChange={handleImageChange}
                      />
                      <img
                    
                        src={image.url || noimage}
                        alt=""
                      />
                    </div>
                    
                </div>
                <button type="submit">Submit</button>
              </form>
            ) : (
              <div style={{
                            color:'green', 
                            fontSize:'3rem', 
                            display:'flex', 
                            justifyContent:'center', 
                            marginTop:'48%', 
                            alignContent:'center'}}>Recipe submitted successfully!</div>
            )}
          </div>





        </MainLayout>
    )
}