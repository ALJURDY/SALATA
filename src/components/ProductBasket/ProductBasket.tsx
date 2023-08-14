import { useState } from "react";
import { useBasketContext } from "../../context/basket.context";
import { IProduct } from "../../mocks/products";
import QuantityPicker from "../Quantity-Picker/Quantity-Picker";
import style from "./ProductBasket.module.css";

interface ProductBasketProps {
  product: IProduct;
  quantity: number
}

const ProductBasket = (props: ProductBasketProps ) => {
  const {product, quantity} = props;
  const [productQuantity, setSelectedQuantity] = useState(quantity);
  const { deleteBasketProduct, addProductToBasket, deleteOneProduct } = useBasketContext();

  const deleteProduct = (product: IProduct): void => {
    deleteBasketProduct(product);
  }

  const handleQuantityChange = (newQuantity: number) => {
    if(newQuantity > quantity) {
      addProductToBasket(product, quantity);
    } else {
      deleteOneProduct(product)
    }
  };

  return (
    <article className={style.basketCard}>

      {/* Image à droite */}
      <img
        className={style.image}
        src={product.img.src}
        alt={product.img.alt}
      />

      <div className={style.right}>

        {/* Nom du produit et croix pour effacer le produit */}
        <div className={style.topline}>
          <h3 className={style.productName}>{product.name}</h3>
          <div onClick={() => deleteProduct(product)}>
          <svg className={style.cross} version="1.1" viewBox="0 0 36 36">
            <g id="Layer_1" />
            <g id="icons">
              <path
                d="M6.2,3.5L3.5,6.2c-0.7,0.7-0.7,1.9,0,2.7l9.2,9.2l-9.2,9.2c-0.7,0.7-0.7,1.9,0,2.7l2.6,2.6   c0.7,0.7,1.9,0.7,2.7,0l9.2-9.2l9.2,9.2c0.7,0.7,1.9,0.7,2.7,0l2.6-2.6c0.7-0.7,0.7-1.9,0-2.7L23.3,18l9.2-9.2   c0.7-0.7,0.7-1.9,0-2.7l-2.6-2.6c-0.7-0.7-1.9-0.7-2.7,0L18,12.7L8.8,3.5C8.1,2.8,6.9,2.8,6.2,3.5z"
                id="close_1_"
              />
            </g>
          </svg>
          </div>
        </div>

        {/* Ingrédients extras */}
        <p className={style.extras}><span className={style.underlined}>Extras</span> : ingrédient 1, ingrédient 2</p>

        {/* Prix et Quantity Picker */}
        <div className={style.bottomline}>
          <p className={style.price}>{product.price.toFixed(2).replace(".", ",")} €</p>
          <QuantityPicker value={productQuantity} onChange={handleQuantityChange} />
        </div>
      </div>
    </article>
  );
};

export default ProductBasket;
