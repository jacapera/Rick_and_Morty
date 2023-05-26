import { ADD_FAV, FILTER, ORDER, REMOVE_FAV, SHOW_ALL_FAV } from "./action-types";


export const addFav = (character) => {
    return {
        type: ADD_FAV,
        payload: character
    }
};

export const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id
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

export const showAllFav = (all) => {
    return {
        type: SHOW_ALL_FAV,
        payload: all
    }
}