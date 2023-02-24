
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
import {useState} from 'react'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import { Routes, Route } from 'react-router-dom'

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
      <Routes>
        <Route path="/" element={ <Cards characters={characters} onClose={onClose}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        {/* <Route path= "*"><h1>404</h1><br/>Page not Found</Route> */}
      </Routes>
        <div>
      </div>
        </div>
    </div>
  )
}

export default App
