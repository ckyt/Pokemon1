/* eslint-disable no-empty */
/* eslint-disable no-unexpected-multiline */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from 'axios'
import { useParams } from "react-router-dom";
import Same from "../Recommend/Same";

function PokeDetails (){
  const [pokemon, setPokemon] = useState([]);
 
  

  const {id} = useParams();
  const downloadPokemons =  async() =>{
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        //  console.log(response);
  const details = {
        name: response.data.name,
        image: response.data.sprites.front_default,
        weight: response.data.weight,
            height: response.data.height,
            // types: response.data.types.map((t) => t.type.name),
            types: response.data.types[0].type.name,
          experiences: response.data.base_experience

  }


setPokemon(details);


      } catch (error)
      {
        console.log("Hii")
      }
    
  };

  useEffect (()=>{
  downloadPokemons ()

  }, 
  [id,]
  )


return (
    <>
    <div>
     <div className="name"> Name : {pokemon.name}</div>
     <div className="img"> <img src={pokemon.image} alt="Pokemon Image"  /> </div>
     <div className="weight"> Weight : {pokemon.weight}</div>
     <div className="height"> Height: {pokemon.height}</div>
     <div className="types"> Types: {pokemon.types}</div>
     <div className="experiences"> Experiences: {pokemon.experiences}</div>
    </div>
   
    <div>
   { <Same type={pokemon.types || 'fire'}/>}
    </div>
  
   
    </>
)
}
export default PokeDetails;