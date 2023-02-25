import style from "./About.module.css"
import Banner from '../../components/Banner.jpg'

export default function About (props){

    return(
        <div className={style.container}>
            <h3 className={style.name}>Nicolás Exequiel Kreutzer</h3>
            <br/>
            <img src= {Banner} alt= "Nicolás Kreutzer" className={style.img}/>
            <br/>
            <p className={style.description}>Descripcion a completar acerca de mi.</p>
        </div>
    )
};