import { v4 as uuidv4 } from "uuid";
import { IProduct } from "../../mocks/products";
import ProductBasket from "../../components/ProductBasket/ProductBasket";
import style from "./BasketPage.module.css";

interface BasketProduct {
  id: string;
  product: IProduct;
  quantity: number;
}

// jeu de données en attendant la mise en place du context
const fakeBasketData: BasketProduct[] = [
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
  return (
    <main>

      <p>ici futur bouton</p>

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
            Quantité: x produits
            <br />
            <strong>Total : xx €</strong>
          </p>
          <hr />
          <p className={style.prepa}>Temps de préparation : 20min</p>
          <p>ici futur bouton Commander</p>
        </section>
      </section>
    </main>
  );
};

export default BasketPage;
