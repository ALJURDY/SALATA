import React from "react";
import style from "./FilterBar.module.css";
import FilterButton from "../FilterButton/FilterButton";
import { CATEGORY, DietType } from "../../mocks/products";

// Liste des types de régimes disponibles
const dietTypes: DietType[] = [
  "végan",
  "végétarien",
  "sans porc",
  "sans gluten",
  "pâtes",
  "produits de la mer",
];

// Composant FilterBar
const FilterBar = () => {
  return (
    
    <section id="Commande"> {/* Ancre du bouton "Je Commande !" n'arrive pas au bon endroit pour le moment */}
      {/* Titre de la barre de filtres */}
      <h2 className={style.FilterBarH2}>Quelles saveurs italiennes aujourd'hui ?</h2>
      {/* Affichage des boutons de filtre pour les catégories */}
      <div className={style.FilterBarFlex}>
        {CATEGORY.map((cat) => (
          <div className={style.FilterBarButton} key={cat.name}>
            {/* Utilisation du composant FilterButton avec les propriétés de la catégorie */}
            <FilterButton icategory={cat.name} icone={cat.icone} />
          </div>
        ))}
      </div>

      {/* Affichage des boutons de filtre pour les types de régime */}
      <div className={style.FilterBarFlex}>
        {dietTypes.map((diet, index) => (
          <div className={style.FilterBarButton} key={index}>
            {/* Utilisation du composant FilterButton avec la propriété du type de régime */}
            <FilterButton idiet={diet} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FilterBar;
