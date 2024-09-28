//create action
//save dataHome
export const DATA_HOME = (data) => {
  return {
    type: "data-home",
    payload: data,
  };
};

//action show popup
export const SHOW_POPUP = () => {
  return {
    type: "show-popup",
    payload: { display: true },
  };
};

//action hide popup
export const HIDE_POPUP = () => {
  return {
    type: "hide-popup",
    payload: {
      display: false,
    },
  };
};

//action show ShopPage
export const ACTION_SHOWSHOP = (category) => {
  return { type: "show-shop", payload: category };
};

//action login
export const ON_LOGIN = (user) => {
  return {
    type: "on-login",
    payload: user,
  };
};

//action logout
export const ON_LOGOUT = (user) => {
  return {
    type: "on-logout",
    payload: user,
  };
};

//export addcart
export const ADD_CART = (cart) => {
  return {
    type: "add-cart",
    payload: cart,
  };
};

//action update cart
export const UPDATE_CART = (indexQuantity) => {
  return {
    action: "update-cart",
    payload: indexQuantity,
  };
};

//action remove cart
export const REMOVE_CART = (indexDelete) => {
  return {
    type: "remove-cart",
    payload: indexDelete,
  };
};
