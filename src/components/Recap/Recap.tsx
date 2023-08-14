import { useNavigate } from "react-router";
import NavButton from "../NavButton/NavButton";
import style from "./Recap.module.css";
import { IBasketProduct, useBasketContext } from "../../context/basket.context";
import { usePaymentContext } from "../../context/payment.context";

const Recap = () => {
  const { products, getBasketQuantity, getBasketTotal } = useBasketContext();
  const { formData, isFormValid } = usePaymentContext();
  const navigate = useNavigate();

  const submit = (): void => {
    if (isFormValid()) {
      console.log("Formulaire soumis avec succès !", formData);
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
            {basketProduct.product.name} x {basketProduct.quantity}
          </li>
        ))}
      </ul>
      <p>
        <strong>Total : {getBasketTotal().toFixed(2).replace(".", ",")} €</strong>
      </p>
      <hr className={style.horizontalBar} />
      <p className={style.prepaRecapInfo}>
        Temps de préparation : 20min
      </p>
      <NavButton buttonText="Payer" navigate={submit} />
    </>
  );
};

export default Recap;
