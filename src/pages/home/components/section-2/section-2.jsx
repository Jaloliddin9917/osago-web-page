import React, { Fragment } from "react";
import "./section-2.style.scss";

import Icon from "../../../../components/icons/icon";
import { ReactComponent as Speaker } from "../../../../assets/section-2/speaker.svg";
import { ReactComponent as Youtube } from "../../../../assets/section-2/youtube.svg";
import { ReactComponent as Telegram } from "../../../../assets/section-2/telegram.svg";
import Button from "../../../../components/buttons/button";
import { SiViber } from "@react-icons/all-files/si/SiViber";
import { AiOutlineDoubleRight } from "@react-icons/all-files/ai/AiOutlineDoubleRight";



const Section2 = () => {
  return (
    <Fragment>
      <div className="section-2-container">
      <div className="left">
        <div className="left-1">
          <h3>Для оформления понадобятся документы</h3>
        </div>
        <div className="left-2">
          <div className="left-2-1">
            <Icon buttonType={"number"}>1</Icon>
            <span>Водительское удостоверение или паспорт</span>
          </div>
          <div className="left-2-1">
            <Icon buttonType={"number"}>2</Icon>
            <span>Свидетельство о регистрации авто (тех паспорт)</span>
          </div>
          <div className="left-2-1">
            <Icon buttonType={"number"}>3</Icon>
            <span>Идентификационный код</span>
          </div>
          <div className="left-2-1">
            <Icon buttonType={"number"}>4 </Icon>
            <span>Льготное удостоверение (если владелец авто)</span>
          </div>
        </div>
        <div className="left-3">
          <div className="left-3-1">
            <Speaker />
          </div>
          <div className="left-3-2">
            Прослушать подробную <br /> аудио-инструкцию
          </div>
        </div>
        <div className="left-4">
          <div className="left-4-1">
            <Youtube />
          </div>
          <div className="left-4-2">
            Посмотреть подробную <br /> видео-инструкцию
          </div>
        </div>
      </div>
      <div className="right">
        <div className="right-1">
          <span>Оформить полис</span>
          <p>элементарно!</p>
        </div>
        <div className="right-2">
          Заказывайте полис «Автоцивилки» онлайн <br /> <span>через месенджеры</span>
        </div>
        <div className="right-3">
          Нужно лишь сфотографировать документы и отправить нам фото — мы сами
          внесем все данные
        </div>
        <div className="right-4">
          <Icon buttonType={"telegramLong"}>
            <span>
              <Telegram />
            </span> 
            Telegram
          </Icon>
          <Icon buttonType={"viberLong"}>
            <SiViber className="viberCss" /> Viber
          </Icon>
        </div>
        <div className="right-5">
          <div className="right-5-1"></div>
          <div className="right-5-2">или</div>
          <div className="right-5-3"></div>
        </div>
        <div className="right-6">
          Заполните все данные <span>чсамостоятельно</span>
        </div>
        <div className="right-7">
          Интуитивно понятная форма — минимум действий, необходимых для
          приобретения полиса
        </div>
        <div className="right-8">
          <Button buttonType={"memberForm"}>
            Заполнить форму <AiOutlineDoubleRight className="memberCss" />
          </Button>
        </div>
      </div>
    </div>
    </Fragment>
  );
};

export default Section2;
