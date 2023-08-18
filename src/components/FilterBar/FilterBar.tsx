import React, { useState } from "react";
import style from "./FilterBar.module.css";
import FilterButton from "../FilterButton/FilterButton";
import { CATEGORY, DietType, ProductCategoryType } from "../../mocks/products";

interface FilterBarProps {
  setSelectedCategory: (category: string | null) => void;
  activeCategory: string | null;
}

const dietTypes: DietType[] = [
  "végan",
  "végétarien",
  "sans porc",
  "sans gluten",
  "pâtes",
  "produits de la mer",
];

const FilterBar: React.FC<FilterBarProps> = ({ setSelectedCategory }) => {
  const [activeCategory, setActiveCategory] = useState<string | null>("tout");

  const handleCategoryClick = (category: string) => {
    if (category === activeCategory) {
      setActiveCategory("tout");
      setSelectedCategory("tout");
    } else {
      setActiveCategory(category);
      setSelectedCategory(category);
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
      isActive={activeCategory === cat.name} // Utilise isActive pour définir l'état actif
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
              onClick={() => {
                handleCategoryClick(diet);
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FilterBar;
