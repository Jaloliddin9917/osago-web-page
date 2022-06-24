import React from "react";
import "./ErrorPage.style.scss";

import Car from "../../assets/images/error-page/car-error.svg";
import Cloud from "../../assets/images/error-page/cloud.svg";
import Button from "../../components/buttons/button";

import { useHistory } from "react-router-dom";

const ErrorPage = () => {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <div className="error-container">
      <div className="error-top">
        <img src={Car} alt="" />
        <div className="error-top-1">
          <img src={Cloud} alt="" />
        </div>
      </div>
      <div className="error-middle">Запрашиваемая страница не найдена</div>
      <div className="error-bottom">
        <Button onClick={handleClick} type="button" buttonType="errorBtn">
          Вернуться на главную страницу{" "}
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
