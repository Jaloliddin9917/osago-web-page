import "./button.scss";


export const BUTTON_TYPE_CLASSES = {
  basic: "basic",
  yellow: "yellow",
  dropdownBtn: "dropdownBtn",
  nextBtn: "nextBtn",
  memberForm: "memberForm",
  outlineBlue: "outlineBlue",
  outlineYellow: "outlineYellow",
  outlineGray: "outlineGray",
  buyBtn: "buyBtn",
  deleteBtn: "deleteBtn",
  cardBtn: "cardBtn",
  errorBtn: "errorBtn",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-con ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;