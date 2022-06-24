import React from "react";
import "./carousel-items.style.scss";

const CarouselItems = () => {
  return (
    <div className="carousel-item-container">
      <div className="carousel-top"></div>
      <div className="carousel-desc">
        В общем мы довольны! Всё работает, первый раз были страховые случаи и
        все прошло без проблем. Сотрудники, с которыми пришлось общаться очень
        приятные и разъясняли любой вопрос, рекомендую!
      </div>
      <div className="carousel-auth">Лариса Карпенко</div>
      <div className="carousel-text">КАСКО полис</div>
    </div>
  );
};

export default CarouselItems;
