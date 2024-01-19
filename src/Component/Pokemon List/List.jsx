

import Details from "../Pokemon Details/Details";
import './List.css'
import usePokemonList from "../../hooks/usePokemonList";

function List (){
  const { pokemonList, nextUrl, previousUrl, setpokedexUrl} = usePokemonList()


return(
    <>

   <div className="list">
   {pokemonList.map((pokemon, index) => (     
      <Details key={index} name={pokemon.name} image={pokemon.ima} id={pokemon.id}/>
    ))}
   </div>

  <div>
    <button className="prebtn" disabled = {previousUrl === null} onClick={()=> {setpokedexUrl (previousUrl)}}>Previous</button>
    <button className="nextbtn" disabled = {nextUrl === null} onClick={()=>{setpokedexUrl(nextUrl)}}  >Next</button>
  </div>

  
    </>
)
}
export default List;