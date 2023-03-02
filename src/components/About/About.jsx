import style from "./About.module.css"
import Banner from '../../components/Banner.jpg'

export default function About (props){

    return(
        <div className={style.container}>
            <div className={style.contName}>
                <h3 className={style.name}>Nicolás Exequiel Kreutzer</h3>
            </div>
            <br/>
            <img src= {Banner} alt= "Nicolás Kreutzer" className={style.img}/>
            <br/>
            <div className={style.contDescription}>
            <p className={style.description}>I am just starting in programming, 
            but I had a really great time working on the front-end part of this project.
            I am 29 years old and I thought it would be the hardest thing to start in the IT world from scratch,
            but everyone in Henry`s motivates you to keep trying, and I am thankful for my TAs and teacher for that.
            I know have a lot to learn, specially about back-end, but with the knowledge I have
            now, I made a functional web page which would not have been possible without Henry`s teachers.
            I am eager to learn everything I can in this time left, with the amazing staff that Henry has.</p>
            </div>
        </div>
    )
};