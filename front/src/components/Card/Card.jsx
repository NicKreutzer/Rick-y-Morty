
import React, { useEffect, useState } from 'react';
import style from './Card.module.css';
import { Link } from 'react-router-dom';
import { removeFavorites, addFavorites } from '../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';


export default function Card({id, name, species, gender, image, origin, location, type, onClose}) {
   
   const [isFav, setIsFav] = useState(false);
   const dispatch = useDispatch();
   const myFavorites = useSelector(state => state.myFavorites);
   
   useEffect(() => {
      myFavorites.forEach((fav)=>{
         if (fav.id === id){
            setIsFav(true);
         }
      })
   }, [myFavorites, id]);

   function handleFavorite(){
      if(isFav) {
         setIsFav(false);
         dispatch(removeFavorites(id))
      }else{
         setIsFav(true);
         dispatch(addFavorites({id, name, species, gender, image, origin, location, type, onClose}))
      }
   }
   
   return (
         <div className= {style.container}>
            <div className={style.header}>
            {
               isFav ? (
                  <button className={style.favBtn} onClick={handleFavorite}>❤️</button>
                     ) : (
                     <button className={style.favBtn} onClick={handleFavorite}>🤍</button>
                  )
            }
            <button className={style.closeBtn} onClick={()=>onClose(id)}><strong>X</strong></button>
            </div>
            <h1 className={style.name}><strong>{name}</strong></h1>
            <div>
            <Link to={`/detail/${id}`}>
            <img className={style.img} src={image} alt={name}/>
            </Link>
            </div>
            <h2 className={style.species}>{species}</h2>
            {/* {character.type && <h3>{Type:{type}</h3> }*/}
            {/* <h4 className={style.gender}>{gender}</h4> */}
            {/* <h5 className={style.origin}>Origin: {origin.name}</h5>
            <h6 className={style.location}>Location: {location.name}</h6> */}
            {/* <button className={style.btn} onClick={click}><strong>→</strong></button> */}
         </div>
   );
}