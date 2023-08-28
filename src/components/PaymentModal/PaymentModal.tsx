import { useNavigate } from "react-router";
import { useBasketContext } from "../../context/basket.context";
import NavButton from "../NavButton/NavButton";
import style from "./PaymentModal.module.css";

const PaymentModal = () => {
  const { getBasketTotal } = useBasketContext();
  const buttonText =
    "Payer " + getBasketTotal().toFixed(2).replace(".", ",") + " €";

  const navigate = useNavigate();
  const backToBasket = (): void => {
    navigate("/basket");
  };

  return (
    <section className={style.modalSection}>
      <h4 className={style.modalTitle}>Payer par carte</h4>

      <div className={style.paymentFormRow}>
        <label className={style.modalLabel}>
          Nom <span className={style.mandatoryField}>*</span>
        </label>
        <input
          type="cardName"
          name="cardName"
          placeholder="NOM"
          value=""
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
          value=""
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
            value=""
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
            value=""
            className={style.infoInput}
          />
        </div>
      </div>

      <NavButton navigate={backToBasket} buttonText={buttonText} />
    </section>
  );
};

export default PaymentModal;
