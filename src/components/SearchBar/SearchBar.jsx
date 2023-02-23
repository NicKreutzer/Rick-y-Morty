
import style from './SearchBar.module.css'
import { useState } from 'react';

function SearchBar({onSearch}) {
const [character, setCharacter] = useState("");

const handleChange = (event)=> {
   setCharacter(event.target.value)
};

   // const emptyList = (event)=>{
   //    setCharacter('')
   // };

   return (
      <div className= {style.search}>
         <input type='search' value={character} onChange={handleChange} placeholder='Add...'/>
         <button onClick={() => onSearch(character)}>Add</button>
         {/* <button onClick={() => emptyList}>Clean</button> */}
      </div>
   );
}

export default SearchBar;