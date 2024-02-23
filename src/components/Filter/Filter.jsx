import { useEffect, useState } from "react";
import { useProduct } from "../../context/ProductContextProvider";
import voice from "../../img/catalogPage/voice-fill-svgrepo-com.svg";
import "./Filter.scss";
import { useSearchParams } from "react-router-dom";

const Filter = ({
  maxPriceValue,
  setMaxPriceValue,
  minPriceValue,
  setMinPriceValue,
}) => {
  const { categories, getCategories, fetchByParams, getProducts, products } =
    useProduct();
  useEffect(() => {
    getCategories();
  }, []);
  const [range, setRange] = useState("");
  const [range2, setRange2] = useState("");
  const onRange = (e) => {
    setRange(e.target.value);
  };
  const onRange2 = (e) => {
    setRange2(e.target.value);
  };
  // ! Голосовой поиск
  const [transcript, setTranscript] = useState("");
  const [isListening, setIsListening] = useState(false);
  const startListening = () => {
    setIsListening(true);
    const recognition = new window.webkitSpeechRecognition();
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setTranscript(transcript);
      setSearch(transcript); // Установите транскрипт в поле поиска
    };
    recognition.onend = () => {
      setIsListening(false);
    };
    recognition.start();
    getProducts();
  };
  // ! Поиск
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  useEffect(() => {
    setSearchParams({
      q: search,
    });
    getProducts();
  }, [search]);
  const cleanFilter = () => {
    setSearch("");
    setTranscript("");
  };
  // Функция для обновления значения ползунка
  const handleRangeChange = (event) => {
    setMaxPriceValue(event.target.value);
  };
  const handleRangeChangeMin = (event) => {
    setMinPriceValue(event.target.value);
  };
  return (
    <div className="filter">
      <div className="inp-voice">
        <input
          defaultValue={transcript}
          type="text"
          className="inp"
          onChange={(e) => setSearch(e.target.value)}
        />
        <img
          style={{ width: "25px" }}
          src={voice}
          alt=""
          onClick={startListening}
          disabled={isListening}
          className="voice"
        />
      </div>

      <div className="filter__title">
        <h2>Категории товара</h2>
        <p></p>
      </div>
      <div className="filter__filter">
        <label>
          <input
            onChange={(e) => fetchByParams("category", e.target.value)}
            type="checkbox"
            value="all"
            className="check-box"
          />
          <span className="check-style"></span>
          <h3 className="h3">All</h3>
        </label>
        {categories.map((elem) => (
          <label key={elem.id}>
            <input
              onChange={(e) => fetchByParams("category", e.target.value)}
              type="checkbox"
              value={elem.name}
              className="check-box"
            />
            <span className="check-style"></span>
            <h3 className="h3">{elem.name}</h3>
          </label>
        ))}
      </div>
      <div className="filter__title filter__title-brends">
        <h2>Цена</h2>
        <p></p>
      </div>
      <div className="range">
        <input
          min={0}
          max={1000}
          type="range"
          onChange={handleRangeChangeMin}
        />
        <input
          min={0}
          max={10000000}
          type="range"
          onChange={handleRangeChange}
        />
      </div>

      <div className="filter__input-price">
        <label>
          <input
            value={minPriceValue}
            onChange={(event) => setMinPriceValue(event.target.value)}
            type="number"
          />
          <h3>Min</h3>
        </label>
        -
        <label>
          <input
            value={maxPriceValue}
            onChange={(e) => setMaxPriceValue(e.target.value)}
            type="number"
          />
          <h3>Max</h3>
        </label>
      </div>
      <button className="filter-btn" onClick={cleanFilter}>
        Сбросить фильтры
      </button>
    </div>
  );
};

export default Filter;
