import styles from "./Buttons.module.scss";

const ButtonWhite = (props) => {
  return (
    <button {...props} className={props.className + " " + styles.white}>
      {props.children}
    </button>
  );
};

const ButtonRed = (props) => {
  return (
    <button {...props} className={props.className + " " + styles.red}>
      {props.children}
    </button>
  );
};
const ButtonGrey = (props) => {
  return (
    <button {...props} className={props.className + " " + styles.grey}>
      {props.children}
    </button>
  );
};

const ButtonFactory = (props) => {
  switch (props.type) {
    case "white":
      return ButtonWhite(props);
    case "red":
      return ButtonRed(props);
    case "grey":
      return ButtonGrey(props);
    default:
      return ButtonRed(props);
  }
};

export default ButtonFactory;
