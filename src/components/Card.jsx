import React from 'react';

// const width1 = {    //! Se ajusta el fieldset a las imagenes, pero las corre a la derecha.
//    width: 200,
//    background: "green",   //! Le pone color al fieldset.
//    style: "text-align: center;"
// };


export default function Card({name, species, gender, image, origin, location, type, onClose}) {
   return (
      
         <div id="card" class= "card">
            <div class="content">
               <span>
            {/* <fieldset style={width1}>  */}
            <button class="btn" onClick={onClose}>X</button>
            <h1><strong>{name}</strong></h1>
            <img  src={image} alt={name}/>
            <h2>Species: {species}</h2>
            {/* <h3>Type:{type}</h3> */}
            <h4>Gender: {gender}</h4>
            <h5>Origin: {origin}</h5>
            <h6>Location: {location}</h6>
            {/* </fieldset>  */}
            <br></br>
            </span>
         </div>
         </div>
      
   );
}
//module.exports = Card;
//export default Card;