import { useSelector } from "react-redux";
import style from "./Favorites.module.css";
import { Link } from "react-router-dom";


const Favorites = () => {
    const {myFavorites} = useSelector(state => state)
    return(
        <div>
            {
                myFavorites.map((character)=>{
                    return(
                        <div>
                            <h1 className={style.name}><strong>{character.name}</strong></h1>
                            <div>
                            <Link to={`/detail/${character.id}`}>
                            <img className={style.img} src={character.image} alt={character.name}/>
                            </Link>
                            </div>
                            <h2 className={style.species}>{character.species}</h2>
                            {/* {character.type && <h3>{Type:{type}</h3> }*/}
                            <h4 className={style.gender}>{character.gender}</h4>
                            <h5 className={style.origin}>Origin: {character.origin.name}</h5>
                            <h6 className={style.location}>Location: {character.location.name}</h6>
                        </div>
                    )
                })
            }
        </div>
    )
}


export default Favorites;

