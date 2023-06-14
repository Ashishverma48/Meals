import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./itemDetails.css";
import ReactPlayer from 'react-player'
import DetailsPage from "../DetailsPage/DetailsPage";
export default function ItemDetails() {
  const param = useParams();
  const navigate  = useNavigate()
  console.log(param.id);
  const [itemDetails, setItemDetails] = useState([]);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${param.id}`)
      .then((response) => response.json())
      .then((data) => setItemDetails(data.meals));
  }, []);

  console.log(itemDetails);

  return (
    <div className="container">
      <DetailsPage data={itemDetails}/>
      {/* {itemDetails?.map((item) => (

        <div>
             <h1>{item?.strMeal}</h1>
             <button className="backBtn">Back</button>
            <div className="imgItemContainer">
          <div className="mainItemImg">
            <img src={item?.strMealThumb} alt="" />
           
           
           
           
          </div>
          <div className="mealIngredient" >
            <div className="ingriedientName" onClick={navigate()} >
              <img
                src={`https://www.themealdb.com/images/ingredients/${item.strIngredient1}.png`}
              />
              <p>{item.strMeasure1}</p>
            </div>
            <div className="ingriedientName">
              <img
                src={`https://www.themealdb.com/images/ingredients/${item.strIngredient2}.png`}
              />
              <p>{item.strMeasure2}</p>
            </div>
            <div className="ingriedientName">
              <img
                src={`https://www.themealdb.com/images/ingredients/${item.strIngredient3}.png`}
              />
              <p>{item.strMeasure3}</p>
            </div>
            <div className="ingriedientName">
              <img
                src={`https://www.themealdb.com/images/ingredients/${item.strIngredient4}.png`}
              />
              <p>{item.strMeasure4}</p>
            </div>
            <div className="ingriedientName">
              <img
                src={`https://www.themealdb.com/images/ingredients/${item.strIngredient5}.png`}
              />
              <p>{item.strMeasure5}</p>
            </div>
            <div className="ingriedientName">
              <img
                src={`https://www.themealdb.com/images/ingredients/${item.strIngredient6}.png`}
              />
              <p>{item.strMeasure6}</p>
            </div>
          </div>
          
        </div>
        <div className="makingInstruction">
            
            <h2>Instruction </h2>
            <div>
            <p>{item.strInstructions}</p>
            </div>
            <button><a href={item.strSource}>Know More</a></button>
            <div className="ItemVideo">
            <ReactPlayer url={item.strYoutube}/>
            </div>

        </div>
        </div>
        
      ))} */}
    </div>
  );
}
