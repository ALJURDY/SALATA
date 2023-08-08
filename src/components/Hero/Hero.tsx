import style from "./Hero.module.css";

const Hero = () => {
    return (

        <main className={style.HeroMain}>
            <section className={style.HeroSection}>
                <h1 className={style.HeroGrosTitre}>Des salades <span className={style.HeroMenthe}>modernes</span> & l’<span className={style.HeroTangerine}>authenticité</span> de l’Italie</h1>
                <a className={style.HeroCommande} href="#Commande">Je commande ! <svg className={style.HeroFlecheSvg} viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" /></svg></a>
            </section>

            <img className={style.HeroImghome} src="/assets/homepage/salata-hero.svg" alt="" />
        </main>
    )

}

export default Hero;