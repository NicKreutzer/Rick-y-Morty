import { click } from '@testing-library/user-event/dist/click';
import React from 'react';

// const width1 = {    //! Se ajusta el fieldset a las imagenes, pero las corre a la derecha.
//    width: 200,
//    background: "green",   //! Le pone color al fieldset.
//    style: "text-align: center;"
// };

// import Card from './Card.module.css'

export default function Card({name, species, gender, image, origin, location, type, onClose}) {
   return (
         <div id="card" class= "card">
            <span>
            <button class="btn" onClick={onClose}><strong>X</strong></button>
            <h1><strong>{name}</strong></h1>
            <img  src={image} alt={name}/>
            <h2>{species}</h2>
            {/* <h3>Type:{type}</h3> */}
            <h4>{gender}</h4>
            <h5>Origin: {origin}</h5>
            <h6>Location: {location}</h6>
            <button class="btn" onClick={click}><strong>→</strong></button>
            <br></br>
            </span>
         </div>
   );
}
//module.exports = Card;
//export default Card;