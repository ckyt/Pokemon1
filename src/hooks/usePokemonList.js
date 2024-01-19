/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import axios from "axios";

function usePokemonList (){
    const [pokemonList, setpokemonList] = useState([]);

const [pokedexUrl, setpokedexUrl] = useState('https://pokeapi.co/api/v2/pokemon')
const [nextUrl, setnextUrl] = useState("")
const [previousUrl, setpreviousUrl] = useState("")


 async function downloadPokemons (){
    const response =  await axios.get(pokedexUrl);
    
   const pokemonResult = response.data.results
   setnextUrl(response.data.next);
setpreviousUrl(response.data.previous)
   const pokemonResultPromise = pokemonResult.map ((pokedata) => axios.get (pokedata.url));
      const pokemonData = await axios.all(pokemonResultPromise )
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

     return (
      {downloadPokemons, pokemonList, nextUrl, previousUrl, pokedexUrl, setpokedexUrl}
     )

}
 

export default usePokemonList;