import React, { useState, useEffect } from "react";
import "./Header.scss";
import icon from "../../img/icons/icon.svg";
import favourites from "../../img/icons/heart.svg";
import cart from "../../img/icons/corzina.svg";
import burgerNenu from "../../img/icons/burger-menu.svg";
import closeMenuImg from "../../img/mainPage/Frame 433.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const openMenu = () => {
    setOpen(true);
  };
  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <NavLink to={"/"}>
            <img src={icon} alt="logo" />
          </NavLink>
        </div>
        <div className={`header__menu ${open ? "_open" : ""} menu-header`}>
          <div className="header__close-menu" onClick={closeMenu}>
            <img src={closeMenuImg} alt="" />
          </div>
          <ul className="menu-header__list">
            <li className="menu-header__item">
              <NavLink to={"/catalog"}>Каталог</NavLink>
            </li>
            <li className="menu-header__item">
              <NavLink to={"/catalog"}>Каталог</NavLink>
            </li>
          </ul>
        </div>
        <div className="header__icons">
          <NavLink to={"/favourites"}>
            <img src={favourites} alt="favourites" />
          </NavLink>
          <NavLink to={"/cart"}>
            <img src={cart} alt="cart" />
          </NavLink>
          <button className="header__button" onClick={openMenu}>
            <img src={burgerNenu} alt="burger" />
          </button>
        </div>
      </div>
    </header>
  );
}
