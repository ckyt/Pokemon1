import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PokeDetails from '../Component/Complete Details/Cdetails';
import List from '../Component/Pokemon List/List';
// import Same from '../Component/Recommend/Same';
function  CustomRoutes (){
   return (
    <>
    <Router>
    <Routes>
        <Route path='/pokedetails/:id' element={<PokeDetails/>}/>
        <Route path='/' element={<List/>}/> 
        {/* <Route path='/hii' element = {<Same/>}/> */}
    </Routes>
    </Router>
    
    </>
   )
}

export default CustomRoutes;