import { useSelector, useDispatch } from "react-redux";
import style from "./Favorites.module.css";
import { Link } from "react-router-dom";
import { orderCards, filterCards } from "../../Redux/actions";


const Favorites = () => {
    const {myFavorites} = useSelector(state => state);
    const dispatch = useDispatch();

    const handlerOrder = (event) => {
        dispatch(orderCards(event.target.value))
    }
    const handlerFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }


    return(
        <div>
            <div>
                <select onChange={handlerOrder} >
                    <option value="order" disabled='disabled'>Order by</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select onChange={handlerFilter} >
                <option value="filter" disabled='disabled'>Filter by</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Unknown">Unknown</option>
                <option value="Genderless">Genderless</option>
                </select>
            </div>
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
                            {/* <h2 className={style.species}>{character.species}</h2>
                            <h4 className={style.gender}>{character.gender}</h4>
                            <h5 className={style.origin}>Origin: {character.origin.name}</h5>
                            <h6 className={style.location}>Location: {character.location.name}</h6> */}
                        </div>
                    )
                })
            }
        </div>
    )
}


export default Favorites;

