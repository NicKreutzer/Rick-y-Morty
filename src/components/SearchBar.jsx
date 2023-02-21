export default function SearchBar(props) {
   return (
      <div class= "search">
         <input type='search' name = "search" id= "search" />
         <button onClick={() => props.onSearch("Character not found.")}>Search</button>
      </div>
   );
}
