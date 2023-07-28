import { PRODUCTS } from "../../mocks/products";
import ProductCard from "../ProductCard/ProductCard";
import style from "./ProductList.module.css";

// Composant ProductList : il affiche une liste de produits en utilisant le composant ProductCard
const ProductList = () => {
    return (
        <>
            {/* Conteneur sous forme de liste pour afficher les produits */}
            <ul className={style.ProductListFlex}>
                {PRODUCTS.map((product) => (
                    // Chaque produit est représenté par un élément 'li' dans la liste
                    <li key={product.id}>
                        {/* Utilisation du composant ProductCard pour afficher les détails du produit */}
                        <ProductCard item={product} />
                    </li>
                ))}
            </ul>
        </>
    );
}

// Exportation du composant ProductList en tant que composant par défaut
export default ProductList;
