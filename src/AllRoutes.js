import { Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import AddNewRecipes from "./Pages/AddRecipePage";
import SingleRecipePage from "./Pages/SinglePage";
import SearchPage from "./Pages/SearchPage";


export default function AllRoutes () {
    return(
    <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/addrecipe" element={<AddNewRecipes/>}/>
        <Route path="/singlerecipepage/:id" element={<SingleRecipePage/>} />
        <Route path="/search" element={<SearchPage/>}/>
      </Routes>
    )
}