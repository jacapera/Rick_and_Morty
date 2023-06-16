import { ADD_FAV, ADD_USER, ERROR, FILTER, GET_FAV, ORDER, REMOVE_FAV, SHOW_ALL_FAV } from "./action-types";
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

export const getFav = () => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
        try {
            const {data} = await axios.get(endpoint);
            return dispatch({
                type: GET_FAV,
                payload: data
            })
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error.response.data.message
            })
        }
    }
};

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
                payload: error.response.data.message
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

export const addUser = (user) => {
    const endpoint = 'http://localhost:3001/rickandmorty/user';
    return async (dispatch) => {
        try {
            const { data } = await axios.post(endpoint, user);
            console.log(data.message)
            return dispatch({
                type: ADD_USER,
                payload: { user:data.user, msg: data.message }
            })
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: await error.response.data.message
            })
        }
    }
};

export const changeErrors = () => {
    return {
        type: ERROR,
        payload: false
    }
}

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