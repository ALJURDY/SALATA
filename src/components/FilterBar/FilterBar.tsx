import React, { useState } from "react";
import style from "./FilterBar.module.css";
import FilterButton from "../FilterButton/FilterButton";
import { CATEGORY, DietType } from "../../mocks/products";

interface FilterBarProps {
  setSelectedCategory: (category: string | null) => void;
  activeCategory: string | null;
  setSelectedDiet: (diet: DietType | null) => void;
  activeDiet: DietType | null;
}

const dietTypes: DietType[] = [
  "végan",
  "végétarien",
  "sans porc",
  "sans gluten",
  "pâtes",
  "produits de la mer",
];


const FilterBar: React.FC<FilterBarProps> = ({ setSelectedCategory, activeCategory, setSelectedDiet, activeDiet }) => {

  const handleCategoryClick = (category: string) => {
    if (category === activeCategory) {
      setSelectedCategory("tout");
    } else {
      setSelectedCategory(category);
    }
  };

  const handleDietClick = (diet: DietType | null) => {
    if (activeDiet === diet) {
      setSelectedDiet(null);
    } else {
      setSelectedDiet(diet);
    }
  };

  return (
    <section className={style.FilterBarSection} id="Commande">
      <h2 className={style.FilterBarH2}>Quelles saveurs italiennes aujourd'hui ?</h2>
      <div className={style.FilterBarFlex}>
        {CATEGORY.map((cat) => (
          <div className={style.FilterBarButton} key={cat.name}>
            <FilterButton
              icategory={cat.name}
              icone={cat.icone}
              isActive={activeCategory === cat.name}
              onClick={() => {
                handleCategoryClick(cat.name);
              }}
            />
          </div>
        ))}
      </div>
      <div className={style.FilterBarFlex}>
        {dietTypes.map((diet, index) => (
          <div className={style.FilterBarButton} key={index}>
            <FilterButton
              idiet={diet}
              isActive={activeDiet === diet}
              onClick={() => {
                handleDietClick(diet);
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FilterBar;
