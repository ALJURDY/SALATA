import React from "react";
import { IProduct, PRODUCTS, ProductCategoryType, DietType } from "../../mocks/products";
import ProductCard from "../ProductCard/ProductCard";
import style from "./ProductList.module.css";

const ProductList = ({ selectedCategory, selectedDiet }: { selectedCategory: string | null, selectedDiet: DietType | null }) => {
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
      {Object.entries(productsByCategory).map(([category, products]) => {
        const filteredProducts = products.filter(product => {
          return (selectedCategory === null || selectedCategory === category) &&
                 (selectedDiet === null || product.diet.includes(selectedDiet));
        });

        if (filteredProducts.length > 0) {
          return (
            <div key={category}>
              <h2>{capitalizeFirstLetter(category)}</h2>
              <ul className={style.ProductListFlex}>
                {filteredProducts.map((product) => (
                  <li key={product.id}>
                    <ProductCard item={product} />
                  </li>
                ))}
              </ul>
            </div>
          );
        }

        return null; // Pas de produits à afficher pour cette catégorie
      })}
    </>
  );
};

// Capitaliser la première lettre d'une chaîne de caractères
function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default ProductList;
