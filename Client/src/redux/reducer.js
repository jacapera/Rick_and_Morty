import { ADD_FAV, ADD_USER, ERROR, FILTER, GET_FAV, ORDER, REMOVE_FAV } from "./action-types";

const initialState = {
    users: [],
    myFavorites: [],
    allCharacters: [],
    errors: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_USER:
            return {
                ...state,
                users: action.payload.user,
                errors: action.payload.msg
            }
        case ADD_FAV:
            //console.log(action.payload);
            return {
                ...state,
                myFavorites: action.payload,
                allCharacters: action.payload,
                errors: false
                //allCharacters: [...state.allCharacters, action.payload],
                //myFavorites: [...state.allCharacters, action.payload]
            }
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: action.payload,
                allCharacters: action.payload,
                errors: false
                //allCharacters: action.payload
                //myFavorites: state.allCharacters.filter(character => character.id !== Number(action.payload)),
                //allCharacters: state.allCharacters.filter(character => character.id !== Number(action.payload))
            }
        case GET_FAV:
            return {
                ...state,
                myFavorites: action.payload,
                allCharacters: action.payload,
            }
        case ERROR:
            return {
                ...state,
                errors: action.payload
            }
        case FILTER:
            if(action.payload === "all"){
                return {...state, myFavorites:state.allCharacters}
            }
            const allCharactersFiltered = state.allCharacters.filter(character => character.gender === action.payload)
            return {
                ...state,
                myFavorites: allCharactersFiltered
            }
        case ORDER:
            const allCharactersCopy = [...state.allCharacters];
            return {
                ...state,
                myFavorites:
                    action.payload === "A"
                        ? allCharactersCopy.sort((a, b) => a.id - b.id)
                        : allCharactersCopy.sort((a, b) => b.id - a.id),
            }
        // case SHOW_ALL_FAV:
        //     return {
        //         ...state,
        //         myFavorites: action.payload === "all" && state.allCharacters
        //     }
        default:
            return {
                ...state
            }
    }

};

export default reducer;