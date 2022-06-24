import React from "react";
import "./section-4.style.scss";

import SocialMedia from "./social-media/social-media";
import { ReactComponent as Facebook } from "../../../../assets/section-4/facebook.svg";
import { ReactComponent as Google } from "../../../../assets/section-4/google.svg";
import { ReactComponent as Telegramm } from "../../../../assets/section-4/telegramm.svg";
import { ReactComponent as Viberr } from "../../../../assets/section-4/viberr.svg";
import Carousel from "../../../../components/Carousel";

const Section4 = () => {
  return (
    <div className="section-4-container">
      <div className="top">
        <div className="top-1">Нас рекомендуют</div>
        <div className="top-2">
          Присоединяйтесь к честным отзывам, напишите в удобном Вам мессенджере
        </div>
        <div className="top-3">
          <SocialMedia
            icon={<Facebook />}
            text={"Отзывы в Facebook"}
            rating={"5.0"}
            count={"из 5"}
          />
          <SocialMedia
            icon={<Google />}
            text={"Отзывы в Google"}
            rating={"4.9 "}
            count={"из 5"}
          />
          <SocialMedia
            icon={<Viberr />}
            text={"Вайбер"}
            rating={"5.0"}
            count={"из 5"}
          />
          <SocialMedia
            icon={<Telegramm />}
            text={"Телеграм"}
            rating={"5.0"}
            count={"из 5"}
          />
        </div>
      </div>
      <div className="bottom">
        <Carousel/>
      </div>
    </div>
  );
};

export default Section4;
