import ProductBasket from "../../components/ProductBasket/ProductBasket";
import style from "./BasketPage.module.css";
import { useBasketContext, IBasketProduct } from "../../context/cart.context";
import NavButton from "../../components/NavButton/NavButton";
import { useNavigate } from "react-router";

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

const BasketPage = () => {
  // products sera utilisé quand plus besoin de fakeBasketData
  const { products, getBasketQuantity, getBasketTotal } = useBasketContext();

  const navigate = useNavigate();
  const backToHome = (): void => {
    navigate("/")
  }

  const goToPayment = (): void => {
    navigate("/payment")
  }

  return (
    <main>
      <NavButton buttonText="Continuer la commande" navigate={backToHome}/>

      <h2>Panier</h2>

      <section className={style.basketPageContainer}>
        {/* Liste de tous les produits du panier */}
        <section className={style.basketList}>
          {fakeBasketData.map((basketProduct) => (
            <ProductBasket product={basketProduct.product} />
          ))}
        </section>

        {/* Récapitulatif du panier */}
        <section className={style.basketSummary}>
          <p className={style.quantityAndPrice}>
            Quantité: {getBasketQuantity()} produits
            <br />
            <strong>Total : {getBasketTotal().toFixed(2)} €</strong>
          </p>
          <hr />
          <p className={style.prepa}>Temps de préparation : 20min</p>
          <NavButton buttonText="Commander" navigate={goToPayment}/>
        </section>
      </section>
    </main>
  );
};

export default BasketPage;
