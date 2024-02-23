import React, { useEffect } from "react";
import "./DetailsPage.scss";
import "../../styles/common.scss";
import save from "../../img/cartPage/save-svgrepo-com (1).svg";
import img_heart from "../../img/imgMainPhoto/Heart_icon_red_hollow.svg.png";
// import img_heart from "../../img/imgMainPhoto/Heart_icon_red_hollow.svg.png";
import { NavLink, useParams } from "react-router-dom";
import { useDetail } from "../../context/DetailContextProvider";
import { useCart } from "../../context/CartContextProvider";
import { useLike } from "../../context/FavoritesContextProvider";

export default function DetailsPage() {
  const { getProductById, productById } = useDetail();
  const { addProductToCart, getCart } = useCart();
  const { addProductsToLike } = useLike();
  useEffect(() => {
    getCart();
  }, []);
  const { id } = useParams();
  useEffect(() => {
    getProductById(id);
  }, [id]);
  console.log("productById");
  return (
    <main className="details">
      <div className="details__container">
        <h4 className="bread-crumbds-details">
          <NavLink to={"/"}>Главная</NavLink> /
          <NavLink to={"/catalog"}>Каталог</NavLink> /{" "}
          <strong>{productById.name}</strong>
        </h4>
        <div className="details__top">
          <div>
            <div className="details__imgmain">
              <img src={productById.image} alt="" />
            </div>
          </div>
          <div className="details__block2 ">
            <div className="details__997 ">
              {productById.name}
              <p className="details__vnalichii">В наличии</p>
            </div>
            <p className="details__price">{productById.price}</p>
            <div className="details__size">
              <p>Размер:</p>
              <div className="details__sizess">
                <button className="details__sizes1">{productById.size}</button>
              </div>
            </div>
            <div className="details__current">
              <NavLink to={"/catalog"}>
                <button
                  onClick={() => addProductToCart(productById)}
                  className="details__cart"
                >
                  В корзину
                </button>
              </NavLink>

              <button className="details__heart">
                <img className="details__heart-img" src={img_heart} alt="" />
              </button>
              <button onClick={() => addProductsToLike(productById)}>
                <img style={{ width: "90px" }} src={save} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="details__block3">
          <div className="details__title">
            <p className="details__name">Описание</p>
            <p className="details__name-descr">{productById.descr}</p>
          </div>
        </div>
        <div className="details__block4">
          <div className="details__title2">Характеристика</div>
          <div className="blockk">
            <ul className="block__list">
              <li className="block__item">Цвет</li>
              <li className="block__item">Бренд</li>
              <li className="block__item">Материал рамы</li>
              <li className="block__item">Размер</li>
              <li className="block__item">Страна</li>
            </ul>
            <ul className="block__list">
              <li className="block__item2">{productById.color}</li>
              <li className="block__item2">{productById.brand}</li>
              <li className="block__item2">{productById.frame}</li>
              <li className="block__item2">{productById.size}</li>
              <li className="block__item2">{productById.country}</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
