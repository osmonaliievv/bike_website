export const getLocalStoroge = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  return cart;
};

export const calcTotalPrice = (products) => {
  const totalPrice = products.reduce((acc, curr) => acc + curr.subPrice, 0);
  return totalPrice;
};

// функция для подсчета всех товаров в корзине
export const getProductsCountInCart = () => {
  // let cart = getLocalStoroge();
  // return cart ? cart.products.length : 0;
};

//функция для подсчета стоимости за одну позицию
export const calcSubPrice = (elem) => {
  return elem.item.price * elem.count;
};

export const getLocalStorageFavorites = () => {
  const like = JSON.parse(localStorage.getItem("like"));
  return like;
};
