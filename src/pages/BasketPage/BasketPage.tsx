import ProductBasket from "../../components/ProductBasket/ProductBasket";
import style from "./BasketPage.module.css";
import { IBasketProduct, useBasketContext } from "../../context/basket.context";
import NavButton from "../../components/NavButton/NavButton";
import { useNavigate } from "react-router";

const BasketPage = () => {
  const { products, getBasketQuantity, getBasketTotal } = useBasketContext();

  const navigate = useNavigate();
  const backToHome = (): void => {
    navigate("/");
  };

  const goToPayment = (): void => {
    navigate("/payment");
  };

  return (
    <main>
      <NavButton buttonText="Continuer la commande" navigate={backToHome} />

      <h2>Panier</h2>

      {products.length < 1 ? (
        <p>Aucun produit dans le panier.</p>
      ) : (
        <section className={style.basketPageContainer}>
          {/* Liste de tous les produits du panier */}
          <section className={style.basketList}>
            {products.map((basketProduct) => (
              <ProductBasket
                product={basketProduct.product}
                quantity={basketProduct.quantity}
              />
            ))}
          </section>

          {/* Récapitulatif du panier */}
          <section className={style.basketSummary}>
            <hr className={style.onlyMobileDisplay} />
            <p className={style.quantityAndPrice}>
              Quantité: {getBasketQuantity()} produit
              {(getBasketQuantity() > 1 || getBasketQuantity() === 0) && "s"}
              <br />
              <strong>
                Total : {getBasketTotal().toFixed(2).replace(".", ",")} €
              </strong>
            </p>
            <hr />
            <p className={style.prepa}>Temps de préparation : 20min</p>
            <NavButton buttonText="Commander" navigate={goToPayment} />
          </section>
        </section>
      )}
    </main>
  );
};

export default BasketPage;
