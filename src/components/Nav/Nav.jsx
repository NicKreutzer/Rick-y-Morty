
import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css"

const Nav = ({onSearch, emptyList})=>{
    return(
        <div className= {style.container}>
            <Link to= "/">
            <button>Home</button>
            </Link>
            <SearchBar onSearch={onSearch} emptyList={emptyList}/>
            {/* <button as={Link} to= "/">Home</button>
            <button as={Link} to= "/about">About</button> */}
            
            {/* -button as Link no renderiza bien chequear.- */}
            
            <Link to= "/about">
            <button>About</button>
            </Link>
        </div>
    )

};

export default Nav;