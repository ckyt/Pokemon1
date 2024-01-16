/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-const-assign */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import Details from "../Pokemon Details/Details";
import './List.css'

function List (){
const [pokemonList, setpokemonList] = useState([]);

const [pokedexUrl, setpokedexUrl] = useState('https://pokeapi.co/api/v2/pokemon')
const [nextUrl, setnextUrl] = useState("")
const [previousUrl, setpreviousUrl] = useState("")


 async function downloadPokemons (){
    const response =  await axios.get(pokedexUrl);
    // console.log(response)
   const pokemonResult = response.data.results
   setnextUrl(response.data.next);
setpreviousUrl(response.data.previous)
   const pokemonResultPromise = pokemonResult.map ((pokedata) => axios.get (pokedata.url));
      const pokemonData = await axios.all(pokemonResultPromise)
// console.log(pokemonData);
   const res = pokemonData.map((detail)=> {
  const pokeChar = detail;
  const capitalName = pokeChar.data.name
  const newName = capitalName.charAt(0).toUpperCase() + capitalName.slice(1);
    return {
        name: newName,
        ima: pokeChar.data.sprites.front_default,
        id: pokeChar.data.id
    }
     
})
setpokemonList(res)

  }

  useEffect (()=>{
 downloadPokemons();
  }, [pokedexUrl])

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