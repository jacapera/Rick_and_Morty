import { ADD_FAV, ERROR, FILTER, ORDER, REMOVE_FAV, SHOW_ALL_FAV } from "./action-types";
import axios from 'axios';

// export const addFav = (character) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav';
//     return (dispatch) => {
//         axios.post(endpoint, character)
//             .then(({data}) => {
//                 return dispatch({
//                     type: ADD_FAV,
//                     payload: data
//                 });
//             });
//     };
// };
export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
        try {
            const {data} = await axios.post(endpoint, character);
            return dispatch({
                type: ADD_FAV,
                payload: data
            })
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error.message
            })
        }
    }
};

export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {
        try {
            const { data } = await axios.delete(endpoint);
            return dispatch({
                type: REMOVE_FAV,
                payload: data
            })
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error.message
            })
        }
    }
};

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
};

export const orderCards = (orden) => {
    return {
        type: ORDER,
        payload: orden
    }
}

// export const showAllFav = (all) => {
//     return {
//         type: SHOW_ALL_FAV,
//         payload: all
//     }
// }