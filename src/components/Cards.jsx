import Card from './Card';


export default function Cards(props) {
   const { characters } = props;

   return (
      <div>
         {characters ? (characters.map((element) => (
            <Card
            name={element.name}
            species={element.species}
            gender={element.gender}
            image={element.image}
            origin={element.origin}
            type={element.type}
            location={element.location}
            onClose={() => window.alert('Emulamos que se cierra la card')}
            key={element.id}
            />
         ))) : (<h3>No hay personajes.</h3>)}
         </div>
      )
   
}
