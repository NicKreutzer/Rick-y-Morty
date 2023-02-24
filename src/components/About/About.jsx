import style from "./About.module.css"

export default function About (props){

    return(
        <div className={style.container}>
            <h3>Nicolás Exequiel Kreutzer</h3>
            <br/>
            <img src= "../components/Banner.jpg" alt= "Nicolás Kreutzer" className={style.img}/>
            <br/>
            <p>Descripcion a completar acerca de mi.</p>
        </div>
    )
};