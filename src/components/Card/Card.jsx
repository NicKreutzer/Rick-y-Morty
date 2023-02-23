// import { click } from '@testing-library/user-event/dist/click';
import React from 'react';
import style from './Card.module.css';

// const width1 = {    //! Se ajusta el fieldset a las imagenes, pero las corre a la derecha.
//    width: 200,
//    background: "green",   //! Le pone color al fieldset.
//    style: "text-align: center;"
// };

// import Card from './Card.module.css'

export default function Card({id, name, species, gender, image, origin, location, type, onClose}) {
   return (
         <div className= {style.container}>
            <button className={style.closeBtn} onClick={()=>onClose(id)}><strong>X</strong></button>
            <h1 className={style.name}><strong>{name}</strong></h1>
            <img className={style.img} src={image} alt={name}/>
            <h2 className={style.species}>{species}</h2>
            {/* <h3>Type:{type}</h3> */}
            <h4 className={style.gender}>{gender}</h4>
            {/* <h5 className={style.origin}>Origin: {origin}</h5>
            <h6 className={style.location}>Location: {location}</h6> */}
            {/* <button className={style.btn} onClick={click}><strong>→</strong></button> */}
            <br></br>
         </div>
   );
}
//module.exports = Card;
