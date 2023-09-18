import useFetchData from "../CustomHooks/useFetchData";
import SummaryCard from "../Components/SummaryCard";
import Spinner from "../Components/Spinner";
import { useNavigate } from "react-router-dom";
import "../Styles/category.css";


export default function Breakfast() {
    const { data } = useFetchData("https://cook-book-server-one.vercel.app/recipes/list" );
    // console.log("datafetched",data)
    const navigate = useNavigate();
  
    const handleReadMore = (_id) => {
        console.log("_id", _id)
      navigate(`/singlerecipepage/${_id}`);
    };
  
    if (!data) {
      return <Spinner />;
    }
    const appetizerCard = data.filter(
      (item) => item.category.toLowerCase() === "breakfast"
    );
   console.log(appetizerCard)
  
    return (
      <div className="category-group">
        {appetizerCard.map((item) => {
          const { _id, image, title } = item;
          return (
            <SummaryCard
              key={_id}
              title={title}
              image={image}
              onHandleClick={() => handleReadMore(_id)}
            />
          );
        })}
      </div>
    );
  }
