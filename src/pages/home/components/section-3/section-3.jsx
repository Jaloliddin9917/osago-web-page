import React from "react";
import "./section-3.style.scss";

import { ReactComponent as Vector } from "../../../../assets/section-3/Vector.svg";
import { ReactComponent as Vector1 } from "../../../../assets/section-3/Vector1.svg";
import { ReactComponent as Vector2 } from "../../../../assets/section-3/Vector2.svg";
import { ReactComponent as Vector3 } from "../../../../assets/section-3/Vector3.svg";
import { ReactComponent as Vector4 } from "../../../../assets/section-3/Vector4.svg";
import IconText2 from "./icon-text/icon-text2";

const Section3 = () => {
  return (
    <div className="section-3-container">
      <div className="top">
        <div className="top-1">
          <h2>Покупая у нас Вы ничем не рискуете</h2>
        </div>
      </div>
      <div className="middle">
        <IconText2
          icon={<Vector />}
          text={"Сайт работает 10 лет – это лучшая гарантия стабильности!"}
        />
        <IconText2
          icon={<Vector1 />}
          text={"Полис оформит специалист с 10 летним стажем"}
        />
        <IconText2 icon={<Vector2 />} text={"Официальный агент МТСБУ"} />
        <IconText2
          icon={<Vector3 />}
          text={"Предоставляем Вам Юридическую гарантию"}
        />
        <IconText2
          icon={<Vector4 />}
          text={"Условия сотрудничества с нами открыты, вот договор"}
        />
      </div>
      <div className="bottom">
        <div className="bottom-1">100%</div>
        <div className="bottom-2">
          <span>гарантия возврата денег, страховой компанией,</span> <br /> за
          неиспользованные месяцы страховки
        </div>
        <div className="bottom-3"></div>
      </div>
    </div>
  );
};

export default Section3;
