/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './Detail.css'
function Details ({name, image, id}){
   return (
    <>
     <Link to={`/pokedetails/${id}`}>
   <div className="name">
   <h1>{name}</h1>
      <img src={image} alt="" />
   </div>
   </Link>

    </>
   ) 
}

export default Details;