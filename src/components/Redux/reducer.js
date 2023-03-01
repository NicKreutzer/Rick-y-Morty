import {ADD_FAV, REMOVE_FAV} from "./actions-type"

const initialState= {
    myFavorites: [],
}

export default function reducer(state = initialState, {type, payload}){
    switch (type) {
        case ADD_FAV: 
        return {
            ...state,
            myFavorites:[...state.myFavorites, payload]
    }
        case REMOVE_FAV: 
        return{ 
            ...state,
            myFavorites: state.myFavorites.filter((element)=>element.id !== payload)
    }

        default:
            return {
                ...state
            }
    }
}