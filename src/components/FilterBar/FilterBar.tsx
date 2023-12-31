import style from "./FilterBar.module.css";
import FilterButton from "../FilterButton/FilterButton";
import { CATEGORY, DietType } from "../../mocks/products";

interface FilterBarProps {
  setSelectedCategory: (category: string) => void;
  activeCategory: string | null;
  setSelectedDiets: (diets: DietType[] | []) => void;
  activeDiets: DietType[] | [];
}

const dietTypes: DietType[] = [
  "végan",
  "végétarien",
  "sans porc",
  "sans gluten",
  "pâtes",
  "produits de la mer",
];

const FilterBar = (props: FilterBarProps) => {
  const { setSelectedCategory, activeCategory, activeDiets, setSelectedDiets } =
    props;

  const handleRefreshClick = () => {
    setSelectedDiets([]);
  };

  const handleDietClick = (diet: DietType) => {
    if (dietIsActive(diet)) {
      setSelectedDiets(activeDiets.filter((activeDiet) => activeDiet !== diet));
    } else {
      setSelectedDiets([diet, ...activeDiets]);
    }
  };

  const dietIsActive = (diet: DietType): boolean => {
    return activeDiets.find((activeDiet) => activeDiet === diet) ? true : false;
  };

  return (
    <section className={style.FilterBarSection} id="Commande">
      <h2 className={style.FilterBarH2}>
        Quelles saveurs italiennes aujourd'hui ?
      </h2>

      {/* CATEGORIES FILTERS */}
      <div className={style.FilterBarFlexCategory}>
        {CATEGORY.map((cat) => (
          <div className={style.FilterBarButtonCategory} key={cat.name}>
            <FilterButton
              category={cat.name}
              icone={cat.icone}
              isActive={activeCategory === cat.name}
              onClick={() => {
                setSelectedCategory(cat.name);
              }}
            />
          </div>
        ))}
      </div>

      {/* DIETS FILTERS */}
      <div className={style.FilterBarFlexDiet}>
        {dietTypes.map((diet: DietType, index) => (
          <div className={style.FilterBarButtonDiet} key={index}>
            <FilterButton
              diet={diet}
              isActive={dietIsActive(diet)}
              onClick={() => {
                handleDietClick(diet);
              }}
            />
          </div>
        ))}

        <button
          className={style.FilterBarButtonRefresh}
          onClick={handleRefreshClick}
        >
          <svg
            className={activeDiets!.length > 0 ? style.svgOn : style.svgOff}
            width="25"
            height="25"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="M21 0C9.40275 0 0 9.40275 0 21C0 32.5972 9.40275 42 21 42C32.5972 42 42 32.5972 42 21C42 9.40275 32.5972 0 21 0ZM29.75 35L27.3717 31.4335C25.515 32.5762 23.338 33.25 21 33.25C14.2467 33.25 8.75 27.755 8.75 21H12.25C12.25 25.8247 16.1753 29.75 21 29.75C22.6222 29.75 24.1255 29.288 25.4223 28.511L22.75 24.5H32.7583L29.75 35ZM29.75 21C29.75 16.1753 25.8247 12.25 21 12.25C19.3778 12.25 17.8745 12.712 16.5777 13.489L19.25 17.5H9.24175L12.25 7L14.6283 10.5665C16.485 9.42375 18.662 8.75 21 8.75C27.7533 8.75 33.25 14.245 33.25 21H29.75Z"
                fill="#F9B175"
              />
            </g>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default FilterBar;
