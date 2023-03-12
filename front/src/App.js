
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
import {useEffect, useState} from 'react'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import { Route, Routes} from 'react-router-dom'
import Form from './components/Form/Form'
import { useLocation, useNavigate } from 'react-router-dom'
import Favorites from './components/Favorites/Favorites'

// function NotFound() {
//   return <h1>404 - Page not found</h1>;
// }

function App () {

  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [access, setAccess] = useState(false);
  const username = "nicolaskreutzer@hotmail.com.ar";
  const password = "hola123";

  function login (userData){
    if(userData.username ===username && userData.ppassword === password)
    setAccess(true);
    navigate('/home');
  }

  useEffect(()=>{
    !access && navigate('/');
  }, [access]);


  // const URL_BASE = "https://be-a-rym.up.railway.app/api";
  // const API_KEY = "b13ef727c3c3.981b0d40d54e6c8b2134";

  // const onSearch = (character) => {
  //   fetch(`${URL_BASE}/character/${character}?key=${API_KEY}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.name) {
  //         const existingChar = characters.find((char) => char.id === data.id);
  //         if (!existingChar) {
  //           setCharacters((oldChars) => [...oldChars, data]);
  //           // navigate(`/detail/${data.id}`);
  //         } else {
  //           navigate(`/characters/${data.id}`, { state: { message: 'Este personaje ya ha sido agregado a la lista' } });
  //         }
  //       } else {
  //         navigate('/not-found', { state: { message: 'No hay personajes con ese ID' } });
  //       }
  //     });
  // };

  const onSearch = (character) => {
    fetch(`http://localhost:3001/onsearch/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          const existingChar = characters.find((char) => char.id === data.id);
          if (!existingChar) {
            setCharacters((oldChars) => [...oldChars, data]);
            // navigate(`/detail/${data.id}`);
          } else {
            navigate(`/characters/${data.id}`, { state: { message: 'Este personaje ya ha sido agregado a la lista' } });
          }
        } else {
          navigate('/not-found', { state: { message: 'No hay personajes con ese ID' } });
        }
      });
  };


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
        {/* <Nav onSearch={onSearch} emptyList={emptyList}/> */}
      <br/>
      <Routes>
        <Route exact path="/home" element={ <Cards characters={characters} onClose={onClose}/>} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<Form login={login}/>}/>
        <Route exact path="/detail/:detailId" element={<Detail />} />
        <Route exact path="favorites" element={<Favorites/>} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
        <div>
      </div>
        </div>
    </div>
  )
}

export default App
