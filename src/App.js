
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
import {useState} from 'react'

function App () {

  const [characters, setCharacters] = useState([]);

  const URL_BASE = "https://be-a-rym.up.railway.app/api";
  const API_KEY = "b13ef727c3c3.981b0d40d54e6c8b2134";

  const onSearch= (character) => {
    fetch(`${URL_BASE}/character/${character}?key=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            const existingChar = characters.find((char) => char.id === data.id);
            if (!existingChar) {
              setCharacters((oldChars) => [...oldChars, data]);
            } else {
              window.alert('Este personaje ya ha sido agregado a la lista');
            }
          } else {
              window.alert('No hay personajes con ese ID');
          }
      });
}

//! else if en vez de else y agregarle si coincide la id con algo ya llamado o no.

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
