
import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css"

const Nav = ({onSearch, emptyList})=>{
    return(
        <div className= {style.container}>
            <SearchBar onSearch={onSearch} emptyList={emptyList}/>
            <button as={Link} to= "/home">Home</button>
            <button as={Link} to= "/about">About</button>
            {/* <Link to= "/home">
            <span>Home</span>
            </Link>
            <Link to= "/about">
            <span>About</span>
            </Link> */}
        </div>
    )

};

export default Nav;