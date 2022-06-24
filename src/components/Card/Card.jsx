import React from "react";
import "./Card.style.scss";
import { Link } from "react-router-dom";

import { Button } from "@nextui-org/react";

const Card = ({ id, title, image }) => {
  return (
    <div className="card-container" key={id}>
        <div className="card-top">
          <img className="card-img" src={image} alt="" />
        </div>
        <div className="card-bottom">
          <div className="card-title">{title}</div>
          <div className="card-button">
            <Link style={{ textDecoration: "none" }} to={`/airlines/${id}`}>
              <Button auto shadow>
                <span style={{ color: "white" }}>Читать далее</span>
              </Button>
            </Link>
          </div>
        </div>
    
    </div>
  );
};

export default Card;
