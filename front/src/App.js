
import './App.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { Route, Routes} from 'react-router-dom'
import {useEffect, useState} from 'react'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'
import Favorites from './components/Favorites/Favorites'
import Locations from './components/Locations/Locations'

function App () {

  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [access, setAccess] = useState(false);
  //const username = "nicolaskreutzer@hotmail.com.ar";
  //const password = "hola123";

  function onSearch(character) {
    fetch(`http://localhost:3001/onsearch/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          characters.find((element) => element.id === data.id) === undefined
            ? setCharacters((characters) => [...characters, data])
            : alert("Personaje repetido, prueba otro ID.");
        } else {
          alert("No hay personajes con ese ID.");
        }
      });
  }

  function login (userData){
    //if(userData.username ===username && userData.ppassword === password)
    setAccess(true);
    navigate('/home');
  }

  useEffect(()=>{
    !access && navigate('/');
  }, [access]);

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
        {location.pathname !== "/" && <Nav onSearch={onSearch} emptyList={emptyList}/>}
      <br/>
      <Routes>
        <Route exact path="/home" element={ <Cards characters={characters} onClose={onClose}/>} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<Form login={login}/>}/>
        <Route exact path="/detail/:detailId" element={<Detail/>} />
        <Route exact path="favorites" element={<Favorites/>} />
        <Route path="/location" element={<Locations/>} />
      </Routes>
        <div>
      </div>
        </div>
    </div>
  )
}

export default App
