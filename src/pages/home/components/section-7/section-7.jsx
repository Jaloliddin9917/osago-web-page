import React from "react";

import Dropdown from "./dropdown/dropdown";
import "./section-7.style.scss";

const Section7 = () => {
  return (
    <div className="section-7-container">
      <div className="top">Вопросы и ответы</div>
      <div className="main">
        <div className="main-1">
          <Dropdown />
          <Dropdown />
          <Dropdown />
        </div>
        <div className="main-2">
          <Dropdown />
          <Dropdown />
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default Section7;
