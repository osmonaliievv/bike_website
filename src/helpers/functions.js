// helpers/functions.js

// Функция для безопасного получения данных корзины из localStorage
export const getLocalStorage = () => {
  try {
    const cart = JSON.parse(localStorage.getItem("cart"));
    // Возвращаем объект корзины или null, если его нет/ошибка
    return cart;
  } catch (e) {
    console.error("Error parsing localStorage 'cart' item:", e);
    // В случае ошибки парсинга, возвращаем null, чтобы не сломать приложение
    return null;
  }
};

// Функция для подсчета общей стоимости всех товаров в корзине
export const calcTotalPrice = (products) => {
  // Убедимся, что products - это массив, прежде чем использовать reduce
  if (!Array.isArray(products)) {
    console.warn("calcTotalPrice received non-array input:", products);
    return 0;
  }
  // Используем Number() для безопасного сложения, предотвращая конкатенацию строк
  const totalPrice = products.reduce(
    (acc, curr) => acc + Number(curr.subPrice),
    0
  );
  return totalPrice;
};

// Функция для подсчета всех товаров (позиций) в корзине
export const getProductsCountInCart = () => {
  const cart = getLocalStorage(); // Используем исправленную функцию
  // Проверяем, что cart существует и products является массивом
  return cart && Array.isArray(cart.products) ? cart.products.length : 0;
};

// Функция для подсчета стоимости за одну позицию (item)
export const calcSubPrice = (elem) => {
  // Убедимся, что price и count являются числами
  // Это особенно важно, если значения приходят из форм или API как строки
  return Number(elem.item.price) * Number(elem.count);
};

// Функция для безопасного получения данных избранного из localStorage
export const getLocalStorageFavorites = () => {
  try {
    const like = JSON.parse(localStorage.getItem("like"));
    // Возвращаем объект избранного или null, если его нет/ошибка
    return like;
  } catch (e) {
    console.error("Error parsing localStorage 'like' item:", e);
    // В случае ошибки парсинга, возвращаем null, чтобы не сломать приложение
    return null;
  }
};
