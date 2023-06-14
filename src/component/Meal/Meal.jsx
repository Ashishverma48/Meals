import React,{ useState,useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./style.css";
var categoryList = React.createContext(null);

export default function Meal() {
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    
      fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then((response) => response.json())
        .then((data) => setCategory(data?.categories));
    
  }, []);
  
  // console.log(product);
  console.log(category);
  return (
    <categoryList.Provider >
    <div>
      
      <h1>All category meal</h1>
      <div className="container">
        {category?.map((item) => (
          <div
            className="item"
            onClick={() => {
              navigate(`/${item?.strCategory}`);
              console.log(item?.strCategory);
            }}
          >
            <img src={item.strCategoryThumb} alt="" />

            <p>{item?.strCategory}</p>
          </div>
        ))}
      </div>
    </div>
    </categoryList.Provider>
  );
}
