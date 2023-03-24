
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from './Detail.module.css';
import atras from '../../components/atras.png';

export default function Detail (){

    const { detailId } = useParams();
    // console.log("ssssssssssssssssssssssssssss",detailId)
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

    useEffect(() => {
        // fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
        // fetch(`${URL_BASE}/character/${detailId}?key=${API_KEY}`)
        fetch(`http://localhost:3001/detail/${detailId}`)
            .then((response) => response.json())
            .then((char) => {

                console.log(char);
                
            if (char.name) {
                setCharacter(char);
            } else {
                window.alert("No characters with this ID");
            }
        })
        .catch((err) => {
            window.alert("No characters with this ID");
        });
        return setCharacter({});
    }, [detailId]);

    return(
        <div>
            <Link to={"/home"}>
            <button className={style.btn}><img src= {atras} alt= "Home" width={35}/></button>
            </Link>
            <h1 className={style.name}>{character.name}</h1>

            <div className={style.container}>
                <div className={style.imgColumn}>
                    <img src={character.image} alt={character.name} className={style.img}/>
                </div>
                <div className={style.details}>
                    <h2 className={style.species}> {character.species}</h2>
                    <h2 className={style.gender}> {character.gender}</h2>
                    {character.type && (<h2 className={style.type}> {character.type}</h2>)}
                    {character.status && (<h2 className={style.status}> {character.status}</h2>)}
                    {character.origin && (<h2 className={style.origin}> {character.origin}</h2>)}
                    {character.location && (<h2 className={style.location}> {character.location}</h2>)}
                    <div>
                    </div>
                </div>
            </div>
        </div>
    )
}