import "./CartPage.scss";
import React, { useEffect, useState } from "react";
import bike from "../../img/cartPage/image 68.jpeg";
import biketwo from "../../img/cartPage/image 68.jpg";
import bikethree from "../../img/cartPage/image 68 (1).jpg";
import flagone from "../../img/cartPage/image 59.jpg";
import bikebottom from "../../img/cartPage/image 23.jpeg";
import deleteimg from "../../img/cartPage/trash-alt-svgrepo-com.svg";
import { useCart } from "../../context/CartContextProvider";
const CartPage = () => {
  const { cart, getCart, changeProductCount, deleteProductFromCart } =
    useCart();
  useEffect(() => {
    getCart();
  }, []);
  const cartCleaner = () => {
    localStorage.removeItem("cart");
    getCart();
  };
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
                <a onClick={cartCleaner} className="cart__empty-trash" href="#">
                  Oчистить корзину
                </a>
              </div>
              {cart.products.map((elem) => (
                <div className="cart__blk-one" key={elem.item.id}>
                  <img className="cart__img" src={elem.item.image} alt="" />
                  <p className="cart__descr">{elem.item.name}</p>
                  <div className="cart__count">
                    <div className="cart__btn-caunt">
                      <input
                        type="number"
                        value={elem.count}
                        onChange={(e) =>
                          changeProductCount(elem.item.id, e.target.value)
                        }
                        defaultValue={elem.count}
                        max={20}
                        min={1}
                      />
                    </div>
                  </div>
                  <div className="cart__price">
                    <p>{elem.subPrice}</p>
                  </div>
                  <img
                    onClick={() => deleteProductFromCart(elem.item.id)}
                    className="cart__img-delete"
                    src={deleteimg}
                    alt=""
                  />
                </div>
              ))}
            </div>

            <div className="cart__one">
              <div className="cart__top">
                <div className="cart__block">
                  <div className="cart__desc">
                    <p className="cart__word">
                      Сумма заказа <br /> (без скидки)
                    </p>
                    <div className="cart__prices">
                      <p>{cart.totalPrice} ₽</p>
                    </div>
                  </div>
                  <div className="cart__desc">
                    <p className="cart__words">Скидка</p>
                    <div className="cart__price">
                      <p>{cart.totalPrice / 2} ₽</p>
                    </div>
                  </div>
                </div>
                <div className="cart__total-price">
                  <p className="cart__totalword">Итого</p>
                  <p className="cart__totalsum">{cart.totalPrice}₽</p>
                </div>
              </div>
              <div className="cart__bottom">
                <button className="cart__btn">Оформить заказ</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
