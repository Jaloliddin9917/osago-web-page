import React from "react";
import "./navigation.style.scss";
import { Outlet } from "react-router-dom";
import { ReactComponent as Vector } from ".././../assets/header/Vector.svg";
import { ReactComponent as Vector2 } from ".././../assets/header/Vector2.svg";
import { ReactComponent as Vector3 } from ".././../assets/header/Vector3.svg";
import { ReactComponent as Present } from ".././../assets/header/present.svg";
import { FiChevronDown } from "@react-icons/all-files/fi/FiChevronDown";

import Icon from "../../components/icons/icon";
import Button from "../../components/buttons/button";

const Navigation = () => {
  return (
    <div className="container">
      <div className="header-top">
        <div className="header-top-1">
          <div className="vector">
            <Vector />
            <span className="vector-title">
              Только электронный полис безопасней
            </span>
          </div>
          <div className="vector">
            <Vector2 />
            <span className="vector-title">
              Только электронный полис безопасней
            </span>
          </div>
          <div className="vector">
            <Vector3 />
            <span className="vector-title">
              Только электронный полис безопасней
            </span>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="logoPresent">
          <Present />
        </div>
        <div className="header-1">
          <div className="header-1-1">
            <h2 className="drim">Дарим 300₴</h2>
            <span className="drim-p">если у нас будет дороже</span>
          </div>
        </div>
        <div className="header-2">
          <div className="links">
            <h3 className="link">О нас</h3>
            <h3 className="link">Контакты</h3>
            <h3 className="link">Оплата и доставка</h3>
          </div>
          <div className="header-button">
            <Button buttonType={"dropdownBtn"}>
              Застраховать{" "}
              <div className="bottomBtn">
                <FiChevronDown />
              </div>
            </Button>
          </div>
        </div>
        <div className="header-3">
          <div className="header-3-1">
            <Icon buttonType="viber"></Icon>
            <Icon buttonType="telegram"></Icon>
            <Icon buttonType="whatsapp"></Icon>
          </div>
          <div className="header-3-2">
            <p>0503524107</p>
            <span>10:00 - 18:00</span>
          </div>
        </div>
      </div>
      
      <Outlet />
    </div>
  );
};

export default Navigation;
