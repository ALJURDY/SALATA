import style from "./FilterButton.module.css";

interface FilterButtonProps {
  category?: string;
  icone?: string;
  diet?: string;
  onClick?: () => void;
  isActive: boolean;
}

const FilterButton = (props: FilterButtonProps) => {
  const { category, icone, diet, isActive: externalIsActive } = props;

  const isCategoryButton = category && icone;
  const isDietButton = diet;

  const buttonClassName = isCategoryButton
    ? style.FilterButtonMenthe
    : isDietButton
    ? style.FilterButtonTangerine
    : "";

  // Utilisation d'une variable locale pour déterminer si le bouton est actif
  const isActive = props.isActive || (isDietButton && externalIsActive);

  // Utilisation du style approprié en fonction de la variable isActive
  const buttonStyle = isActive
    ? style.FilterButtonTangerine
    : style.FilterButtonGrey;

  return (
    <button
      className={`${buttonClassName} ${buttonStyle}`}
      onClick={props.onClick}
    >
      {isCategoryButton && (
        <>
          {icone}
          <br />
          <br />
          {category}
        </>
      )}
      {isDietButton && <>{diet}</>}
    </button>
  );
};

export default FilterButton;
