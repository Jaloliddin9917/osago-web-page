import "./icon.style.scss";

export const BUTTON_TYPE_CLASSES = {
  viber: "viber",
  telegram: "telegram",
  whatsapp: "whatsapp",
  drop: "drop",
  number: "number",
  bigNumber: "bigNumber",
  telegramLong: "telegramLong",
  viberLong: "viberLong",
  plusAndClose: "plusAndClose",
  correct: "correct",
  pagination: "pagination"
};

const Icon = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`container-icons ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Icon;