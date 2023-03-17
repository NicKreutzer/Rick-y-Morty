
import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css"
import HomeLogo from "../../components/HomeLogo.png"
import Locations from "../../components/Locations.png"

const Nav = ({onSearch, emptyList})=>{
    return(
        <div className= {style.container}>
            <Link to= "/home"><button className={style.btnHome} type="button"><img src= {HomeLogo} alt= "Home" width={35}/></button></Link>
            <Link to= '/favorites'><button className={style.btnFav}>Favorites</button></Link>
            <Link to="/location"><button className={style.btnLoc}><img src= {Locations} alt= "Locations" width={30}/></button></Link>
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