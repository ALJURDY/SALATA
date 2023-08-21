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

  const isCategoryButton = icategory && icone;
  const isDietButton = idiet;

  const buttonClassName = isCategoryButton
    ? style.FilterButtonMenthe
    : isDietButton
    ? style.FilterButtonTangerine
    : "";

  const buttonStyle = props.isActive
    ? style.FilterButtonTangerine
    : style.FilterButtonGrey;

  return (
    <section className={style.FilterButtonFlex}>
      <button
        className={`${buttonClassName} ${buttonStyle}`}
        onClick={props.onClick}
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
