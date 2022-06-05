const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_GOODS":
      return {
        ...state,
        goods: payload || [],
        order: JSON.parse(localStorage.getItem('goods')) || [],
        loading: false,
      };
    case "ADD_TO_CART": {
      const itemIndex = state.order.findIndex(
        (orderItem) => orderItem.mainId === payload.mainId
      );
      let newOrder = null;
      if (itemIndex < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        };
        newOrder = [...state.order, newItem];
        localStorage.setItem('goods', JSON.stringify(newOrder))
      } else {
        newOrder = state.order.map((orderItem, index) => {
          if (index === itemIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          } else {
            return orderItem;
          }
        });
      }
      return {
        ...state,
        order: newOrder,
      };
    }
    case "REMOVE_CART_ITEM":
      let newOrder = state.order.filter((el) => el.mainId !== payload.id);
      localStorage.setItem('goods', JSON.stringify(newOrder))
      return {
        ...state,
        order: newOrder,
      };
    case "INCREMENT_QUANTITY":
      return {
        ...state,
        order: state.order.map((el) => {
          if (el.mainId === payload.id) {
            const newQuantity = el.quantity + 1;
            return {
              ...el,
              quantity: newQuantity,
            };
          } else {
            return el;
          }
        }),
      };
    case "DECREMENT_QUANTITY":
      return {
        ...state,
        order: state.order.map((el) => {
          if (el.mainId === payload.id) {
            const newQuantity = el.quantity - 1;
            return {
              ...el,
              quantity: newQuantity >= 0 ? newQuantity : 0,
            };
          } else {
            return el;
          }
        }),
      };
    case "TOGGLE_CART": {
      return {
        ...state,
        isCartShow: !state.isCartShow,
      };
    }
    default:
      return state;
  }
};

export default reducer;
