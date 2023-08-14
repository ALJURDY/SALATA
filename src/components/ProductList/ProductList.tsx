import { IProduct, PRODUCTS, ProductCategoryType } from "../../mocks/products";
import ProductCard from "../ProductCard/ProductCard";
import style from "./ProductList.module.css";

const ProductList = () => {
    // Créer un objet pour regrouper les produits par catégorie
    const productsByCategory: Record<ProductCategoryType, IProduct[]> = {
        salade: [],
        dessert: [],
        boisson: [],
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
                <div key={category}>
                    {/* Afficher le titre de la catégorie */}
                    <h2>{capitalizeFirstLetter(category)}</h2>
                    {/* Afficher les produits de la catégorie */}
                    <ul className={style.ProductListFlex}>
                        {products.map((product) => (
                            <li key={product.id}>
                                <ProductCard item={product} />
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    );
};

// Capitaliser la première lettre d'une chaîne de caractères
function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export default ProductList;













// import { PRODUCTS } from "../../mocks/products";
// import ProductCard from "../ProductCard/ProductCard";
// import style from "./ProductList.module.css";

// // Composant ProductList : il affiche une liste de produits en utilisant le composant ProductCard
// const ProductList = () => {
//     return (
//         <>
//             {/* Conteneur sous forme de liste pour afficher les produits */}
//             <ul className={style.ProductListFlex}>
//                 {PRODUCTS.map((product) => (
//                     // Chaque produit est représenté par un élément 'li' dans la liste
//                     <li key={product.id}>
//                         {/* Utilisation du composant ProductCard pour afficher les détails du produit */}
//                         <ProductCard item={product} />
//                     </li>
//                 ))}
//             </ul>
//         </>

        
//     );

    
// }




// // Exportation du composant ProductList en tant que composant par défaut
// export default ProductList;
