
import './App.css'
// import Card from './components/Card.jsx'
import Cards from './components/Cards/Cards.jsx'
import SearchBar from './components/SearchBar/SearchBar.jsx'
import characters from './data.js'


function App () {
  return (
    <div className= 'Background'>
      {/* <img src= 'https://poptv.orange.es/wp-content/uploads/sites/3/2018/03/Rick-and-Morty-3p-1100x619.jpg' className='Bgimg'> */}
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        />
      </div>
      <br></br>
      <div>
        {/* <Card
          name={characters.name}
          species={characters.species}
          gender={characters.gender}
          image={characters.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        /> */}
      </div>
      {/* <hr /> */}
      <div>
        <Cards
          characters={characters}
        />
      </div>
      {/* <hr /> */}
      <div>
        {/* <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        /> */}
      </div>
    </div>
    </div>
  )
}

export default App
