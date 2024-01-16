import { StrictMode } from "react"
import Search from "./Component/Pokemon Search/Search"
// import List from "./Component/Pokemon List/List"
import CustomRoutes from "./Routes/routes"
// import PokeDetails from "./Component/Complete Details/Cdetails"
function App (){
  return (
    <>
  
   <StrictMode>
   <Search/>
    
    <CustomRoutes/>

    </StrictMode>
    
    </>
  )
}

export default App
