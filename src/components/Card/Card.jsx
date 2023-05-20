import styleCard from './Card.module.css';
import { Link } from 'react-router-dom';

export default function Card(props) {
   //console.log(props)
   return (
      <div className={styleCard.divPrincipalCard}>
         <div className={styleCard.divButtonCierre}>
            <h3>{props.id}</h3>
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
