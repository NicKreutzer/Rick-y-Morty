import {ADD_FAV, REMOVE_FAV, FILTER, ORDER} from "./actions-type"

const initialState= {
    myFavorites: [],
    allCharacters: [],
}

export default function reducer(state = initialState, {type, payload}){
    switch (type) {
        case ADD_FAV: 
        return {
            ...state,
            myFavorites: [...state.myFavorites, payload],
            allCharacters: [...state.allCharacters, payload]
    }
        case REMOVE_FAV: 
        return{ 
            ...state,
            myFavorites: state.myFavorites.filter(element => element.id !== payload)
    }
        case FILTER:
            const allCharsFiltered = state.allCharacters.filter(char => char.gender === payload);
            return{
                ...state,
                myFavorites: allCharsFiltered
            }
        case ORDER:
            return{
                ...state,
                myFavorites: payload === "Ascendente" 
                ? state.allCharacters.sort((a, b)=> a.id - b.id) 
                : state.allCharacters.sort((a, b)=> b.id - a.id)
            }

        default:
            return {
                ...state
            }
    }
}