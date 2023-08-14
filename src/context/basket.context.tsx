import { createContext, useContext, useState } from "react";
import { IProduct } from "../mocks/products";
import { v4 as uuidv4 } from "uuid";

// Produit du panier
export interface IBasketProduct {
  id: string;
  product: IProduct;
  quantity: number;
}

// Le panier
interface IBasket {
  products: IBasketProduct[];
  addProductToBasket: (product: IProduct, quantity: number) => void;
  getBasketQuantity: () => number;
  getBasketTotal: () => number;
  deleteBasketProduct: (product: IProduct) => void;
  deleteOneProduct: (product: IProduct) => void
}

// un panier par defaut pour éviter qu'il puisse être null
const defaultBasket: IBasket = {
  products: [],
  addProductToBasket: () => {},
  getBasketQuantity: () => 0,
  getBasketTotal: () => 0,
  deleteBasketProduct: () => {},
  deleteOneProduct: () => {}
};

const BasketContext = createContext<IBasket>(defaultBasket);

// PROVIDER
interface BasketProviderProps {
  children: JSX.Element;
}

const BasketProvider = (props: BasketProviderProps) => {
  const { children } = props;

  const [basketProducts, setBasketProducts] = useState<IBasketProduct[]>([]);

  const addProductToBasket = (product: IProduct, quantity: number) => {
    const newBasketProduct: IBasketProduct = {
      id: uuidv4(),
      product,
      quantity,
    };

    // Check if product already exists in basket
    const foundProduct = basketProducts.find((p) => p.product === newBasketProduct.product);

    if (!foundProduct) {
      setBasketProducts([...basketProducts, newBasketProduct]);
    } else {
      foundProduct.quantity += 1;
      setBasketProducts([...basketProducts])
    }
    console.log(basketProducts);
  };

  const getBasketQuantity = () => {
    return basketProducts.reduce(
      (accumulator: number, currentValue: IBasketProduct) =>
        (accumulator += currentValue.quantity),
      0
    );
  };

  const getBasketTotal = () => {
    return basketProducts.reduce(
      (accumulator: number, currentValue: IBasketProduct) =>
        accumulator + currentValue.product.price * currentValue.quantity,
      0
    );
  };

  const deleteBasketProduct = (product: IProduct) => {
    const foundProduct = basketProducts.find((p) => p.product.id === product.id);
        if (foundProduct) {
            const index = basketProducts.indexOf(foundProduct);
            basketProducts.splice(index, 1);
            setBasketProducts([...basketProducts]);
        }
        return basketProducts;
  };

  const deleteOneProduct = (product: IProduct) => {
    const foundProduct = basketProducts.find((p) => p.product.id === product.id);

    if (!foundProduct) {
        return;
    } else {
        if (foundProduct.quantity > 1) {
            foundProduct.quantity -= 1;
            setBasketProducts([...basketProducts]);
        } else {
            deleteBasketProduct(product);
            setBasketProducts([...basketProducts]);
        }
    }
  }


  const basket: IBasket = {
    products: basketProducts,
    addProductToBasket,
    getBasketQuantity,
    getBasketTotal,
    deleteBasketProduct,
    deleteOneProduct
  };

  return (
    <BasketContext.Provider value={basket}>{children}</BasketContext.Provider>
  );
};

export default BasketProvider;
export const useBasketContext = () => useContext(BasketContext);
