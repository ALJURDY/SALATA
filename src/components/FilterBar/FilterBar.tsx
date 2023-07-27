import React from "react";
import style from "./FilterBar.module.css";
import FilterButton from "../FilterButton/FilterButton";
import { CATEGORY, DietType } from "../../mocks/products";

const dietTypes: DietType[] = [
  "végan",
  "végétarien",
  "sans porc",
  "sans gluten",
  "pâtes",
  "produits de la mer",
];

const FilterBar = () => {
  return (
    <section>
      <h2 className={style.FilterBarH2}>Quelles saveurs italiennes aujourd'hui ?</h2>
      <div className={style.FilterBarFlex}>
        {/* Boucle pour les catégories */}
        {CATEGORY.map((cat) => (
          <div className={style.FilterBarButton} key={cat.name}>
            {/* Utiliser les props icategory et icone pour FilterButton */}
            <FilterButton icategory={cat.name} icone={cat.icone} />
          </div>
        ))}
      </div>

      <div className={style.FilterBarFlex}>
        {/* Boucle pour les régimes */}
        {dietTypes.map((diet, index) => (
          <div className={style.FilterBarButton} key={index}>
            {/* Utiliser la prop idiet pour FilterButton */}
            <FilterButton idiet={diet} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FilterBar;