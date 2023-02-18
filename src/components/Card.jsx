import React from 'react';

const width1 = {    //! Se ajusta el fieldset a las imagenes, pero las corre a la derecha.
   width: 200,
   background: "green"   //! Le pone color al fieldset.
   
};

export default function Card({name, species, gender, image, origin, location, type, onClose}) {
   return (
      
         <div>
            <fieldset style={width1}> 
            <button onClick={onClose}>Close</button>
            <h1><strong>{name}</strong></h1>
            <img  src={image} alt={name} />
            <h2>Species: {species}</h2>
            <h3>Type:{type}</h3>
            <h4>Gender: {gender}</h4>
            <h5>Origin: {origin}</h5>
            <h6>Location: {location}</h6>
            </fieldset> 
         </div>
      
   );
}
//module.exports = Card;
//export default Card;