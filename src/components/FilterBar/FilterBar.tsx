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
  console.log("activeDiet prop:", activeDiet);

  const [isDietActive, setDietActive]= useState<DietType[]>([]);



  const handleCategoryClick = (category: string) => {
    if (category === activeCategory) {
      setSelectedCategory("tout");
    } else {
      setSelectedCategory(category);
    }
  };

  const handleDietClick = (diet: DietType | null) => {
    console.log("Clicked diet:", diet);
    if (diet === null) {
      // Désactive tous les régimes et réinitialise le filtrage
      setDietActive([]);
      setSelectedDiet(null);
    } else {
      // Sinon, vérifie si le régime est déjà actif
      if (isDietActive.includes(diet)) {
        // Si oui, le désactive
        const updatedDiets = isDietActive.filter(activeDiet => activeDiet !== diet);
        setDietActive(updatedDiets);
        setSelectedDiet(updatedDiets.length > 0 ? updatedDiets[0] : null); // Sélectionne le premier régime actif
      } else {
        // Sinon, l'ajoute aux régimes actifs
        setDietActive([...isDietActive, diet]);
        setSelectedDiet(diet);
      }
    }
  };
  

  return (
    <section className={style.FilterBarSection} id="Commande">
      <h2 className={style.FilterBarH2}>Quelles saveurs italiennes aujourd'hui ?</h2>
      <div className={style.FilterBarFlexCategory}>
        {CATEGORY.map((cat) => (
          <div className={style.FilterBarButtonCategory} key={cat.name}>
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
      <div className={style.FilterBarFlexDiet}>
        {dietTypes.map((diet, index) => (
          <div className={style.FilterBarButtonDiet} key={index}>
            <FilterButton
              idiet={diet}
              isActive={isDietActive.includes(diet)}
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
