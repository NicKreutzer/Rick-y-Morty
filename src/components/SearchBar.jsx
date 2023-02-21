import style from './Card.module.css'

export default function SearchBar(props) {
   return (
      <div className= {style.search}>
         <input type='search' id= "search" placeholder='Search...'/>
         <button onClick={() => props.onSearch("Character not found.")}>Search</button>
      </div>
   );
}
