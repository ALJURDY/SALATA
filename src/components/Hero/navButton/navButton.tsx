
import style from "./navButton.module.css";

interface navButtonProps {
  buttonText: string;
  navigate: () => {

  } 
}

const navButton = (props : navButtonProps) => {
  const {navigate, buttonText} = props


  return (
    <button
      className={style.basketButton}
      onClick={navigate}
    >
      {buttonText.toUpperCase()}
    </button>
  );
};

export default navButton;