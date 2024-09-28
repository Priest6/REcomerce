import { getTolocalStorage } from "../data/localstorage";

//format price
const formatPrice = (str) => {
  const string = String(str);
  return string
    .split("")
    .reverse()
    .reduce((prev, next, index) => {
      return (index % 3 ? next : next + ".") + prev;
    });
};

//2.initial state
const initialState = {
  stateDataLogin: {},
  dataHome: [],
  formatPrice,
  statePopup: { display: false },
  stateCategoryShopPage: "All",
  dataCartProduct: localStorage.getItem("dataCart")
    ? getTolocalStorage("dataCart")
    : [],
};

//3.reducer
const rootReducer = (state = initialState, action) => {
  // console.log("action :>> ", action);
  switch (action.type) {
    //add dataHome
    case "data-home":
      return {
        ...state,
        dataHome: action.payload,
      };
    //show popup
    case "show-popup":
      return {
        ...state,
        statePopup: {
          ...state.statePopup,
          display: action.payload.display,
        },
      };
    //hide popup
    case "hide-popup":
      return {
        ...state,
        statePopup: {
          ...state.statePopup,
          display: action.payload.display,
        },
      };
    //
    case "show-shop":
      return {
        ...state,
        stateCategoryShopPage: action.payload,
      };
    //login-logout
    case "on-login":
      return {
        ...state,
        stateDataLogin: {
          email: action.payload.email,
          password: action.payload.password,
        },
      };
    case "on-logout":
      return {
        ...state,
        stateDataLogin: {
          email: action.payload.email,
          password: action.payload.password,
        },
      };
    //add cart
    case "add-cart":
      return {
        ...state,
        dataCartProduct: [...state.dataCartProduct, action.payload],
      };
    //+/-cart
    case "update-cart":
      let updateCart = [...state.dataCartProduct];
      updateCart[action.payload.index].quantityCart =
        updateCart[action.payload.index].quantityCart +
        action.payload.quantityUpdate;
      return {
        ...state,
        dataCartProduct: updateCart,
      };
    //remove cart
    case "remove-cart":
      const removeCart = [...state.dataCartProduct];
      removeCart.splice(action.payload, 1);
      return {
        ...state,
        dataCartProduct: removeCart,
      };
    default:
      return state;
  }
};
export default rootReducer;
