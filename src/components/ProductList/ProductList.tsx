import { useState } from "react";
import { IProduct, PRODUCTS, ProductCategoryType } from "../../mocks/products";
import ProductCard from "../ProductCard/ProductCard";
import style from "./ProductList.module.css";


const ProductList = ({ selectedCategory }: { selectedCategory: string | null }) => {


    // Créer un objet pour regrouper les produits par catégorie
    const productsByCategory: Record<ProductCategoryType, IProduct[]> = {
        salades: [],
        desserts: [],
        boissons: [],

    };

    // Regrouper les produits par catégorie
    PRODUCTS.forEach((product) => {
        if (product.category) {
            productsByCategory[product.category].push(product);
        }
    });

    return (
        <>
          {/* Afficher les produits groupés par catégorie */}
          {Object.entries(productsByCategory).map(([category, products]) => (
            (selectedCategory === null || selectedCategory === category) && (
              <div key={category}>
                <h2>{capitalizeFirstLetter(category)}</h2>
                <ul className={style.ProductListFlex}>
                  {products.map((product) => (
                    <li key={product.id}>
                      <ProductCard item={product} />
                    </li>
                  ))}
                </ul>
              </div>
            )
          ))}
        </>
      );
    };

// Capitaliser la première lettre d'une chaîne de caractères
function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


export default ProductList;