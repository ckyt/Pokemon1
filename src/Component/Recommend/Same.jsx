/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState} from "react";
import axios from "axios";
function Same ({type}){
   const [newName, setnewName] = useState([]);
   async function recommondedPokemons (){
    const response = await axios.get(`https://pokeapi.co/api/v2/type/${type}`)
    // console.log(response.data.pokemon);

    const poke = response.data.pokemon;
   
    const res = poke.slice(0,10) . map ((detail, index)=> <p key={index}>
     {detail.pokemon.name}
    
     {/* {console.log (detail.pokemon.url)} */}
    </p>)
 
  setnewName(res)
    }


useEffect (()=>{
 recommondedPokemons()
},
[type])



    return (
       <>
      {`More ${type || `fire`} of pokemons`}
       <div>
        {
            newName.map((d, index)=> <h6 key={index}> {d}</h6>  )
        }
       </div>
       
       </>


    )

}

export default Same;