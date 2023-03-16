import style from "./About.module.css"
import Banner from '../../components/Banner.jpg'

export default function About (props){

    return(
        <div className={style.container}>
            <div className={style.contName}>
                <h3 className={style.name}>Nicolás Exequiel Kreutzer</h3>
            </div>
            <br/>
            <br/>
            <img src= {Banner} alt= "Nicolás Kreutzer" className={style.img}/>
            <br/>
            <br/>
            <div className={style.contDescription}>
            <p className={style.description}>I am just starting in programming, 
            but I had a really great time working on the front an back-end part of this project.
            I am 29 years old and I thought it would be the hardest thing to start in the IT world from scratch,
            but everyone in Henry`s motivates you to keep trying, and I am thankful for my TAs and teacher for that.
            I know have a lot to learn, but with the knowledge I have
            now, I made a functional web page which would not have been possible without Henry`s teachers.
            I am eager to learn everything I can in this time left, with the amazing staff that Henry has.</p>
            <br/>
            <h2 className={style.name}>Spanish</h2>
            <br/>
            <p className={style.description}>Recién estoy empezando com programación, pero disfruté muchísimo este tiempo que llevo
            trabajando en la parte del front y del back-end de este proyecto.
            Tengo 29 años y pensaba que sería casi imposible empezar en el mundo de IT sin tener conocimiento alguno del tema,
            pero todos acá en Henry siempre tratan de motivar a seguir intentando y estoy agradecido con mi profesor y mis TAs por eso.
            Sé que todavía tengo mucho por aprender, pero con lo que aprendí hasta ahora pude crear una página funcional, lo que no 
            podría haber sido posible sin la ayuda de todos en el staff de Henry.
            Estoy ansioso por aprender lo que más pueda en el tiempo que me queda acá.</p>
            </div>
        </div>
    )
};