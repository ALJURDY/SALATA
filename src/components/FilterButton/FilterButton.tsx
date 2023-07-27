import React, { useState } from "react";
import style from "./FilterButton.module.css";

interface FilterButtonProps {
  icategory?: string;
  icone?: string;
  idiet?: string;
}

const FilterButton = (props: FilterButtonProps) => {
  const { icategory, icone, idiet } = props;
  const [isActive, setIsActive] = useState(false);

  const isCategoryButton = icategory && icone;
  const isDietButton = idiet;

  const buttonClassName = isCategoryButton
    ? style.FilterButtonMenthe
    : isDietButton
    ? style.FilterButtonTangerine
    : "";

  const manageClick = () => {
    setIsActive(!isActive);
  };

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
