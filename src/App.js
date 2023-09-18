import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllRoutes from './AllRoutes';


function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("https://cook-book-server-one.vercel.app/recipes/list");
      
      // console.log("data:", data);

      setUsers(data.data);

    };

    fetchData();
  }, []);
  return (
    <BrowserRouter>
      <div className="background-container">
        <AllRoutes/>
      </div>
    </BrowserRouter>
  );
}

export default App;

//<Routes>
 //           
            
            
    //      </Routes> 