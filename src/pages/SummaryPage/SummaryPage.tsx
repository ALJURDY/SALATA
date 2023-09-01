import { useNavigate } from "react-router";
import Style from "./SummaryPage.module.css";
import { usePaymentContext } from "../../contexts/payment.context";
import { useBasketContext } from "../../contexts/basket.context";
import NavButton from "../../components/NavButton/NavButton";

const SummaryPage = () => {
    const { formData } = usePaymentContext();
    const { products, getBasketQuantity, getBasketTotal, clearBasket } = useBasketContext();
    const navigate = useNavigate();

    const tableNumberSection = formData.tableNumber ? (
        <p className={Style.titres}> Numéro de table : {formData.tableNumber}</p>
    ) : null;

    const navigateToHome = () => {
        clearBasket();
        navigate('/#Commande');
    };

    return (
        <main>
            <h1 className={Style.title}>Merci d’avoir commandé !</h1>
            <section className={Style.container}>
                <div className={Style.block}>
                    <p className={Style.titres}>Récapitulatif</p>
                    <p className={Style.data}> {formData.email}</p>
                    <p className={Style.data}>{formData.firstName} {formData.lastName}</p>
                    <p className={Style.data}>Mode de paiement : {formData.isPerCardPayment === "isPerCardPayment" ? "Par carte bancaire" : "Payer plus tard"}</p>
                    {tableNumberSection}
                </div>
                <div className={Style.line}></div>
                <div className={Style.block}>
                    <p className={Style.titres}>Quantité : {getBasketQuantity()} produit
                        {getBasketQuantity() > 1 && "s"}</p>
                    {products.length > 0 && (
                        <div className={Style.selectedProducts}>
                            <ul>
                                {products.map((basketProduct) => (
                                    <li key={basketProduct.id}>
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
                        </div>
                    )}
                    <div className={Style.titres}>
                        Total: {getBasketTotal().toFixed(2).replace(".", ",")} €
                    </div>

                </div>
            </section>
            <div className={Style.button}>
                <NavButton buttonText="Nouvelle commande" navigate={navigateToHome} />
            </div>
        </main>
    );
}
export default SummaryPage