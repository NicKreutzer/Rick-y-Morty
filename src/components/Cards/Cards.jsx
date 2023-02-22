import Card from './Card';
import style from './Cards.module.css'

export default function Cards(props) {
   const { characters } = props;

   return (
      <div className={style.cardsContainer}>
         {characters ? (characters.map((element) => (
            <Card
            name={element.name}
            species={element.species}
            gender={element.gender}
            image={element.image}
            origin={element.origin}
            type={element.type}
            location={element.location}
            onClose={() => alert(element.name)}
            key={element.id}
            />
         ))) : (<h3>No hay personajes.</h3>)}
         </div>
      )
   
}
