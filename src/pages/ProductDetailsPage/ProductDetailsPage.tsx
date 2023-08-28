import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../../mocks/products';
import Style from './ProductDetailsPage.module.css';
import NavButton from '../../components/NavButton/NavButton';
import { INGREDIENTS, IIngredient } from '../../mocks/ingredients';
import QuantityPicker from '../../components/Quantity-Picker/Quantity-Picker';
import { useBasketContext } from '../../context/basket.context';


const ProductDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addProductToBasket } = useBasketContext();

  const [selectedIngredients, setSelectedIngredients] = useState<IIngredient[]>([]);
  const [isIngredientListOpen, setIsIngredientListOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  if (!id) {
    return <div>Produit non trouvé.</div>;
  }

  const productId = parseInt(id, 10);
  const product = PRODUCTS.find((p) => p.id === productId);


  const navigateToHome = () => {
    navigate('/#Commande');
  };

  if (!product) {
    return <div>Produit non trouvé.</div>;
  }

  const handleIngredientSelection = (ingredient: IIngredient) => {
    if (selectedIngredients.includes(ingredient)) {
      setSelectedIngredients((prevIngredients) =>
        prevIngredients.filter((prevIngredient) => prevIngredient !== ingredient)
      );
    } else {
      setSelectedIngredients((prevIngredients) => [...prevIngredients, ingredient]);
    }
  };

  const toggleIngredientList = () => {

    if (product.extras && product.extras.length > 0) {
      setIsIngredientListOpen((prev) => !prev);
    }
  };


  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('fr-FR', {
      style: 'currency',
      currency: 'EUR',
    });
  };

  const productPrice = formatPrice(product.price);

  const totalPrice = (product.price * quantity + selectedIngredients.reduce((total, ingredient) => total + ingredient.price, 0) * quantity).toLocaleString('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  });


  const handleIngredientRemoval = (ingredient: IIngredient) => {
    setSelectedIngredients((prevIngredients) =>
      prevIngredients.filter((prevIngredient) => prevIngredient !== ingredient)
    );
  };

  const addToBasket = () => {
    addProductToBasket({ ...product, extras: selectedIngredients }, quantity);
    navigate("/basket");
  };

  return (
    <main>
      <NavButton buttonText="Continuer la commande" navigate={navigateToHome} />

      <section className={Style.productDetails}>
        <div className={Style.productContent}>
          <img className={Style.productImage} src={product.img.src} alt={product.img.alt} />
          <div className={Style.detailsContainer}>
            <div className={Style.productHeader}>
              <h2 className={Style.productName}>{product.name}</h2>
              <h2 className={Style.productPrice}>{productPrice}</h2>
            </div>
            <h3 className={Style.productdescription}>{product.description}</h3>

            <div className={Style.ProductDetailDiet}></div>
            {product.diet && product.diet.length > 0 && (
              <div className={Style.productDiet}>
                <ul className={Style.listStyle}>
                  {product.diet.map((diet) => (
                    <li key={diet}>{diet}</li>
                  ))}
                </ul>
                
              </div>


            )}

            {/* Ingredient bar */}
            {product.extras && product.extras.length > 0 && (
              <div className={Style.ingredientBar}>
                <strong> Personnalisez votre salade :</strong>
                <button className={Style.Ingredients} onClick={toggleIngredientList}>
                  {isIngredientListOpen ? 'Sélectionnez un ingrédient' : 'Sélectionnez un ingrédient'}
                  {isIngredientListOpen ? (
                    <svg className={Style.arrowUp} viewBox="0 0 330 330" xmlns="http://www.w3.org/2000/svg">
                      <path id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394
	                l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"/>
                    </svg>
                  ) : (
                    <svg className={Style.arrowDown} viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
                    </svg>
                  )}

                  <span className={isIngredientListOpen ? Style.arrowUp : Style.arrowDown}></span>
                </button>
                {isIngredientListOpen && (
                  <ul>
                    {INGREDIENTS.map((ingredient) => (
                      <li key={ingredient.id}>
                        <label>
                          <input
                            type="checkbox"
                            checked={selectedIngredients.includes(ingredient)}
                            onChange={() => handleIngredientSelection(ingredient)}
                          />
                          {ingredient.name} (+ {ingredient.price}€)
                        </label>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Chosen Elements */}
                <section className={Style.chosenElements}>
                  <h4>Ingrédients extras sélectionnés :</h4>
                  <ul>
                    {selectedIngredients.map((ingredient) => (
                      <li key={ingredient.id}>
                        {ingredient.name} (+ {ingredient.price}€)
                        <span className={Style.retirer} onClick={() => handleIngredientRemoval(ingredient)}>
                          retirer
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className={Style.actionsContainer}>

        {/* Quantity Picker */}
        <div className={Style.quantityPicker}>
          <strong className={Style.ProductTitle}>Quantité produit :</strong>
          <QuantityPicker value={quantity} onChange={handleQuantityChange} />

        </div>

        {/* Total Price */}
        <div className={Style.subActions}>
          <h3>Total : {totalPrice}</h3>
          <button className={Style.addToBasket} onClick={addToBasket}>Ajouter à la commande</button>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailsPage;
