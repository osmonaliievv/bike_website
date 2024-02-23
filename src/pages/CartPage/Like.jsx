import React, { useEffect } from "react";
import { useLike } from "../../context/FavoritesContextProvider";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import save from "../../img/cartPage/save-svgrepo-com (1).svg";

const Like = () => {
  const { like, getLike, deleteProductFromLike } = useLike();
  const navigate = useNavigate();
  useEffect(() => {
    getLike();
  }, []);
  return (
    <div>
      <Header />
      <div className="like-cont">
        <div className="list-like">
          {like.products.map((elem) => (
            <div className="catalog__cards" key={elem.item.id}>
              <div className="catalog-card">
                <div className="catalog-img-ibg">
                  <img src={elem.item.image} alt="" />
                </div>
                <h3 onClick={() => navigate(`/details/${elem.id}`)}>
                  {elem.item.name}
                </h3>
                <div className="price-btn">
                  <p>{elem.item.price} ₽</p>
                  <div
                    className="price-btnn"
                    onClick={() => deleteProductFromLike(elem.item.id)}
                  >
                    <img src={save} alt="" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Like;
