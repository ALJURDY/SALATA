import { Link } from "react-router-dom";
import style from "./Footer.module.css"

const Footer = () => {
  return (
   <footer className={style.footer}>
    <div className={style.white}></div>
    <Link to="/">
        <img
          className={style.logo}
          src="/assets/logo/logo-salata.png"
          alt="Logo Salata"
        />
      </Link>
      <p className={style.copyright}>Réalisé par l’équipe des Pains d’Épices</p>
   </footer>
  )
}

export default Footer;
