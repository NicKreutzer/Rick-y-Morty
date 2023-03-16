
import style from './SearchBar.module.css'
import { useState } from 'react';


export default function SearchBar({onSearch, emptyList}) {

const [character, setCharacter] = useState("");

const handleChange = (event)=> {
   setCharacter(event.target.value)
};

const handleKeyDown = (event) => {
   if (event.key === 'Enter' || event.key === 'NumpadEnter') {
      onSearch(character);
   }
};

const generateRandomId = () => {
   const randomId = Math.floor(Math.random() * 826) + 1;
   onSearch(randomId);
};

   return (
      <div className= {style.searchBar}>
         <input type='search' name= "search" id= "search"
         value={character} 
         onChange={handleChange}
         onKeyDown={handleKeyDown}
         placeholder='Add...'></input>
         <button onClick={generateRandomId}>Random</button>
         <button onClick={() => onSearch(character)}>Add</button>
         <button onClick={() => emptyList()}>Clear</button>
      </div>
   );
}

// export default SearchBar;