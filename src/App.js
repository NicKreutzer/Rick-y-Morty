
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
import {useState} from 'react'

function App () {

  const [characters, setCharacters] = useState([]);

  const onSearch= (character) => {
    console.log("Character numero de id ingresa", character)
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
        .then((response) => response.json())
        .then((data) => {
          console.log("dentro de data ", data)
          if (data.name) {
              setCharacters((oldChars) => [...oldChars, data]);
          } else {
              window.alert('No hay personajes con ese ID');
          }
      });
}

const onClose = (id) => {
  setCharacters(
    characters.filter(character => character.id !== id)
  )
};

const emptyList = (event)=>{
  setCharacters([])
};

  return (
    <div className= 'Background'>
      <div className='App' style={{ padding: '25px' }}>
        <Nav onSearch={onSearch} emptyList={emptyList}/>
      <br/>
        <div>
          <Cards
            characters={characters}
            onClose={onClose}
          />
      </div>
        </div>
    </div>
  )
}

export default App
