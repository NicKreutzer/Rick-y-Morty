import { useSelector, useDispatch } from "react-redux";
import style from "./Favorites.module.css";
import { Link } from "react-router-dom";
import { orderCards, filterCards, removeFavorites } from "../../Redux/actions";


const Favorites = () => {
    const {myFavorites} = useSelector(state => state);
    const dispatch = useDispatch();

    const handlerOrder = (event) => {
        dispatch(orderCards(event.target.value))
    }
    const handlerFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }
    const handlerFavorites = (id) => {
        dispatch(removeFavorites(id));
    };

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
                            <button className={style.removeBtn} onClick={() => handlerFavorites(character.id)}>❤️</button>
                            <h1 className={style.name}><strong>{character.name}</strong></h1>
                            <div>
                            <Link to={`/detail/${character.id}`}>
                            <img className={style.img} src={character.image} alt={character.name}/>
                            </Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}


export default Favorites;

