import { Link, useParams } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react";

export default function Detail (props){

    const {detailID} = useParams();
    const [character, setCharacter] = useState({});
    
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const API_KEY = "b13ef727c3c3.981b0d40d54e6c8b2134";


    useEffect((character) => {
        fetch(`${URL_BASE}/character/${character}?key=${API_KEY}`)
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
    }, [detailID]);

    return(
        <div>
            <button as={Link} to= "/home">Back</button>
            <h1>Detail</h1>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
            <h3>{character.origin.name}</h3>
            <h3>{character.location.name}</h3>
        </div>
    )
}