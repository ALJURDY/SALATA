import React, { useState } from "react";
import style from "./FilterButton.module.css";

// Interface des propriétés du composant FilterButton
interface FilterButtonProps {
  icategory?: string;
  icone?: string;
  idiet?: string;
}

// Composant FilterButton
const FilterButton = (props: FilterButtonProps) => {
  // Destructuration des propriétés pour un accès plus facile
  const { icategory, icone, idiet } = props;

  // État pour suivre si le bouton est actif ou non
  const [isActive, setIsActive] = useState(false);

  // Vérifier si le bouton représente une catégorie avec une icône ou un régime sans icône
  const isCategoryButton = icategory && icone;
  const isDietButton = idiet;

  // Déterminer la classe CSS appropriée en fonction du type de bouton et de son état actif
  const buttonClassName = isCategoryButton
    ? style.FilterButtonMenthe
    : isDietButton
    ? style.FilterButtonTangerine
    : "";

  // Gérer le clic sur le bouton pour changer l'état actif
  const manageClick = () => {
    setIsActive(!isActive);
  };

  // Retourne le composant FilterButton avec le bouton approprié et son contenu
  return (
    <section className={style.FilterButtonFlex}>
      <button
        className={`${buttonClassName} ${isActive ? style.active : style.FilterButtonGrey}`}
        onClick={manageClick} 
      >
        {isCategoryButton && (
          <>
            {icone}
            <br />
            <br />
            {icategory}
          </>
        )}
        {isDietButton && <>{idiet}</>}
      </button>
    </section>
  );
};

export default FilterButton;

