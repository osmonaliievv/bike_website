import React, { useEffect } from "react";
import "./DetailsPage.scss";
import "../../styles/common.scss";
import img_main from "../../img/imgMainPhoto/image 68.png";
import img_heart from "../../img/imgMainPhoto/Heart_icon_red_hollow.svg.png";
import { useParams } from "react-router-dom";
import { useDetail } from "../../context/DetailContextProvider";

export default function DetailsPage() {
  const { getProductById, productById } = useDetail();
  const { id } = useParams();
  useEffect(() => {
    getProductById(id);
  }, [id]);
  console.log("productById");
  return (
    <main className="details">
      <div className="details__container">
        <div className="details__top">
          <div>
            <div className="details__imgmain">
              <img src={img_main} alt="" />
            </div>
          </div>
          <div className="details__block2 ">
            <div className="details__997 ">
              Look 977 BLACK FLUO YELLOW GREEN XT <br />
              2x11S AMC 2018
              <p className="details__vnalichii">В наличии</p>
            </div>
            <p className="details__price">435 000 ₽</p>
            <div className="details__descr">
              Профессиональный гоночный хардтейл для кросс-кантри уровня
              Чемпионата и Кубка Мира. Одна из самых легких рам среди гоночных
              хардтейлов для кросс-канри.
            </div>
            <div className="details__size">
              <p>Размер:</p>
              <div className="details__sizess">
                <button className="details__sizes1">S</button>
                <button className="details__sizes1">ML</button>
                <button className="details__sizes1">M</button>
                <button className="details__sizes1">L</button>
                <button className="details__sizes1">XL</button>
              </div>
            </div>
            <div className="details__current">
              <button className="details__button-smole">-</button>
              <p className="details__count">1</p>
              <button className="details__button-smole">+</button>
              <button className="details__cart">В корзину</button>
              <button className="details__heart">
                <img className="details__heart-img" src={img_heart} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="details__block3">
          <div className="details__title">
            <p className="details__name">Описание</p>
            <p className="details__name-descr">
              Профессиональный гоночный хардтейл для кросс-кантри уровня
              Чемпионата и Кубка Мира. Одна из самых лёгких рам среди гоночных
              хардтейлов для кросс-кантри. Scott Scale 700 RC — это рама
              из композитного волокна HMX, гоночная трансмиссия Sram XX1/X01
              1×11, дисковые тормоза Shimano XTR M9000 и гоночные колеса Syncros
              XR RC. Байк Нино Шуртера для шорт-трек кросс-кантри.
            </p>
          </div>
        </div>
        <div className="details__block4">
          <div className="details__title2">Характеристика</div>
          <div className="block">
            <ul className="block__list">
              <li className="block__item">Цвет</li>
              <li className="block__item">Бренд</li>
              <li className="block__item">Материал рамы</li>
              <li className="block__item">Размер</li>
              <li className="block__item">Страна</li>
            </ul>
            <ul className="block__list">
              <li className="block__item2">Желтый</li>
              <li className="block__item2">Scott</li>
              <li className="block__item2">Карбон</li>
              <li className="block__item2">L</li>
              <li className="block__item2">Кыргызстан</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
