import React, { useState, useEffect, useRef } from "react";
import "./Header.scss";
import icon from "../../img/icons/icon.svg";
import authIcon from "../../img/imgMainPhoto/icons8-пользователь-мужчина-в-кружке-48 (1).png";
import favourites from "../../img/icons/heart.svg";
import cart from "../../img/icons/corzina.svg";
import burgerMenu from "../../img/icons/burger-menu.svg";
import closeMenuImg from "../../img/mainPage/Frame 433.svg";

import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContextProvider";
import { ADMIN } from "../../helpers/const";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { user, logOut } = useAuthContext();
  const menuRef = useRef(null); // Ссылка на модальное окно

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Проверяем, если клик был вне модального окна
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setAnchorEl(null);
      }
    };

    // Добавляем обработчик на документ
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      // Удаляем обработчик при размонтировании компонента
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const openMenu = () => {
    setOpen(true);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  const handleLogOut = () => {
    logOut();
    setAnchorEl(null);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <NavLink to={"/"}>
            <img src={icon} alt="logo" />
          </NavLink>
        </div>
        <div className="app-bar">
          <div
            className={`menu ${anchorEl ? "open" : ""}`}
            ref={menuRef} // Привязываем ссылку к модальному окну
          >
            <ul>
              <li>
                <NavLink to={"/auth"} onClick={() => setAnchorEl(null)}>
                  Register
                </NavLink>
              </li>
              <li>
                <NavLink to={"/login"} onClick={() => setAnchorEl(null)}>
                  Log In
                </NavLink>
              </li>
              <li onClick={handleLogOut}>Log Out</li>
            </ul>
          </div>
        </div>
        <div className={`header__menu ${open ? "_open" : ""} menu-header`}>
          <div className="header__close-menu" onClick={closeMenu}>
            <img src={closeMenuImg} alt="" />
          </div>
          <ul className="menu-header__list">
            <li className="menu-header__item">
              <NavLink to={"/catalog"}>Каталог</NavLink>
            </li>
            {user && user.email === ADMIN ? (
              <li className="menu-header__item">
                <NavLink to={"/admin"} onClick={() => setAnchorEl(null)}>
                  Админка
                </NavLink>
              </li>
            ) : null}
          </ul>
        </div>
        <div className="header__icons">
          <button className="avatar-button" onClick={handleMenu}>
            <span className="account-circle-icon">
              {user && user.email ? (
                <p>{user.email.slice(0, 1)}</p>
              ) : (
                <img src={authIcon} alt="ICON" />
              )}
            </span>
          </button>
          <NavLink to={"/favourites"}>
            <img src={favourites} alt="favourites" />
          </NavLink>
          <NavLink to={"/cart"}>
            <img src={cart} alt="cart" />
          </NavLink>
          <button className="header__button" onClick={openMenu}>
            <img src={burgerMenu} alt="burger" />
          </button>
        </div>
      </div>
    </header>
  );
}
