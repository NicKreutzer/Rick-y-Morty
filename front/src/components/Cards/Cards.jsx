import Card from '../Card/Card.jsx';
import style from './Cards.module.css'


export default function Cards({ characters, onClose }) {
   

   return (
      <div className={style.cardsContainer}>
         {characters.map((element) => (
            <Card
            id = {element.id}
            key={element.id}
            name={element.name}
            species={element.species}
            gender={element.gender}
            image={element.image}
            origin={element.origin}
            type={element.type}
            location={element.location}
            onClose={onClose}
            />
         ))}
         </div>
      )
   
}
