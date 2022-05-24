import React, { useState } from "react";
import "./dropdown.style.scss";

import Icon from "../../icons/icon";

const Dropdown = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="dropdown-container">
      <div className={open ? "close" : "open"}>
        <div className="content-flex">
        <div className="bottom-1">
          <Icon buttonType={"bigNumber"}>?</Icon>
        </div>
        <div className={ open ? "close-title" : "open-title"}>Как купить страховку на авто?</div>
        <div className="bottom-3">
          <Icon buttonType={"plusAndClose"} onClick={() => setOpen(!open)}>
            {open ? "+" : "x"}
          </Icon>
        </div>
        </div>
        {!open && (
        <div className="bottom-4">
          Если Вы хотите самую дешевую страховку, тогда лучше застраховать
          машину онлайн осаго с нулевой франшизой, можно самую дешевую. Но чтоб
          была действующей и вела отчисления в МТСБУ. Иначе нужно платить самому
          при ДТП.
        </div>
      )}
      </div>
      
    </div>
  );
};

export default Dropdown;
