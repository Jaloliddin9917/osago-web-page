import React from "react";
import "./section-6.style.scss";
import { ReactComponent as Carsh } from "../../../../assets/section-6/carSh.svg";
import Middle from "./middle/middle";

const Section6 = () => {
  return (
    <div className="section-6-container">
      <div className="top">У нас покупают</div>
      <div className="middle">
        <div className="line-1">
          <Middle
            icon={<Carsh />}
            title={"Автоцивика"}
            text={"обязательное страхование автомобиля в Украине"}
          />
          <Middle
            icon={<Carsh />}
            title={"Автоцивика"}
            text={"обязательное страхование автомобиля в Украине"}
          />
          <Middle
            icon={<Carsh />}
            title={"Автоцивика"}
            text={"обязательное страхование автомобиля в Украине"}
          />
        </div>
        <div className="line-2">
          <Middle
            icon={<Carsh />}
            title={"Автоцивика"}
            text={"обязательное страхование автомобиля в Украине"}
          />
          <Middle
            icon={<Carsh />}
            title={"Автоцивика"}
            text={"обязательное страхование автомобиля в Украине"}
          />
          <Middle
            icon={<Carsh />}
            title={"Автоцивика"}
            text={"обязательное страхование автомобиля в Украине"}
          />
        </div>
        <div className="line-3">
          <Middle
            icon={<Carsh />}
            title={"Автоцивика"}
            text={"обязательное страхование автомобиля в Украине"}
          />
          <Middle
            icon={<Carsh />}
            title={"Автоцивика"}
            text={"обязательное страхование автомобиля в Украине"}
          />
          <Middle
            icon={<Carsh />}
            title={"Автоцивика"}
            text={"обязательное страхование автомобиля в Украине"}
          />
        </div>
        <div className="line-4">
          <Middle
            icon={<Carsh />}
            title={"Автоцивика"}
            text={"обязательное страхование автомобиля в Украине"}
          />
          <div className="line-4-1">
            <div className="bottom">
              <div className="bottom-2">
                <span> За 1 минуту</span> <br />
                автоответчик расскажет как оформить полис и что для этого
                понадобится
              </div>
              <div className="bottom-3"></div>
              <div className="bottom-4">
                0673524107
                <br />
                0503524107
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
