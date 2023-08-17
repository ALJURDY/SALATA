import React, { useState } from "react";
import style from "./FilterButton.module.css";

interface FilterButtonProps {
  icategory?: string;
  icone?: string;
  idiet?: string;
  onClick?: () => void;
  isActive?: boolean;
}

const FilterButton = (props: FilterButtonProps) => {
  const { icategory, icone, idiet, isActive: externalIsActive } = props;
  const [isActive, setIsActive] = useState(externalIsActive || false);

  const isCategoryButton = icategory && icone;
  const isDietButton = idiet;

  const buttonClassName = isCategoryButton
    ? style.FilterButtonMenthe
    : isDietButton
    ? style.FilterButtonTangerine
    : "";

  const buttonStyle = isActive
    ? style.active
    : style.FilterButtonGrey; // Utilise FilterButtonGrey pour le style inactif

  return (
    <section className={style.FilterButtonFlex}>
      <button
        className={`${buttonClassName} ${buttonStyle}`}
        onClick={() => {
          props.onClick && props.onClick();
          setIsActive(!isActive);
        }}
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
