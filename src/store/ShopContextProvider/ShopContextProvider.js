import { ShopContext } from "../context/context";
import { useReducer } from "react";
import reducer from "../reducer/reducer";

const defaultState = {
  goods: [],
  loading: true,
  order: [],
  isCartShow: false,
};

const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, defaultState);

  value.addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };
  value.removeCartItem = (itemId) => {
    dispatch({ type: "REMOVE_CART_ITEM", payload: { id: itemId } });
  };
  value.incQuantity = (itemId) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: { id: itemId } });
  };
  value.decQuantity = (itemId) => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: { id: itemId } });
  };
  value.handleCartShow = () => {
    dispatch({ type: "TOGGLE_CART" });
  };
  value.setGoods = (data) => {
    dispatch({ type: "SET_GOODS", payload: data });
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
export default ContextProvider;
