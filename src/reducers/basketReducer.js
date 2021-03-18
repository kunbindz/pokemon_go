const initialState = {
  basketNumber: 0,
  Carts: [],
};
const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POKEMON_BASKET":
      let poke = {
        name: action.payload.name,
        weight: action.payload.weight,
        height: action.payload.height,
      };
      state.Carts.push(poke);
      localStorage.setItem(`CartItems`, JSON.stringify(state));

      return {
        ...state,
        basketNumber: state.basketNumber + 1,
      };

    case "DELETE_CART":
      return {};
    default:
      return state;
  }
};

export default basketReducer;
