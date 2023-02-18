export default function SearchBar(props) {
   return (
      <div>
         <input type='search' />
         <button onClick={() => props.onSearch("Character not found.")}>Search</button>
      </div>
   );
}
