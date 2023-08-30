import { IProduct, PRODUCTS, ProductCategoryType, DietType } from "../../mocks/products";
import ProductCard from "../ProductCard/ProductCard";
import style from "./ProductList.module.css";

interface ProductListProps {
  selectedCategory: string;
  selectedDiets: DietType[];
}

const ProductList = (props: ProductListProps) => {
  const { selectedCategory, selectedDiets } = props;

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

  const areDietsListsEquals = (
    dietList1: DietType[],
    dietList2: DietType[]
  ): boolean => {
    return dietList1.every(diet => dietList2.includes(diet))
  };

  return (
    <>
      {/* Afficher les produits groupés par catégorie */}
      {Object.entries(productsByCategory).map(([category, products]) => {
        const filteredProducts = products.filter((product) => {

          return (
            (selectedCategory === "tout" || selectedCategory === category) &&
            (selectedDiets.length === 0 ||
              areDietsListsEquals(selectedDiets, product.diet))
          );
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

        return []; // Pas de produits à afficher pour cette catégorie et filtres de régime
      })}
    </>
  );
};

// Capitaliser la première lettre d'une chaîne de caractères
function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default ProductList;
