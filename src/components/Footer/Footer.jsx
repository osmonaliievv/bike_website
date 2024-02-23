import React from "react";
import "./Footer.scss";
import icon from "../../img/icons/icon.svg";
import phone from "../../img/footer-icons/phone.svg";
import navigation from "../../img/footer-icons/navigation.svg";
import mail from "../../img/footer-icons/mail.svg";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <NavLink to={"/"}>
            <img src={icon} alt="footer" />
          </NavLink>
        </div>
        <div className="footer__menu">
          <p className="footer-menu">Контакты</p>
          <ul className="menu-footer-list">
            <li className="footer-mine-menu">
              <img src={phone} alt="phone" />
              +7(495)055-75-86 +7(965)142-22-99
            </li>
            <li className="footer-mine-menu">
              <img src={navigation} alt="navigation" />
              г. Бишкек, ул.Табышалиева 29
            </li>
            <li className="footer-mine-menu">
              <img src={mail} alt="mail" />
              order@world-bike.ru
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
