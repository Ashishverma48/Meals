import './header.css'
import { useNavigate } from 'react-router-dom'
export default function Header(){
const navigate = useNavigate()
    
    return (
       <header>
        <nav>
            <h1 onClick={()=>navigate('/')}>Home</h1>
        <h2>The Food Meal </h2>
        </nav>
       </header>
    )
}