import React,{useEffect,useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import './showMeal.css'
import ItemDetails from '../ItemDetails/ItemDetails'
import ItemList from '../ItemList/ItemList'

const ShowMeal = () => {
    const [categoryItem,setCategoryItem] = useState([])
    const navigate = useNavigate()
    let param = useParams()

    useEffect(()=>{
      handlleAllItem()
     
    },[])

    function handlleAllItem(){
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${param.item}`)
        .then(response =>response.json())
        .then(data =>setCategoryItem(data.meals))
    }
  
    
    // console.log(param.item)
    // console.log(categoryItem);
   
   
  return (
    <div npm buils>
        <ItemList data={categoryItem} name={param.item}/>
        
    </div>
  )
}

export default ShowMeal