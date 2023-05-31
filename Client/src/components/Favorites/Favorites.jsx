import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards, removeFav, showAllFav } from "../../redux/action";
import styleFav from './Favorites.module.css'

function Favorites(props){

    const [aux, setAux] = useState(false);

    const dispatch = useDispatch();
    const allCharacters = useSelector(state => state.allCharacters)
    //console.log(allCharacters)

    const handleOrder = (event) => {
        //setAux(!aux);
        dispatch(orderCards(event.target.value));
        console.log(event.target.value);
    }

    const handleFilter = (event) => {
        //console.log(event.target.value);
        // event.target.value === "all" ? dispatch(showAllFav(event.target.value))
        // : dispatch(filterCards(event.target.value));
        dispatch(filterCards(event.target.value));
    }

    const onClose = (id) => {
        props.removeFav(id);
    };

    return (
        <div>
            <h1 className={styleFav.titulo}>Mis Cards Favoritas</h1>
            <div className={styleFav.divSelect}>
                <select defaultValue={"default"} onChange={handleOrder}>
                    <option value={"default"} hidden>Ordenar por:</option>
                    <option value={"A"}>Ascendente</option>
                    <option value={"D"}>Descendente</option>
                </select>
                <select defaultValue={"default"} onChange={handleFilter}>
                    <option value="default" hidden>Gender:</option>
                    <option value={"Male"}>Male</option>
                    <option value={"Female"}>Female</option>
                    <option value={"Genderless"}>Genderless</option>
                    <option value={"unknown"}>unknown</option>
                    <option value={"all"}>All</option>
                </select>
            </div>
            <div className={styleFav.divPrincipalFavorites}>
                {
                    props.myFavorites?.map(card => <Card
                    // onClose={() => window.alert('Emulamos que se cierra la card')}
                    onClose={() =>onClose(card.id)}
                    image={card.image}
                    key={card.id}
                    id={card.id}
                    name={card.name}
                    status={card.status}
                    species={card.species}
                    gender={card.gender}
                    origin={card.origin.name}
                    />)
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeFav: (id) => dispatch(removeFav(id))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Favorites);

// myFavorites = [4, 170, 3, 17, 38, 39, 88, 94]
// genderless = [ 333, 372 ]
// unknown = [ 71, ]