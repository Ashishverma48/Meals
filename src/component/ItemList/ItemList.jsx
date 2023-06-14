import React,{useEffect,useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
// import './showMeal.css'

const ItemList = (props) => {
   
    const navigate = useNavigate()
    let param = useParams()


    // console.log(param.item)
    // console.log(categoryItem);
   
   
  return (
    <div className='container'>
        <h3 onClick={()=>navigate('/')}>Back </h3>
        <div className='imgContainer'>
            <div className='mainImg'>
                <img src={`https://www.themealdb.com/images/ingredients/${props.name}.png`} alt="" />
            </div>
           <div className='mealItemList'>
           {
                props.data?.map((item=>(
                        <div className='mealItem' onClick={()=>navigate(`/${param.item}/${item?.idMeal}`)}>
                            <img src={item?.strMealThumb} alt={item.strMeal} />
                            <h4>{item.strMeal}</h4>
                            
                        </div>


                )))
            }
           </div>
        </div>
    </div>
  )
}

export default ItemList