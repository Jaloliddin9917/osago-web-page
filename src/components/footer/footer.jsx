import React from "react";
import Button from "../buttons/button";
import Icon from "../icons/icon";
import "./footer.style.scss";

import { ReactComponent as HomeLogo } from "../../assets/footer/homeLogo.svg";
import { ReactComponent as Speaker } from "../../assets/footer/speaker.svg";
import { ReactComponent as Document } from "../../assets/footer/document.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="top">
        <div className="top-1">
          <div className="top-1-1"></div>
          <div className="top-1-2"></div>
          <div className="top-1-3"></div>
        </div>
        <div className="top-2">
          <h4>Хочешь страховку по минимальной цене?</h4>
          <p>
            — Пишите нам в Вайбер или Телеграм +380503524107 или заполняте
            данные на нашем сайте самостоятельно! Раньше нужно было звонить и
            вызывать агента для оформления полиса. Сейчас, с вводом электроного
            полиса, ситуация на рынке изменилась. По телефону полис не
            оформляется. Нужно писать в Вайбер или оформлять самостоятельно.
          </p>
        </div>
      </div>
      <div className="middle">
        <div className="middle-1"></div>
        <div className="middle-2"></div>
        <div className="middle-3"></div>
        <div className="middle-4"></div>
        <div className="middle-5"></div>
        <div className="middle-6"></div>
        <div className="middle-7"></div>
        <div className="middle-8"></div>
        <div className="middle-9"></div>
      </div>
      <div className="bottom">
        <div className="bottom-1">
          <Button buttonType={"outlineBlue"}>
            <HomeLogo /> Главная
          </Button>
          <Button buttonType={"outlineYellow"}>
            <Speaker /> Акции
          </Button>
          <Button buttonType={"outlineGray"}>
            <Document /> Блог
          </Button>
        </div>
        <div className="bottom-2">
          <div className="bottom-2-1">Компания</div>
          <div className="bottom-2-2">
            О нас <br /> Контакты <br /> Оплата и доставка Юридическая Гарантия{" "}
            <br /> Публичный договор
          </div>
        </div>
        <div className="bottom-3">
          <div className="bottom-3-1">Страхование</div>
          <div className="bottom-3-2">
            Онлайн ОСАГО <br /> Зеленая карта Страхование оружия Страхование
            нотариусов Онлайн КАСКО
          </div>
        </div>
        <div className="bottom-4">
          <div className="bottom-4-1">
            Квартира и дом <br /> От Короновируса <br /> Страхование туристов{" "}
            <br /> Ассистанс <br />
            Здоровье
          </div>
        </div>
        <div className="bottom-5">
          <div className="bottom-5-1">Обратная связь</div>
          <div className="bottom-5-2">
            <Icon buttonType={"viber"} />
            <Icon buttonType={"telegram"} />
            <Icon buttonType={"whatsapp"} />
          </div>
          <div className="bottom-5-3">0503524107</div>
          <div className="bottom-5-4">
            ответим в течении 5 минут с 9 до 21 оформим полис в течении 5 минут
            с 10 до 18
          </div>
        </div>
      </div>
      <div className="lowest">
        <div className="lowest-1">
          © 2011-2021 polisosago.kiev.ua. Авторские права на сайт защищены
        </div>
        <div className="lowest-2">Карта сайта</div>
        <div className="lowest-22">Можно оплатить с помощью:</div>
        <div className="lowest-3"></div>
        <div className="lowest-4"></div>
        <div className="lowest-5"></div>
      </div>
    </div>
  );
};

export default Footer;
