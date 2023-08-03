import { usePaymentContext } from "../../context/payment.context";
import style from "./InfoForm.module.css";

const InfoForm = () => {
  const { formData, handleChange, errors } = usePaymentContext();

  return (
    <form className={style.paymentForm}>
      <h4 className={style.paymentPageTitle}>Informations</h4>

      {/* Adresse e-mail */}
      <div className={style.paymentFormRow}>
        <label>
          Adresse mail{" "}
          <span className={style.mandatoryField}>
            * {errors.email && <span>{errors.email}</span>}
          </span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="delicious-salade@mail.com"
          value={formData.email}
          onChange={handleChange}
          className={style.infoInput}
        />
      </div>

      {/* Nom et prénom */}
      <div className={style.paymentFormRow}>
        <div className={style.paymentFormColumn}>
          <label>
            Prénom{" "}
            <span className={style.mandatoryField}>
              * {errors.firstName && <span>{errors.firstName}</span>}
            </span>
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="Jeanne"
            value={formData.firstName}
            onChange={handleChange}
            className={style.infoInput}
          />
        </div>
        <div className={style.paymentFormColumn}>
          <label>
            Nom{" "}
            <span className={style.mandatoryField}>
              * {errors.lastName && <span>{errors.lastName}</span>}
            </span>
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Dupont"
            value={formData.lastName}
            onChange={handleChange}
            className={style.infoInput}
          />
        </div>
      </div>

      {/* N° de téléphone et n° de table */}
      <div className={style.paymentFormRow}>
        <div className={style.paymentFormColumn}>
          <label>
            Numéro de téléphone{" "}
            <span className={style.mandatoryField}>
              * {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
            </span>
          </label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="0612345678"
            value={formData.phoneNumber}
            onChange={handleChange}
            className={style.infoInput}
          />
        </div>
        <div className={style.paymentFormColumn}>
          <label>
            Numéro de table{" "}
            <span className={style.mandatoryField}>
              * {errors.tableNumber && <span>{errors.tableNumber}</span>}
            </span>
          </label>
          <input
            type="number"
            name="tableNumber"
            value={formData.tableNumber}
            onChange={handleChange}
            className={style.infoInput}
          />
        </div>
      </div>

      {/* Mode de paiement */}
      <h4 className={style.paymentPageTitle}>Mode de paiement</h4>
      <div className={style.paymentFormRow}>
        <div className={style.paymentFormRadioInput}>
          <input
            type="radio"
            name="isPerCardPayment"
            onChange={handleChange}
            checked
          />
          <label>
            Par carte bancaire
            <svg
              className={style.paymentCardLogo}
              version="1.1"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="grid_system" />
              <g id="_icons">
                <path d="M6,19h12c2.2,0,4-1.8,4-4V9c0-2.2-1.8-4-4-4H6C3.8,5,2,6.8,2,9v6C2,17.2,3.8,19,6,19z M6,7h12c1.1,0,2,0.9,2,2H4   C4,7.9,4.9,7,6,7z M4,11h16v4c0,1.1-0.9,2-2,2H6c-1.1,0-2-0.9-2-2V11z" />
                <circle cx="14" cy="15" r="1" />
                <circle cx="17" cy="15" r="1" />
              </g>
            </svg>
          </label>
        </div>
        <div className={style.paymentFormRadioInput}>
          <input
            type="radio"
            name="isPerCardPayment"
            onChange={handleChange}
          />
          <label>
            Payer plus tard{" "}
            <svg className={style.payLaterLogo}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 21 21"
              fill="none"
            >
              <path
                d="M10.5 0C4.725 0 0 4.725 0 10.5C0 16.275 4.725 21 10.5 21C16.275 21 21 16.275 21 10.5C21 4.725 16.275 0 10.5 0ZM14.91 14.91L9.45 11.55V5.25H11.025V10.71L15.75 13.545L14.91 14.91Z"
                fill="#4A4760"
              />
            </svg>
          </label>
        </div>
      </div>
    </form>
  );
};

export default InfoForm;
