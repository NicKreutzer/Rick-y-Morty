
import style from './SearchBar.module.css'
import { useState } from 'react';

function SearchBar({onSearch, emptyList}) {
const [character, setCharacter] = useState("");

const handleChange = (event)=> {
   setCharacter(event.target.value)
};

const generateRandomId = () => {
   const randomId = Math.floor(Math.random() * 826) + 1;
   onSearch(randomId);
};

   return (
      <div className= {style.search}>
         <input type='search' value={character} onChange={handleChange} placeholder='Add...'/>
         <button onClick={() => onSearch(character)}>Add</button>
         <button onClick={generateRandomId}>Add Random</button>
         <button onClick={() => emptyList()}>Clean</button>
      </div>
   );
}

export default SearchBar;