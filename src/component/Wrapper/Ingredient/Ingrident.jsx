import { useState,useEffect, } from "react"
import { useParams } from "react-router-dom"
import DetailsPage from "../../DetailsPage/DetailsPage"
import ItemList from "../../ItemList/ItemList"
export default function Ingredient(){
    const [gredient,setGredient] = useState([])
    const param = useParams()
    console.log('name',param.name);
   

    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${param.name}`)
        .then(response=>response.json())
        .then(data=>{
            setGredient(data?.meals)
            console.log(',adaadadasdsad',data.meals)})
    },[])
    console.log("grdient",gredient);
    return (
        <div>
            <ItemList data={gredient} name={param.name} />
        </div>
    )
}