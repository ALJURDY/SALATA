import style from "./NavButton.module.css";

interface NavButtonProps {
  buttonText: string;
  navigate: () => void;
  buttonType?:"secondary";
}

const NavButton = (props: NavButtonProps) => {
  const { navigate, buttonText, buttonType } = props;

  const buttonClassName = `${style.NavButton} ${
    buttonType === "secondary" ? style.NavButtonSecondary : ""
  }`;

  return (
    <button className={buttonClassName} onClick={navigate}>
      {buttonText}
    </button>
  );
};

export default NavButton;
