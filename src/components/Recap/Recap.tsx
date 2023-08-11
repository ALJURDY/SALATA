import { useNavigate } from "react-router";
import NavButton from "../NavButton/NavButton";
import style from "./Recap.module.css";
import { IBasketProduct, useBasketContext } from "../../context/basket.context";
import { usePaymentContext } from "../../context/payment.context";

// jeu de données en attendant la mise en place du bouton addToBasket()
const fakeBasketData: IBasketProduct[] = [
  {
    id: "4d2c8dac-e9bc-47e7-85d3-8b547592e0eb",
    product: {
      id: 1,
      name: "Salade Caprese",
      price: 11,
      description: "Tomates, mozza, basilic, asperges, jambon cru",
      diet: ["sans gluten"],
      category: "salade",
      img: {
        src: "/assets/salades/caprese.jpg",
        alt: "Salade Caprese",
      },
    },
    quantity: 2,
  },
  {
    id: "80585f95-b1ab-4d0a-8778-3bfe6cd91c83",
    product: {
      id: 10,
      name: "Citronnade maison",
      price: 3,
      description: "Citrons frais, limonade bio",
      diet: [],
      category: "boisson",
      img: {
        src: "/assets/boissons/citronnade.jpg",
        alt: "Salade Romaine",
      },
    },
    quantity: 3,
  },
];

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

  const submitForm = () => {
    
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
        {fakeBasketData.map((basketProduct) => (
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
