
import './App.css';
import Meal from './component/Meal/Meal';
import Header from './component/Header/Header';
import {
  BrowserRouter,
  Route,
  Routes,
 
} from "react-router-dom";
import ShowMeal from './component/ShowItem/ShowMeal';
import ItemDetails from './component/ItemDetails/ItemDetails';
import ItemList from './component/ItemList/ItemList';
import Ingredient from './component/Wrapper/Ingredient/Ingrident';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
   <main>
    <Routes>

      <Route path='/' element={<Meal/>}/>
      <Route path='/:item' element={<ShowMeal/>}/>
      <Route path='/:item/:id' element={<ItemDetails/>}/>
      <Route path='/ingredient/:name' element={<Ingredient/>}/>
      <Route path='*' element={
        <div>
          <h1>Page Not Found</h1>
        </div>

      }/>
    </Routes>
   </main>
    </BrowserRouter>
    </div>
  );
}

export default App;
