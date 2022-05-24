import React from "react";
import './icon-text.style.scss';


const IconText = ({text, icon}) => {
  return (
    <div className="icon-container">
      <span className="bottom-image">{icon}</span>
      <p className="bottom-text">{text}</p>
    </div>
  );
};

export default IconText;
