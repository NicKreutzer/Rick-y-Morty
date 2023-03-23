import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./Locations.module.css"

export default function Locations() {
    const [location, setLocation] = useState({});
    const [id, setId] = useState("");
    const { id: paramId } = useParams();

    const handleSearch = async () => {
        const response = await fetch(`http://localhost:3001/location/${id}`);
        const data = await response.json();
        setLocation(data);
    };

    const handleChange = (event) => {
        setId(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === 'NumpadEnter') {
            handleSearch();
        }
    };

    useEffect(() => {
        if (paramId) {
            setId(paramId);
            handleSearch();
        }
    }, [paramId]);

    return (
        <div>
            <h1 className={style.title}>Location Details.</h1>
            <br/>
        <div className={style.container}>
            <input type='search' name= "search" id= "search"
                value={id} 
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder='Enter Location ID'
                className={style.searchBar}></input>
            <button onClick={handleSearch} className={style.btn}>Search</button>
            <br/>
            <br/>
            {location && (
                <div>
                    <h2 className={style.name}>{location.name}</h2>
                    <br/>
                    <h2 className={style.type}>{location.type}</h2>
                    <br/>
                    <h2 className={style.dimension}>{location.dimension}</h2>
                </div>
            )}
        </div>
        </div>
    );
}