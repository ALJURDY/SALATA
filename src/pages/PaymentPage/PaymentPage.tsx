import { useNavigate } from "react-router";
import NavButton from "../../components/NavButton/NavButton";
import style from "./PaymentPage.module.css";
import InfoForm from "../../components/InfoForm/InfoForm";
import Recap from "../../components/Recap/Recap";
import SummaryPage from "../SummaryPage/SummaryPage";
import PaymentModal from "../../components/PaymentModal/PaymentModal";


const PaymentPage = () => {
  const navigate = useNavigate();
  const backToBasket = (): void => {
    navigate("/basket");
  };

  return (
    <main>
      <section className={style.modalDisplay}>
      <PaymentModal />
      </section>
      <NavButton buttonText="Retour au panier" navigate={backToBasket} />

      <h2 className={style.paymentPageTitle}>Paiement</h2>

      <section className={style.paymentPageContainer}>

        {/* Formulaire */}
        <section className={style.formContainer}>
          <InfoForm />
        </section>

        {/* Récapitulatif du panier */}
        <section className={style.formRecap}>
          <Recap />
        </section>
        
      </section>
    </main>
  );
};

export default PaymentPage;
