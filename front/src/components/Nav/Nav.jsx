
import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css"

const Nav = ({onSearch, emptyList})=>{
    return(
        <div className= {style.container}>
            <Link to= "/home"><button className={style.btnHome}>Home</button></Link>
            <Link to= '/favorites'><button className={style.btnFav}>Favorites</button></Link>
            <SearchBar onSearch={onSearch} emptyList={emptyList}/> 
            <Link to= "/about">
            <button className={style.btnAbt}>About</button>
            </Link>
            <br/>
            <Link to= "/">
            <button className={style.btnLO}>Log Out</button>
            </Link>
        </div>
    )

};

export default Nav;