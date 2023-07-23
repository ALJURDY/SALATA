
import style from "./NavButton.module.css";

interface NavButtonProps {
  buttonText: string;
  navigate: () => void;
}

const NavButton = (props: NavButtonProps) => {
  const { navigate, buttonText } = props


  return (
    <button
      className={style.NavButton}
      onClick={navigate}
    >
      {buttonText.toUpperCase()}
    </button>
  );
}

export default NavButton;