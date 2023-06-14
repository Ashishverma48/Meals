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
    <div >
        <ItemList data={categoryItem} name={param.item}/>
        {/* <h3 onClick={()=>navigate('/')}>Back </h3>
        <div className='imgContainer'>
            <div className='mainImg'>
                <img src="https://www.themealdb.com/images/media/meals/va668f1683209318.jpg" alt="" />
            </div>
           <div className='mealItemList'>
           {
                categoryItem?.map((item=>(
                        <div className='mealItem' onClick={()=>navigate(`/${param.item}/${item?.idMeal}`)}>
                            <img src={item?.strMealThumb} alt={item.strMeal} />
                            <h4>{item.strMeal}</h4>
                            
                        </div>


                )))
            }
           </div>
        </div> */}
    </div>
  )
}

export default ShowMeal