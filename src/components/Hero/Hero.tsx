import style from "./Hero.module.css";

const Hero = () => {
    return(

        <main>
        <h1>Des salades <span className={style.menthe}>modernes</span> & l’<span className={style.tangerine}>authenticité</span> de l’Italie</h1>
        <a href="#">Je commande !</a>
         <img src="#" alt="" />
        </main>
    )

}

export default Hero;