import React, { useState } from "react";
import "./Filter.scss";

const Filter = () => {
  return (
    <div className="filter">
      <div className="filter__title">
        <h2>Категории товара</h2>
        <p></p>
      </div>
      <div className="filter__filter">
        <label>
          <input type="checkbox" className="check-box" />
          <span className="check-style"></span>
          <h3 className="h3">All</h3>
        </label>
      </div>
      <div className="filter__title filter__title-brends">
        <h2>Цена</h2>
        <p></p>
      </div>
      <input type="range" />
      <div className="filter__input-price">
        <input type="text" placeholder="0 ₽" /> -
        <input type="text" placeholder="1 137 900 ₽" />
      </div>
      <div className="filter__title filter__title-brends">
        <h2>Бренд</h2>
        <p></p>
      </div>
      <div className="filter__filter">
        <label>
          <input type="checkbox" className="check-box" />
          <span className="check-style"></span>
          <h3 className="h3">BMC</h3>
        </label>
      </div>
      <div className="filter__title filter__title-brends">
        <h2>Материал рамы</h2>
        <p></p>
      </div>
      <div className="filter__filter">
        <label>
          <input type="checkbox" className="check-box" />
          <span className="check-style"></span>
          <h3 className="h3">Алюминий</h3>
        </label>
      </div>
      <div className="filter__filter">
        <label>
          <input type="checkbox" className="check-box" />
          <span className="check-style"></span>
          <h3 className="h3">Карбон</h3>
        </label>
      </div>
      <div className="filter__filter">
        <label>
          <input type="checkbox" className="check-box" />
          <span className="check-style"></span>
          <h3 className="h3">Сталь</h3>
        </label>
      </div>
    </div>
  );
};

export default Filter;
