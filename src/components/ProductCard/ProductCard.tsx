import { NavLink } from "react-router-dom";
import { IProduct } from "../../mocks/products";
import style from "./ProductCard.module.css";

// Interface décrivant les propriétés attendues pour le composant ProductCard
interface ProductCardProps {
    item: IProduct; // Propriété 'item' de type IProduct, contenant les informations du produit à afficher
}

// Composant ProductCard : il prend en entrée les propriétés définies dans ProductCardProps
const ProductCard = (props: ProductCardProps) => {
    // Extraction de la propriété 'item' des props pour faciliter l'accès aux informations du produit
    const { item } = props;
    const { id, name, price, description, diet, img } = item; // Extraction des différentes propriétés du produit

    // Rendu du composant ProductCard
    return (
        <>
            {/* Conteneur d'un produit */}
            <article className={style.ProductCardWidth}>
                {/* Image du produit */}
                <NavLink to={`/products/${id}`} className={style.ProductCardId}>
               <img className={style.ProductCardImages} src={img.src} alt={img.alt} /> 
               </NavLink>
                {/* Nom du produit et son prix */}
                <h4 className={style.ProductCardName}>{name} <span className={style.ProductCardMargin}>{price.toFixed(2)}€</span></h4>
                {/* Description du produit */}
                <p className={style.ProductCardDescription}>{description}</p>
                {/* Liste des régimes associés au produit */}
                <div className={style.ProductCardFlex}>
                    {diet.map((regime) => (
                        <div className={style.ProductCardDiet} key={regime}>
                            <p>{regime}</p>
                        </div>
                    ))}
                </div>
            </article>
        </>
    );
}

// Exportation du composant ProductCard en tant que composant par défaut
export default ProductCard;
