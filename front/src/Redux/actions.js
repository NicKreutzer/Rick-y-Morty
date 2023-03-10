import {ADD_FAV, REMOVE_FAV, FILTER, ORDER, GET_FAVS} from "./actions-type"

export function addFavorites(character){
    return async function (dispatch) {
        try {
          // await fetch("http://localhost:3001/fav", {
          //   method: "POST",
          //   body: JSON.stringify(personaje),
          //   headers: {
          //     "Content-type": "application/json; charset=UTF-8",
          //   },
          // })
          //   .then((response) => response.json())
          //   .then((data) =>
          //     dispatch({
          //       type: ADD_FAV,
          //       payload: data,
          //     })
          //   );
    
        const data = await fetch("http://localhost:3001/fav", {
            method: "POST",
            body: JSON.stringify(character),
            headers: {"Content-type": "application/json; charset=UTF-8",},
        }).then((response) => response.json());
    
            if (data) dispatch({ type: ADD_FAV, payload: data });
        } catch (error) {
            console.log(error)}
    }
};
export function getFavs() {
    return async function (dispatch) {
        try {
            const data = await fetch(`http://localhost:3001/fav/`).then((response) =>
            response.json());
            if (data) dispatch({ type: GET_FAVS, payload: data });
        } catch (error) {
        console.log(error);}
    }
};
export function removeFavorites(id){return async function (dispatch) {
    try {
      // await fetch(`http://localhost:3001/fav/${id}`, {
      //   method: "DELETE",
      // })
      //   .then((response) => response.json())
      //   .then((data) => {
      //     if (data.success) dispatch({ type: REMOVE_FAV, payload: id });
      //   });

        const data = await fetch(`http://localhost:3001/fav/${id}`, {
        method: "DELETE",}).then((response) => response.json());
        if (data.success) dispatch({ type: REMOVE_FAV, payload: id });
    } catch (error) {
        console.log(error)}
    }
};
export function filterCards(gender){
    return {type: FILTER, payload: gender}
};
export function orderCards(id){
    return {type: ORDER, payload: id}
};
