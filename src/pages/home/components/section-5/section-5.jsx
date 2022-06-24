import React from "react";
import Button from "../../../../components/buttons/button";
import "./section-5.style.scss";
import { AiOutlineDoubleRight } from "@react-icons/all-files/ai/AiOutlineDoubleRight";


const Section5 = () => {
  return (
    <div className="section-5-container">
      <div className="left">
        <div className="left-1">
          <div className="left-1-1">АКЦИОНОЕ ПРЕДЛОЖЕНИЕ ДНЯ</div>
          <div className="left-1-2">от 855₴</div>
        </div>
        <div className="left-2">
          Cтрахование профессиональной ответственности <br />
          <span>нотариусов</span>
        </div>
        <div className="left-3">
          Получите надежного страхового партнера, который всегда платит по своим
          обязательствам
        </div>
        <div className="left-4">
            <Button buttonType={"buyBtn"}>Купить <AiOutlineDoubleRight/></Button>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Section5;
