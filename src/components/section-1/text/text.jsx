import React from "react";
import './text.style.scss';


const Text = ({text}) => {
  return (
    <div className="text-container">
      <p>{text}</p>
    </div>
  );
};

export default Text;
