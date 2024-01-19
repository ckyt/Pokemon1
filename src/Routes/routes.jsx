import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PokeDetails from '../Component/Complete Details/Cdetails';
import List from '../Component/Pokemon List/List';

function  CustomRoutes (){
   return (
    <>
    <Router>
    <Routes>
        <Route path='/pokedetails/:id' element={<PokeDetails/>}/>
        <Route path='/' element={<List/>}/> 
        
    </Routes>
    </Router>
    
    </>
   )
}

export default CustomRoutes;
