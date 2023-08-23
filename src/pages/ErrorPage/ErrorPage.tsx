import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import style from "./ErrorPage.module.css"
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    if (isRouteErrorResponse(error)) {
        return (
            <section className={style.ErrorPageSection}>
                <Header/>
            <div className={style.ErrorPageFlex}>
                <img className={style.ErrorPageImgVespa} src="/assets/errorpage/vespa.png" alt="" />
                <div className={style.ErrorPageBloc}>
                <h1 className={style.ErrorPageH1}> {error.status} </h1>
               <p className={style.ErrorPageTexte}> Fausse route ! Cette page n’existe pas</p>
               </div>
<img className={style.ErrorPageImghome} src="/assets/homepage/salata-hero.svg" alt="" />
            </div>

            <button className={style.ErrorPageButton}>Retour à la page principale</button>

            <Footer/>
            </section>
        )

        
    } else {
        return <p>Oups</p>
        
    }


}
export default ErrorPage;
