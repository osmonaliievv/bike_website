import "./CartPage.scss";
import React from "react";
import bike from "../../img/cartPage/image 68.jpeg";
import biketwo from "../../img/cartPage/image 68.jpg";
import bikethree from "../../img/cartPage/image 68 (1).jpg";
import flagone from "../../img/cartPage/image 59.jpg";
import bikebottom from "../../img/cartPage/image 23.jpeg";
import deleteimg from "../../img/cartPage/trash-alt-svgrepo-com.svg";
const CartPage = () => {
  return (
    <>
      <div className="cart">
        <div className="cart__container">
          <div className="cart__title">Корзина</div>

          <div className="cart__cont-one">
            <div className="cart__block-one-left">
              <div className="cart__display title">
                <a className="cart__back-to-shopping" href="#">
                  Вернуться к покупкам
                </a>
                <a className="cart__empty-trash" href="#">
                  Oчистить корзину
                </a>
              </div>

              <div className="cart__blk-one">
                <img className="cart__img" src={bike} alt="" />
                <p className="cart__descr">
                  Look 977 BLACK FLUO YELLOW GREEN XT 2x11S AMC 2018
                </p>
                <div className="cart__count">
                  <div className="cart__btn-caunt">
                    <button>-</button>
                    <p>1</p>
                    <button>+</button>
                  </div>
                </div>
                <div className="cart__price">
                  <p>435 000 ₽</p>
                </div>
                <img className="cart__img-delete" src={deleteimg} alt="" />
              </div>

              <div className="cart__blk-one">
                <img className="cart__img" src={biketwo} alt="" />
                <p className="cart__descr">
                  Trek Fx 3 Disc Dnister Black HYBD 2022
                </p>
                <div className="cart__count">
                  <div className="cart__btn-caunt">
                    <button>-</button>
                    <p>1</p>
                    <button>+</button>
                  </div>
                </div>
                <div className="cart__price">
                  <p>97 070 ₽</p>
                </div>
                <button className="cart__btn-x">
                  <img className="cart__img-delete" src={deleteimg} alt="" />
                </button>
              </div>

              <div className="cart__blk-one">
                <img className="cart__img" src={bikethree} alt="" />
                <p className="cart__descr">Trek Marlin 4 Aloha ATB 27.5 2022</p>
                <div className="cart__count">
                  <div className="cart__btn-caunt">
                    <button>-</button>
                    <p>1</p>
                    <button>+</button>
                  </div>
                </div>
                <div className="cart__price">
                  <p>73 300 ₽</p>
                </div>
                <img className="cart__img-delete" src={deleteimg} alt="" />
              </div>
            </div>

            <div className="cart__one">
              <div className="cart__top">
                <div className="cart__block">
                  <div className="cart__desc">
                    <p className="cart__word">Номер заказа</p>
                    <p className="cart__prices">789563678</p>
                  </div>
                  <div className="cart__desc">
                    <p className="cart__word">
                      Сумма заказа <br /> (без скидки)
                    </p>
                    <p className="cart__prices">692 370 ₽</p>
                  </div>
                  <div className="cart__desc">
                    <p className="cart__words">Скидка</p>
                    <p className="cart__price">87 000 ₽</p>
                  </div>
                </div>
                <div className="cart__total-price">
                  <p className="cart__totalword">Итого</p>
                  <p className="cart__totalsum">605 370 ₽</p>
                </div>
              </div>
              <div className="cart__bottom">
                <button className="cart__btn">Оформить заказ</button>
              </div>
            </div>
          </div>

          {/* <div className="cart__bottom-block-last">
            <h2 className="cart__h2">Похожие товары</h2>
            <div className="cart__bottom-cont-last">
              <div className="cart__blok-bottom">
                <div className="cart__bottom-cart-one">
                  <div className="cart__bottom-row">
                    <img src={flagone} alt="" />
                    <p className="cart__bottom-soldOut">Распродано</p>
                  </div>
                  <div className="cart__bottom_bl">
                    <img className="cart__img-bottom" src={bikebottom} alt="" />
                    <p className="cart__bottomDescr">Orbea ALMA H30 2021</p>
                    <p className="cart_bottomPrice">90 968 ₽</p>
                  </div>
                </div>
              </div>

              <div className="cart__blok-bottom">
                <div className="cart__bottom-cart-one">
                  <div className="cart__bottom-row">
                    <img src={flagone} alt="" />
                    <p className="cart__bottom-soldOut">Распродано</p>
                  </div>
                  <div className="cart__bottom_bl">
                    <img className="cart__img-bottom" src={bikebottom} alt="" />
                    <p className="cart__bottomDescr">Orbea ALMA H30 2021</p>
                    <p className="cart_bottomPrice">90 968 ₽</p>
                  </div>
                </div>
              </div>

              <div className="cart__blok-bottom">
                <div className="cart__bottom-cart-one">
                  <div className="cart__bottom-row">
                    <img src={flagone} alt="" />
                    <p className="cart__bottom-soldOut">Распродано</p>
                  </div>
                  <div className="cart__bottom_bl">
                    <img className="cart__img-bottom" src={bikebottom} alt="" />
                    <p className="cart__bottomDescr">Orbea ALMA H30 2021</p>
                    <p className="cart_bottomPrice">90 968 ₽</p>
                  </div>
                </div>
              </div>

              <div className="cart__blok-bottom">
                <div className="cart__bottom-cart-one">
                  <div className="cart__bottom-row">
                    <img src={flagone} alt="" />
                    <p className="cart__bottom-soldOut">Распродано</p>
                  </div>
                  <div className="cart__bottom_bl">
                    <img className="cart__img-bottom" src={bikebottom} alt="" />
                    <p className="cart__bottomDescr">Orbea ALMA H30 2021</p>
                    <p className="cart_bottomPrice">90 968 ₽</p>
                  </div>
                </div>
              </div>
            </div> 
          </div> */}
        </div>
      </div>
    </>
  );
};

export default CartPage;
