
import Style from "./SummaryPage.module.css";
import { usePaymentContext } from "../../context/payment.context";
import { useBasketContext } from "../../context/cart.context";

const SummaryPage = () => {
    const { formData } = usePaymentContext();
    const { products, getBasketQuantity, getBasketTotal } = useBasketContext();

    return (
        <main>
            <h1 className={Style.title}>Merci d’avoir commandé !</h1>
            <section className={Style.container}>
                <div className={Style.recap}>Récapitulatif
                    <div className={Style.data}> {formData.email}</div>
                    <div className={Style.data}>{formData.firstName}{formData.lastName}</div>
                    <div> Numéro de table : {formData.tableNumber}</div>
                </div>
                <div className={Style.line}></div>
                <div className={Style.quantity}>
                    Quantité : {getBasketQuantity()} produit
                    {(getBasketQuantity() > 1 || getBasketQuantity() === 0) && "s"}
                

                </div>
            </section>
        </main>
    );
}
export default SummaryPage