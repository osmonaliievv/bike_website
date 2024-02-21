import React, { useState, useEffect } from "react";
import "./Header.scss";
import icon from "../../img/icons/icon.svg";
import search from "../../img/icons/search.svg";
import contact from "../../img/icons/contact.svg";
import heart from "../../img/icons/heart.svg";
import corzina from "../../img/icons/corzina.svg";
import burger_menu from "../../img/icons/burger-menu.svg";

export default function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [menuVisible, setMenuVisible] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header-logo" onClick={toggleSidebar}>
          <img src={icon} alt="logo" />
        </div>
        {(isMobile && menuVisible) || !isMobile ? (
          <div className="header-menu">
            <div className="header-div">TRADE IN</div>
            <div className="header-div">Велосипеды</div>
            <div className="header-div">Аксессуары</div>
          </div>
        ) : null}
        <ul className="header-icon">
          <li>
            <img src={search} alt="search" />
          </li>
          <li>
            <img src={contact} alt="contact" />
          </li>
          <li>
            <img src={heart} alt="heart" />
          </li>
          <li>
            <img src={corzina} alt="corzina" />
          </li>
        </ul>
        {isMobile && (
          <div className="burger-menu" onClick={toggleMenu}>
            <img src={burger_menu} alt="menu" />
          </div>
        )}
        <div className={`sidebar ${sidebarVisible ? "open" : ""}`}>
          <ul className="sidebar-menu">
            <li className="sidebar-item">Главная</li>
            <li className="sidebar-item">Товары</li>
            <li className="sidebar-item">О нас</li>
            <li className="sidebar-item">Контакты</li>
          </ul>
        </div>
      </div>
    </header>
  );
}
