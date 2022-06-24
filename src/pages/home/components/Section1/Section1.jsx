import React, { Fragment, useState } from "react";
import "./Section1.style.scss";
import IconText from "./icon-text/icon-text";
import Icon from "../../../../components/icons/icon";
import Text from "./text/text";
import { ReactComponent as MiniCar } from "../../../../assets/section-1/mini-car.svg";
import { ReactComponent as BigCar } from "../../../../assets/section-1/bi-car.svg";
import { ReactComponent as Moto } from "../../../../assets/section-1/moto.svg";
import { ReactComponent as Prisep } from "../../../../assets/section-1/pirisep.svg";
import { ReactComponent as Bus } from "../../../../assets/section-1/bus.svg";
import { AiOutlineDoubleRight } from "@react-icons/all-files/ai/AiOutlineDoubleRight";

import Button from "../../../../components/buttons/button";

const Section1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  return (
    <Fragment>
      <div className="section-1-container">
        <div className="container-body">
          <div className="left">
            <div className="left-1">
              <span>Полис ОСАГО </span>
              <h2>онлайн</h2>
            </div>
            <div className="left-2">
              <p>Сравните цены и условия 100+ ведущих страховых компаний</p>
            </div>
            <div className="left-3">
              <div className="left-3-1">
                <div className="left-3-1-1">Введите параметры своего авто</div>
                <span className="left-3-1-2">1</span>
              </div>
              <div className="left-3-2">
                <div className="left-3-2-1">Сравните цены и выб компанию</div>
                <span className="left-3-2-2">2</span>
              </div>
              <div className="left-3-3">
                <div className="left-3-3-1">Оформите полис полте на почту</div>
                <span className="left-3-3-2">3</span>
              </div>
            </div>
            <div className="left-4">
              <div className="left-4-1"></div>
              <div className="left-4-2"></div>
              <div className="left-4-3"></div>
              <div className="left-4-4"></div>
              <div className="left-4-5">Выберите компанию</div>
              <div className="left-4-6">Напишите в вайбер</div>
              <div className="left-4-7">Результат</div>
            </div>
          </div>
          <div className="right">
            <div className="right-1">
              <div className="right-1-1">
                <div className="right-1-1-1"></div>
                <div className="right-1-1-2">
                  <p>
                    через <br /> <h2>5 минут</h2>
                  </p>
                  <div className="right-1-1-2-1">
                    <span>полис зарегистрирован в МТСБУ</span>
                  </div>
                </div>
              </div>
              <div className="right-1-2"></div>
              <div className="right-1-3"></div>
            </div>
          </div>
          <div className="bottom">
            <div className="hr"></div>
            <div className="hr2"></div>
            <div className="bottom-1">
              <div className="bottom-1-1">
                <div>
                  <Icon buttonType={"number"}>1</Icon>
                </div>{" "}
                Выберите тип авто:
              </div>
              <div className="bottom-1-2">
                <Icon buttonType={"number"}>2</Icon> Объем двигателя:
              </div>
              <div className="bottom-1-3">
                <Icon buttonType={"number"}>3</Icon> Прописка по ТП:{" "}
                <Icon buttonType={"drop"} onClick={toggling}>
                  ?
                  {isOpen && (
                    <div className="dropdown">
                      <div className="dropdown-1">
                        Необходимо указывать место регистрации владельца
                        согласно данных тех. паспорта.
                      </div>
                      <div className="dropdown-2"></div>
                    </div>
                  )}
                </Icon>
              </div>
            </div>
            <div className="bottom-2">
              <div className="bottom-2-1">
                <IconText icon={<MiniCar />} text={"Легковой автомобиль"} />
                <IconText icon={<BigCar />} text={"Грузовой автомобиль"} />
                <IconText icon={<Bus />} text={"Автобус"} />
                <IconText icon={<Prisep />} text={"Прицеп"} />
                <IconText icon={<Moto />} text={"Мотоцикл/ мотороллер"} />
              </div>
              <div className="bottom-2-2">
                <Text text={"До 1600 см3"} />
                <Text text={"1601 - 2000 см3"} />
                <Text text={"2001 - 3000 см3"} />
                <Text text={"Более 3000 см3"} />
                <Text
                  text={
                    "Электромобиль (исключительно с силовым электродвигателем)"
                  }
                />
              </div>
              <div className="bottom-2-3">
                <p>
                  Введите город регистрации владельца транспортного средства,
                  напр., Киев
                </p>
              </div>
            </div>
            <div className="bottom-3">
              <div className="bottom-3-1">
                <h2>
                  Ваши <br /> данные:
                </h2>
                <div className="bottom-3-2">
                  <Button buttonType={"yellow"}>Легковой автомобиль</Button>
                </div>
              </div>

              <div className="bottom-3-3">
                <Button buttonType={"nextBtn"}>
                  Далее <AiOutlineDoubleRight className="nextCss" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Section1;
