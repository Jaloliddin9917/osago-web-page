import React from "react";
import './middle.style.scss';

import Icon from "../../icons/icon";

const Middle = ({icon, title, text}) => {
  return (
    <div className="middle-container">
      <div className="middle-1">
        <div className="middle-1-1">
          {icon}
        </div>
        <div className="middle-1-2">
          {title}
          <p>{text}</p>
        </div>
        <div className="middle-1-3">
          <Icon buttonType={"number"}>1</Icon>
        </div>
      </div>
      <div className="middle-2"></div>
    </div>
  );
};

export default Middle;
