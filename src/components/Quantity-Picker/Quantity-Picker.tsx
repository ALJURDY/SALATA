import { useState } from "react";
import style from "./Quantity-Picker.module.css";

interface QuantityPickerProps {
    value: number;
    onChange: (newQuantity: number) => void;
  }

  const QuantityPicker: React.FC<QuantityPickerProps> = ({ value, onChange }) => {
    const [quantity, setQuantity] = useState(value);

    const add = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        onChange(newQuantity);
    }

    const remove = () => {
        if (quantity <= 0) return
        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
        onChange(newQuantity);
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