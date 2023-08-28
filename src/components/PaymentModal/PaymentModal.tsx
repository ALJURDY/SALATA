import { useNavigate } from "react-router";
import { useBasketContext } from "../../context/basket.context";
import NavButton from "../NavButton/NavButton";
import style from "./PaymentModal.module.css";

const PaymentModal = () => {
  const { getBasketTotal } = useBasketContext();
  const buttonText =
    "Payer " + getBasketTotal().toFixed(2).replace(".", ",") + " €";

  const navigate = useNavigate();
  const goToSummary = (): void => {
    navigate("/summary");
  };

  return (
    <section className={style.modalSection}>
      <h4 className={style.modalTitle}>Payer par carte</h4>

      <form>
        <div className={style.paymentFormRow}>
          <label className={style.modalLabel}>
            Nom <span className={style.mandatoryField}>*</span>
          </label>
          <input
            type="cardName"
            name="cardName"
            placeholder="NOM"
            className={style.infoInput}
          />
        </div>

        <div className={style.paymentFormRow}>
          <label className={style.modalLabel}>
            Numéro de carte <span className={style.mandatoryField}>*</span>
          </label>
          <input
            type="cardNumber"
            name="cardNumber"
            placeholder="4242 4242 4242 4242"
            className={style.infoInput}
          />
        </div>

        <div className={style.paymentFormRow}>
          <div className={style.paymentFormColumn}>
            <label className={style.modalLabel}>
              Date d'expiration <span className={style.mandatoryField}>*</span>
            </label>
            <input
              type="text"
              name="expirationDate"
              placeholder="MM/AA"
              className={style.infoInput}
            />
          </div>
          <div className={style.paymentFormColumn}>
            <label className={style.modalLabel}>
              CVC <span className={style.mandatoryField}>*</span>
            </label>
            <input
              type="text"
              name="CVC"
              placeholder="123"
              className={style.infoInput}
            />
          </div>
        </div>
      </form>

      <NavButton navigate={goToSummary} buttonText={buttonText} />
    </section>
  );
};

export default PaymentModal;
