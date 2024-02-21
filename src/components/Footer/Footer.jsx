import React from "react";
import "./Footer.scss";
import icon from "../../img/icons/icon.svg";
import phone from "../../img/footer-icons/phone.svg";
import navigation from "../../img/footer-icons/navigation.svg";
import mail from "../../img/footer-icons/mail.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer-logo">
            <img src={icon} alt="logo" />
          </div>
        </div>
        <div className="blocks">
          <ul className="block__list">
            <li className="block">Каталог</li>
            <li className="block__item">Велосипеды</li>
            <li className="block__item">Аксессуары</li>
          </ul>
          <ul className="block__list">
            <li className="block">Для клиента</li>
            <li className="block__item">О нас</li>
            <li className="block__item">Доставка и оплата</li>
            <li className="block__item">Блог</li>
            <li className="block__item">Веломастерская</li>
            <li className="block__item">Хранение</li>
            <li className="block__item">Гарантии</li>
          </ul>
          <ul className="block__list">
            <li className="block">Контакты</li>
            <li className="block__item">
              <img className="f-m-i" src={phone} alt="phone" />
              +7(495)055-75-86
            </li>
            <li className="block__item">
              <img className="f-m-i" src={navigation} alt="navigation" />
              г. Москва, ул. Доватора, 7/8 с1
            </li>
            <li className="block__item">
              <img className="f-m-i" src={mail} alt="mail" />
              order@world-bike.ru
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
