import {ADD_FAV, REMOVE_FAV} from "./actions-type"

export function addFavorites(character){
    return{type: ADD_FAV, payload: character}
}

export function removeFavorites(id){
    return {type: REMOVE_FAV, payload: id}
}