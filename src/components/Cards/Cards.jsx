import Card from '../Card/Card';
import styleCards from '../Cards/Cards.module.css';



export default function Cards(props) {
   //console.log(props)
   return <div className={styleCards.divPrincipalCards}>
      {
         props.characters.map(card => <Card
            // onClose={() => window.alert('Emulamos que se cierra la card')}
            onClose={() => props.onClose(card.id)}
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
   </div>;
}
