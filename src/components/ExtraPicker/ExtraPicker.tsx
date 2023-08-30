import Style from './ExtraPicker.module.css';
import { IIngredient, INGREDIENTS } from '../../mocks/ingredients';

interface ExtraPickerProps {
  selectedIngredients: IIngredient[];
  isIngredientListOpen: boolean;
  handleIngredientSelection: (ingredient: IIngredient) => void;
  toggleIngredientList: () => void;
  handleIngredientRemoval: (ingredient: IIngredient) => void;
}

const ExtraPicker: React.FC<ExtraPickerProps> = ({
  selectedIngredients,
  isIngredientListOpen,
  handleIngredientSelection,
  toggleIngredientList,
  handleIngredientRemoval,
}) => {
  return (
    <div className={Style.ingredientBar}>
      <button className={Style.Ingredients} onClick={toggleIngredientList}>
        {isIngredientListOpen ? 'Sélectionnez un ingrédient' : 'Sélectionnez un ingrédient'}
        {isIngredientListOpen ? (
          <svg className={Style.arrowUp} viewBox="0 0 330 330" xmlns="http://www.w3.org/2000/svg">
             <path id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394
	                l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"/>
          </svg>
        ) : (
          <svg className={Style.arrowDown} viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
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
    </div>
  );
};

export default ExtraPicker;
