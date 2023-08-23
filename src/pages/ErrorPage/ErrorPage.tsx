import { isRouteErrorResponse, useNavigate, useRouteError } from "react-router-dom";
import style from "./ErrorPage.module.css"
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import NavButton from "../../components/NavButton/NavButton";


const ErrorPage = () => {
    const navigate = useNavigate();
    const error = useRouteError();
    console.error(error);
    if (isRouteErrorResponse(error)) {

    
        const backToHome = (): void => {
            navigate("/");
          };
        return (
            <>
                <Header/>

                <main className={style.ErrorPageSection}>
            <div className={style.ErrorPageFlex}>
                <img className={style.ErrorPageImgVespa} src="/assets/errorpage/vespa.png" alt="" />
                <div className={style.ErrorPageBloc}>
                <h1 className={style.ErrorPageH1}> {error.status} </h1>
               <p className={style.ErrorPageTexte}> Fausse route ! Cette page n’existe pas</p>
               <NavButton navigate={backToHome} buttonText="Retour à la page principale"/>
               </div>
<img className={style.ErrorPageImghome} src="/assets/homepage/salata-hero.svg" alt="" />
            </div>

            </main>
            <Footer/>
            </>
        )

        
    } else {
        return <p>Oups</p>
        
    }


}
export default ErrorPage;
