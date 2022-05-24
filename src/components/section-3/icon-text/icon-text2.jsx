import React from "react";
import "./icon-text2.style.scss";

const IconText2 = ({ text, icon }) => {
  return (
    <div className="icon2-container">
      {/* <div className="shadow"></div> */}
      <div className="icon2-main">
        <span className="con-image">{icon}</span>
        <p className="con-text">{text}</p>
      </div>
    </div>
  );
};

export default IconText2;
