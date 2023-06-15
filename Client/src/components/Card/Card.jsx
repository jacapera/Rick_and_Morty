import styleCard from './Card.module.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFav, changeErrors, removeFav } from '../../redux/action';
import { useEffect, useState } from 'react';

function Card(props) {
   //console.log(props)

   const [isFav, setIsFav] = useState(false);

   const handleFavorite =  () => {
      if(props.errors === false){
         isFav ? props.removeFav(props.id) : props.addFav(props);
         setIsFav(!isFav)
      }else{
         window.alert(props.errors)
         props.changeError();
         setIsFav(!isFav)
      }
   };

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id){
            setIsFav(true);
         }
      })
   }, [props.myFavorites])

   const style = {
      backgroundColor: 'gray',
      border: 'none',
      fontSize:'25px',
      position:'relative',
      right:'78px'
   }

   return (
      <div className={styleCard.divPrincipalCard}>
         <div className={styleCard.divButtonCierre}>
            <h3>{props.id}</h3>
            {
               isFav ? (<button style={style} onClick={handleFavorite}>❤️</button>)
               : (<button style={style} onClick={handleFavorite}>🤍</button>)
            }
            <button
               className={styleCard.botonCierre}
               onClick={() => props.onClose(props.id)}
            >X</button>
         </div>
         <img className={styleCard.imgCard} src={props.image} alt='' />
         <Link to={`/detail/${props.id}`}>
            <h2 className={styleCard.h2Name}>{props.name}</h2>
         </Link>
         <div className={styleCard.divSubtitulos}>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
         </div >
         <h2>{props.origin}</h2>
         <h2>{props.status}</h2>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
      errors: state.errors
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id)),
      changeError: () => dispatch(changeErrors())
   }
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
) (Card)
