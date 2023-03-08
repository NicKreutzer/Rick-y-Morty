
import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import style from './Detail.module.css'

export default function Detail (props){

    const {detailId} = useParams();
    const [character, setCharacter] = useState({});
    
    // const URL_BASE = "https://be-a-rym.up.railway.app/api";
    // const API_KEY = "b13ef727c3c3.981b0d40d54e6c8b2134";


    // useEffect((character) => {
    //     fetch(`${URL_BASE}/character/${detailId}?key=${API_KEY}`)
    //         .then((response) => response.json())
    //         .then((char) => {
    //         if (char.name) {
    //             setCharacter(char);
    //         } else {
    //             window.alert("No hay personajes con ese ID");
    //         }
    //     })
    //     .catch((err) => {
    //         window.alert("No hay personajes con ese ID");
    //     });
    //     return setCharacter({});
    // }, [detailId]);

    useEffect((character) => {
        fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
            .then((response) => response.json())
            .then((char) => {
            if (char.name) {
                setCharacter(char);
            } else {
                window.alert("No hay personajes con ese ID");
            }
        })
        .catch((err) => {
            window.alert("No hay personajes con ese ID");
        });
        return setCharacter({});
    }, [detailId]);

    return(
        <div className={style.container}>
            {/* <button as={Link} to= "/">Back</button> */}
            <Link to="/home">
            <button className={style.btn}>Back</button>
            </Link>
            {/* <h1>Detail</h1> */}
            <h1>{character.name}</h1>
            <img src={character.image} alt={character.name} className={style.img}/>
            <h3>{character.species}</h3>
            <h3>{character.gender}</h3>
            {character.type && <h3>Type: {character.type}</h3>}
            {character.origin && <h3>Origin:  {character.origin}</h3>}
            {character.location && <h3>Location:  {character.location}</h3>}
        </div>
    )
}