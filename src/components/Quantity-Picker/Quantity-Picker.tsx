import { useState } from "react";
import style from "./Quantity-Picker.module.css";

const QuantityPicker = () => {
    const [quantity, setQuantity] = useState(1);

    const add = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
    }

    const remove = () => {
        if (quantity <= 0) return
        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
    }

    return (
        <div className={style.QuantityPicker}>
             <p className={style.ProductTitle}>Quantité</p>
            <div className={style.controls}>
                <button className={style.Btn} onClick={remove}>-</button>
                <span className={style.Quantity}>{quantity.toString().padStart(2, '0')}</span>
                <button className={style.Btn} onClick={add}>+</button>
            </div>
        </div>
    );

}

export default QuantityPicker