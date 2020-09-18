export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((total, product) => product.price + total, 0);

export const reducer = (state, action) => {
  // console.log("🔫", action); // For Debuging

  switch (action.type) {
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      const productIndex = state.basket.findIndex(
        (basketProduct) => basketProduct.id === action.id
      );
      let newBasket = [...state.basket];

      productIndex >= 0
        ? newBasket.splice(productIndex, 1)
        : console.warn(
            `Can't remove product (id: ${action.id}) as it's not in the basket!`
          );

      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};
