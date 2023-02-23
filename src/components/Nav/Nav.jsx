
import SearchBar from "../SearchBar/SearchBar";

const Nav = ({onSearch, emptyList})=>{
    return(
        <div>
            <SearchBar onSearch={onSearch} emptyList={emptyList}/>
        </div>
    )

};

export default Nav;