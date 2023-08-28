import { useNavigate } from "react-router";
import NavButton from "../NavButton/NavButton";
import style from "./Recap.module.css";
import { useBasketContext } from "../../context/basket.context";
import { usePaymentContext } from "../../context/payment.context";
import PaymentModal from "../PaymentModal/PaymentModal";
import { useState } from "react";

const Recap = () => {
  const { products, getBasketQuantity, getBasketTotal } = useBasketContext();
  const { formData, isFormValid } = usePaymentContext();
  const [modalDisplay, setModalDisplay] = useState(false);
  const navigate = useNavigate();

  const submit = (): void => {
    if (isFormValid() && formData.isPerCardPayment === "isPerCardPayment") {
      setModalDisplay(true)
    }
    if (isFormValid() && formData.isPerCardPayment === "payLater") {
      setModalDisplay(false)
      navigate("/summary");
    }
  };

  return (
    <>
      <h4 className={style.paymentPageTitle}>Récapitulatif</h4>
      <hr className={style.horizontalBar} />
      <p>
        <strong>
          Quantité: {getBasketQuantity()} produit
          {(getBasketQuantity() > 1 || getBasketQuantity() === 0) && "s"}
        </strong>
      </p>
      <ul className={style.productListRecap}>
        {products.map((basketProduct) => (
          <li>
            {basketProduct.product.name}
            {basketProduct.product.extras!.length > 0 && " ("}
            {basketProduct.product.extras?.map((extra, index) => (
              <span key={extra.name}>
                {extra.name}
                {index !== basketProduct.product.extras!.length - 1 ? ", " : ""}
              </span>
            ))}
            {basketProduct.product.extras!.length > 0 && ")"} x{" "}
            {basketProduct.quantity}
          </li>
        ))}
      </ul>
      <p>
        <strong>
          Total : {getBasketTotal().toFixed(2).replace(".", ",")} €
        </strong>
      </p>
      <hr className={style.horizontalBar} />
      <p className={style.prepaRecapInfo}>Temps de préparation : 20min</p>
      <NavButton buttonText="Payer" navigate={submit} />

      {/* Modale de paiement par carte */}
      {modalDisplay && (
        <section className={style.modalDisplay}>
          <PaymentModal />
        </section>
      )}
    </>
  );
};

export default Recap;
